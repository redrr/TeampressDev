package hu.playmaker.controller.play;

import hu.playmaker.common.Permissions;
import hu.playmaker.controller.BaseController;
import hu.playmaker.database.model.gameplan.CustomGame;
import hu.playmaker.database.model.gameplan.GamePlan;
import hu.playmaker.database.model.system.LookupCode;
import hu.playmaker.database.model.system.Organization;
import hu.playmaker.database.model.system.User;
import hu.playmaker.database.model.system.UserOrganization;
import hu.playmaker.database.model.trainingplan.TrainingPlan;
import hu.playmaker.database.service.databank.LigaService;
import hu.playmaker.database.service.gameplan.CustomGameService;
import hu.playmaker.database.service.gameplan.GamePlanService;
import hu.playmaker.database.service.system.LookupCodeService;
import hu.playmaker.database.service.system.UserNotificationService;
import hu.playmaker.database.service.system.UserOrganizationService;
import hu.playmaker.database.service.system.UserService;
import hu.playmaker.database.service.trainingplan.TrainingPlanConnectionService;
import hu.playmaker.database.service.workout.WorkoutService;
import hu.playmaker.handler.SessionHandler;
import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Controller
@RequestMapping("/gameplan")
public class GamePlanController extends BaseController {

    private UserOrganizationService userOrganizationService;
    private UserService userService;
    private LookupCodeService lookupCodeService;
    private LigaService ligaService;
    private GamePlanService gamePlanService;
    private WorkoutService workoutService;
    private CustomGameService customGameService;
    private UserNotificationService userNotificationService;
    private TrainingPlanConnectionService connectionService;

    public GamePlanController(UserOrganizationService userOrganizationService, UserService userService, LookupCodeService lookupCodeService, LigaService ligaService, GamePlanService gamePlanService, WorkoutService workoutService, CustomGameService customGameService, UserNotificationService userNotificationService, TrainingPlanConnectionService connectionService) {
        this.userOrganizationService = userOrganizationService;
        this.userService = userService;
        this.lookupCodeService = lookupCodeService;
        this.ligaService = ligaService;
        this.gamePlanService = gamePlanService;
        this.workoutService = workoutService;
        this.customGameService = customGameService;
        this.userNotificationService = userNotificationService;
        this.connectionService = connectionService;
    }

    @RequestMapping("")
    public ModelAndView show() {
        ModelAndView view;
        if(hasPermission(Permissions.PLANNER) || hasPermission(Permissions.PLANS_TABLE)) {
            view = new ModelAndView("play/GamePlan");
            Organization organization = userOrganizationService.getOrgByUser(userService.findEnabledUserByUsername(SessionHandler.getUsernameFromCurrentSession())).getOrganization();
            ArrayList<UserOrganization> teamList = userOrganizationService.getOrgListByUser(userService.findEnabledUserByUsername(SessionHandler.getUsernameFromCurrentSession()));
            if(hasPermission(Permissions.PLANNER)){
                view.addObject("teams", teamList);
                view.addObject("custom", getGames());
            }
            if(hasPermission(Permissions.PLANS_TABLE) || hasPermission(Permissions.PLANNER)){
                view.addObject("table", getCreated(teamList));
            }
            view.addObject("type", organization.getType());
            return view;
        }
        return new ModelAndView("403");
    }

    private ArrayList<CustomGame> getGames() {
        ArrayList<CustomGame> result = new ArrayList<>();
        List<CustomGame> s = customGameService.findByCreated(SessionHandler.getUsernameFromCurrentSession());
        for(CustomGame customGame : s){
            if(!gamePlanService.exist(customGame)){
                result.add(customGame);
            }
        }
        return result;
    }

    private List<GamePlan> getCreated(List<UserOrganization> userOrganizations) {
        List<GamePlan> result = new ArrayList<>();
        for(UserOrganization userOrganization : userOrganizations) {
            Organization organization = userOrganization.getOrganization();
            LookupCode team = userOrganization.getType();
            List<GamePlan> plans = gamePlanService.findByOrg(organization);
            for (GamePlan gamePlan : plans) {
                if(Objects.nonNull(gamePlan.getCustomGame()) && gamePlan.getCustomGame().getTeam().getCode().equals(team.getCode())){
                    result.add(gamePlan);
                }
            }
        }
        return result;
    }

