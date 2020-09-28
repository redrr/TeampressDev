package hu.playmaker.form.validator;

import hu.playmaker.form.GameForm;
import hu.playmaker.form.TrainingPlanForm;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import static java.util.Objects.isNull;

public class TrainingPlanFormValidator implements Validator {

    @Override
    public boolean supports(Class<?> clazz) {
        return clazz.getSimpleName().equals(TrainingPlanForm.class.getSimpleName());
    }

    @Override
    public void validate(Object target, Errors errors) {
        if(errors.hasErrors())  return;
        TrainingPlanForm trainingPlan = (TrainingPlanForm) target;
        if(trainingPlan.getDate().equals("") || trainingPlan.getDate() == null || trainingPlan.getDate().trim().length() == 0){
            errors.rejectValue("date", "", "Nem lett dátum megadva!");
        }
        if (isNull(trainingPlan.getTeam()) || trainingPlan.getDate() == null || trainingPlan.getDate().trim().length() == 0){
            errors.rejectValue("date", "", "Nem lett csapat megadva!");
        }
        if (isNull(trainingPlan.getExercise1()) || trainingPlan.getDate() == null || trainingPlan.getDate().trim().length() == 0){
            errors.rejectValue("date", "", "Nem lett gyakorlat megadva");
        }
        if (isNull(trainingPlan.getExercise1Time()) || trainingPlan.getDate() == null || trainingPlan.getDate().trim().length() == 0){
            errors.rejectValue("date", "", "Nem lett gyakorlat időtartam megadva!");
        }
    }
}
