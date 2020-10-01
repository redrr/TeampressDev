package hu.playmaker.controller;

import hu.playmaker.common.Permissions;
import hu.playmaker.common.factory.chartjs.Color;
import hu.playmaker.common.factory.chartjs.Data;
import hu.playmaker.common.factory.chartjs.RadarChartBuilder;
import hu.playmaker.common.factory.chartjs.RadarDataSet;
import hu.playmaker.common.factory.chartjs.common.enums.BorderCapStyle;
import hu.playmaker.database.model.index.Calendar;
import hu.playmaker.database.model.system.Organization;
import hu.playmaker.database.model.system.User;
import hu.playmaker.database.model.system.UserNotification;
import hu.playmaker.database.model.system.UserOrganization;
import hu.playmaker.database.model.trainingplan.TrainingPlan;
import hu.playmaker.database.model.workout.Workout;
import hu.playmaker.database.service.index.CalendarService;
import hu.playmaker.database.service.system.UserNotificationService;
import hu.playmaker.database.service.workout.WorkoutService;
import hu.playmaker.handler.SessionHandler;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;

public class BaseController {

    public boolean hasPermission(Permissions permission){
        return Objects.nonNull(SessionHandler.getUsernameFromCurrentSession()) && SessionHandler.userHasPermission(permission.name());
    }

    //region [Region] Workout result modal data

    protected String processJSON(TrainingPlan training, User user, WorkoutService workoutService) {
        JSONObject json = new JSONObject();
        try {
            json.put("pastTraining", workoutService.existsByTraining(training, user));
            if(workoutService.existsByTraining(training, user)){
                json.put("exercises", processModalWorkout(workoutService.findAllByTraining(training, user)));
                json.put("chart", getChart(training, user, workoutService));
            } else {
                json.put("exercises", destroyLastSpliter(training.getStringForWorkoutJs()));
            }
        } catch (Exception e){
            e.printStackTrace();
        }
        return json.toString();
    }

    private String processModalWorkout(ArrayList<Workout> workouts) {
        StringBuilder result = new StringBuilder();
        String dot = ",";
        String split = ";";
        for(Workout workout : workouts) {
            result.append(workout.getExercise().getName()).append(dot)
                    .append(workout.getExercise().getType().getCode()).append(dot)
                    .append(setupResult(workout.getResult()))
                    .append(split);
        }
        return destroyLastSpliter(result.toString());
    }

    private String setupResult(String result) {
        int counter = 0;
        String[] chars = result.split("");
        for (String s : chars){
            if(s.equals("/")){
                counter++;
            }
        }
        if(counter == 4){
            return result.replace("/","");
        }
        return result;
    }

    private String destroyLastSpliter(String text) {
        return (text.endsWith(";")) ? text.substring(0, text.length()-1) : text;
    }

    private String getChart(TrainingPlan trainingPlan, User user, WorkoutService workoutService){
        ArrayList<Workout> workouts = workoutService.findAllByTraining(trainingPlan, user);
        RadarChartBuilder chartBuilder = new RadarChartBuilder();
        //Dataset template
        RadarDataSet template = new RadarDataSet();
        template.setBorderCapStyle(BorderCapStyle.ROUND);
        template.setBorderWidth(4);
        template.setFill(true);
        template.setPointRadius(2);
        template.setPointHoverRadius(4);
        template.setPointHitRadius(12);
        template.setPointHoverBorderWidth(8);
        //Create Datasets
        Data<RadarDataSet> data = new Data<>();
        RadarDataSet resultDataSet = new RadarDataSet(template);
        Color resultColor = new Color(26, 188, 156, 0.3);
        Color resultHoverColor = new Color(26, 188, 156, 1.0);
        resultDataSet.setLabel("Eredmény");
        resultDataSet.setBackgroundColor(resultColor);
        resultDataSet.setHoverBackgroundColor(resultHoverColor);
        resultDataSet.setBorderColor(resultHoverColor);
        resultDataSet.setHoverBorderColor(resultHoverColor);
        resultDataSet.setPointBackgroundColor(resultColor);
        resultDataSet.setPointHoverBackgroundColor(resultColor);
        RadarDataSet avgDataSet = new RadarDataSet(template);
        Color avgColor = new Color(44, 62, 80, 0.3);
        Color avgHoverColor = new Color(44, 62, 80, 1.0);
        avgDataSet.setLabel("Átlag");
        avgDataSet.setBackgroundColor(avgColor);
        avgDataSet.setHoverBackgroundColor(avgHoverColor);
        avgDataSet.setBorderColor(avgHoverColor);
        avgDataSet.setHoverBorderColor(avgHoverColor);
        avgDataSet.setPointBackgroundColor(avgColor);
        avgDataSet.setPointHoverBackgroundColor(avgColor);
        List<Object> results = new ArrayList<>();
        List<Object> avgs = new ArrayList<>();
        for(Workout workout : workouts){
            if(!(workout.getResult().equals("H~h~H") || workout.getResult().equals(""))){
                if(!workout.getExercise().getType().getCode().equals("Szöveges értékelés")){
                    data.addLabel(workout.getExercise().getName());
                }
                if(workout.getExercise().getType().getCode().equals("Százalék")){
                    results.add(Integer.parseInt(workout.getResult()));
                }
                else if(workout.getExercise().getType().getCode().contains("1-10")){
                    results.add(Integer.parseInt(workout.getResult())*10);
                }
                else if(workout.getExercise().getType().getCode().equals("Sikeres/darabszám")){
                    if(workout.getResult().split("/")[0].equals("0")){
                        results.add(0);
                    } else if (workout.getResult().split("/")[1].equals("0")){
                        results.add(100);
                    } else {
                        results.add((int)(Double.parseDouble(workout.getResult().split("/")[0])/Double.parseDouble(workout.getResult().split("/")[1])*100));
                    }
                }
                else if(workout.getExercise().getType().getCode().equals("Csillagok")){
                    results.add(Integer.parseInt(workout.getResult())*20);
                }
                avgs.add(workoutService.avgExercise(trainingPlan, workout.getExercise()));
            }
        }
        avgDataSet.setData(avgs.toArray());
        resultDataSet.setData(results.toArray());
        data.addDataset(avgDataSet);
        data.addDataset(resultDataSet);
        chartBuilder.setData(data);
        return chartBuilder.build();
    }

    //endregion

    //region [Region] Notifications

    public void pushNotification(String location, String title, String description, List<UserOrganization> userorgs, UserNotificationService service, User current){
        for (UserOrganization userOrganization : userorgs){
            if(userOrganization.getUser().equals(current))
                continue;
            UserNotification notification = new UserNotification();
            notification.setTitle(title);
            notification.setDescription(description);
            notification.setUser(userOrganization.getUser());
            notification.setLocation(location);
            service.merge(notification);
        }
        service.flush();
    }

    //endregion

    //region [Region] Events

    public void pushEvents(Date date, String name, Organization organization, CalendarService service){
        Calendar calendar = new Calendar();
        calendar.setEndDateTime(date);
        calendar.setStartDateTime(date);
        calendar.setEventName(name);
        calendar.setOrganization(organization);
        service.mergeFlush(calendar);
    }

    //endregion

    //region [Region] create Alert

    public JSONObject doAlert(String cssClass, String message) {
        JSONObject alert = new JSONObject();
        try {
            alert.put("class", cssClass);
            alert.put("msg", message);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return alert;
    }

    //endregion
}