    @RequestMapping(method = RequestMethod.POST, value = "/getplayers")
    @ResponseBody
    public String getPlayers(@RequestParam("dd") String data, @RequestParam("teamId") String teamId, @RequestParam("sors") String sors, @RequestParam("type") String type){
        JSONObject json = new JSONObject();
        if(hasPermission(Permissions.PLANNER) || hasPermission(Permissions.PLANS_TABLE)){
            String team = (data.equals("0")) ? ligaService.find(Integer.parseInt(teamId)).getTeam() : teamId;
            ArrayList<UserOrganization> teamList = userOrganizationService.getUsersByOrgIfPlayer(userOrganizationService.getOrgByUser(userService.findEnabledUserByUsername(SessionHandler.getUsernameFromCurrentSession())).getOrganization(), lookupCodeService.getByCodeAndLgroup(team, "TEAM_TYPE"));
            StringBuilder id = new StringBuilder();
            StringBuilder name = new StringBuilder();
            StringBuilder attend = new StringBuilder();
            StringBuilder url = new StringBuilder();
            StringBuilder meccsek = new StringBuilder();
            StringBuilder golok = new StringBuilder();
            StringBuilder ongolok = new StringBuilder();
            StringBuilder sarga = new StringBuilder();
            StringBuilder piros = new StringBuilder();
            StringBuilder kezdo = new StringBuilder();
            StringBuilder csere = new StringBuilder();
            StringBuilder kispad = new StringBuilder();
            StringBuilder x = new StringBuilder();
            StringBuilder y = new StringBuilder();
            for(int i = 0; i < teamList.size(); i++){
                UserOrganization userOrganization = teamList.get(i);
                id.append(userOrganization.getUser().getId());
                name.append(userOrganization.getUser().getName());
                url.append(userOrganization.getUser().getProfilImg());
                meccsek.append("NaN");
                golok.append("NaN");
                ongolok.append("NaN");
                sarga.append("NaN");
                piros.append("NaN");
                kezdo.append("NaN");
                csere.append("NaN");
                kispad.append("NaN");
                if (type.equals("cust") && gamePlanService.exist(userOrganization.getUser(), customGameService.find(Integer.parseInt(sors)))) {
                    GamePlan gamePlan = gamePlanService.find(userOrganization.getUser(), customGameService.find(Integer.parseInt(sors))).get(0);
                    attend.append(gamePlan.getAttendance());
                    x.append(Objects.isNull(gamePlan.getxCordinate()) ? "" : gamePlan.getxCordinate());
                    y.append(Objects.isNull(gamePlan.getyCordinate()) ? "" : gamePlan.getyCordinate());
                }
                if(i != teamList.size()-1){
                    id.append(";");
                    name.append(";");
                    attend.append(";");
                    url.append(";");
                    meccsek.append(";");
                    golok.append(";");
                    ongolok.append(";");
                    sarga.append(";");
                    piros.append(";");
                    kezdo.append(";");
                    csere.append(";");
                    kispad.append(";");
                    x.append(";");
                    y.append(";");
                }
            }
            try {
                json.put("id", id);
                json.put("name", name);
                json.put("attendanceType", attend);
                json.put("url", url);
                json.put("meccsek", meccsek);
                json.put("golok", golok);
                json.put("ongolok", ongolok);
                json.put("sarga", sarga);
                json.put("piros", piros);
                json.put("kezdo", kezdo);
                json.put("csere", csere);
                json.put("kispad", kispad);
                json.put("x", x);
                json.put("y", y);
            } catch (Exception e){
                e.printStackTrace();
            }
        }
        return json.toString();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/setplayers")
    @ResponseBody
    public String setPlayers(@RequestParam("playerId") String playersId, @RequestParam("gameType") String gameType, @RequestParam("gameId") String gameId, @RequestParam("x") String playersX, @RequestParam("y") String playersY, @RequestParam("attendance") String attendanceType){
        if(hasPermission(Permissions.PLANNER) && (gameType.equals("sors") || gameType.equals("cust"))){
            String[] id = playersId.split(";");
            String[] x = playersX.split(";");
            String[] y = playersY.split(";");
            String[] attendance = attendanceType.split(";");
            Organization organization = userOrganizationService.getOrgByUser(userService.findEnabledUserByUsername(SessionHandler.getUsernameFromCurrentSession())).getOrganization();
            for(int i = 0; i < id.length; i++){
                User user = userService.find(Integer.parseInt(id[i]));
                CustomGame customGame = customGameService.find(Integer.parseInt(gameId));
                GamePlan gamePlan = gamePlanService.exist(user, customGame) ? gamePlanService.find(user, customGame).get(0) : new GamePlan();
                gamePlan.setCustomGame(customGame);
                if(!(x[i].equals("") || y[i].equals("") || x[i].equals("del") || y[i].equals("del"))){
                    gamePlan.setxCordinate(Integer.parseInt(x[i]));
                    gamePlan.setyCordinate(Integer.parseInt(y[i]));
                }
                gamePlan.setAttendance(Integer.parseInt(attendance[i]));
                gamePlan.setUser(user);
                gamePlan.setOrganization(organization);
                gamePlanService.mergeFlush(gamePlan);
                pushNotificationToUser(
                        "training/workout",
                        "Új felállás",
                        "Új felállás került létrehozásra!",
                        user,
                        userNotificationService
                );
            }
            return "success";
        }
        return "403";
    }

    @RequestMapping(method = RequestMethod.POST, value = "/lastworkout")
    @ResponseBody
    public String getPlayerWorkout(@RequestParam("id") String playerId){
        if(hasPermission(Permissions.PLANNER) || hasPermission(Permissions.PLANS_TABLE)){
            User player = userService.find(Integer.parseInt(playerId));
            TrainingPlan trainingPlan = workoutService.findLastByUser(player).getTrainingPlan();
            return processJSON(trainingPlan, player, workoutService, connectionService);
        }
        return "403";
    }
}
