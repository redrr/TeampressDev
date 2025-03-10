package com.teampress.controller.play;

import com.teampress.common.enums.Permissions;
import com.teampress.controller.BaseController;
import com.teampress.database.model.gameplan.CustomGame;
import com.teampress.database.model.index.Calendar;
import com.teampress.database.model.system.LookupCode;
import com.teampress.database.model.system.Organization;
import com.teampress.database.model.system.User;
import com.teampress.database.service.gameplan.CustomGameService;
import com.teampress.database.service.gameplan.GamePlanService;
import com.teampress.database.service.index.CalendarService;
import com.teampress.database.service.system.LookupCodeService;
import com.teampress.database.service.system.UserNotificationService;
import com.teampress.database.service.system.UserOrganizationService;
import com.teampress.database.service.system.UserService;
import com.teampress.form.GameForm;
import com.teampress.form.validator.GameFormValidator;
import com.teampress.handler.SessionHandler;
import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.validation.Valid;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

import static java.util.Objects.isNull;

@Controller
@RequestMapping("/game")
public class GameCreateController extends BaseController {

    private UserOrganizationService userOrganizationService;
    private UserService userService;
    private LookupCodeService lookupCodeService;
    private GamePlanService gamePlanService;
    private CustomGameService customGameService;
    private CalendarService calendarService;
    private UserNotificationService userNotificationService;

    public GameCreateController(UserOrganizationService userOrganizationService, UserService userService, LookupCodeService lookupCodeService, GamePlanService gamePlanService, CustomGameService customGameService, CalendarService calendarService, UserNotificationService userNotificationService) {
        this.userOrganizationService = userOrganizationService;
        this.userService = userService;
        this.lookupCodeService = lookupCodeService;
        this.gamePlanService = gamePlanService;
        this.customGameService = customGameService;
        this.calendarService = calendarService;
        this.userNotificationService = userNotificationService;
    }

    @RequestMapping("")
    public ModelAndView show() {
        if(hasPermission(Permissions.PLANS_CREATE)) {
            ModelAndView view = new ModelAndView("play/GameCreate", "modifyGame", new GameForm());
            view.addObject("types", teams(userService.findEnabledUserByUsername(SessionHandler.getUsernameFromCurrentSession())));
            view.addObject("table", customGameService.findByCreated(SessionHandler.getUsernameFromCurrentSession()));
            view.addObject("error","");
            return view;
        }
        return new ModelAndView("403");
    }

    private List<LookupCode> teams(User user) {
        List<LookupCode> result = new ArrayList<>();
        userOrganizationService.getOrgListByUser(user).forEach(userOrganization -> {
            if(!result.contains(userOrganization.getType()))
                result.add(userOrganization.getType());
        });
        return result;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ModelAndView doSubmit(@Valid @ModelAttribute("modifyGame") GameForm form, BindingResult result) {
        if(hasPermission(Permissions.PLANS_CREATE)){
            GameFormValidator validator = new GameFormValidator();
            ModelAndView errorView = show();
            validator.validate(form, result);
            LookupCode team = lookupCodeService.find(form.getTeamId());
            Date date = null;
            try {
                SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd/HH:mm");
                date = dateFormat.parse(form.getDate());
            } catch (ParseException e) {
                e.printStackTrace();
                errorView.getModel().replace("error", "A megadott időpont nem értelmezhető!");
                return errorView;
            }
            if(result.hasErrors()){
                errorView.getModel().replace("error", Objects.requireNonNull(result.getFieldError("name")).getDefaultMessage());
                return errorView;
            } else if (customGameService.exist(team, date)) {
                errorView.getModel().replace("error", team.getCode()+" csapatnak ebben az időpontban már van mérkőzése!");
                return errorView;
            } else {
                User currentUser = userService.findEnabledUserByUsername(SessionHandler.getUsernameFromCurrentSession());
                Organization organization = userOrganizationService.getOrgByUser(currentUser).getOrganization();
                String uuid = UUID.randomUUID().toString();
                CustomGame customGame = (isNull(form.getId())) ? new CustomGame() : customGameService.find(form.getId());
                customGame.setUuid(uuid);
                customGame.setFormattedDate(form.getDate());
                customGame.setOrganization(organization);
                customGame.setEnemy(form.getEnemy());
                customGame.setPlace(form.getPlace());
                customGame.setDeleted(false);
                customGame.setTeam(team);
                customGameService.mergeFlush(customGame);
                pushNotification(uuid,
                        "calendar",
                        "Új mérkőzés",
                        "Mérkőzés került felvételre!",
                        userOrganizationService.getUsersByOrgIfPlayer(organization, team),
                        userNotificationService,
                        currentUser
                );
                pushEvents(uuid, customGame.getDate(), organization.getName()+" - "+customGame.getEnemy(), organization, team, calendarService);
            }
        }
        return show();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/del")
    @ResponseBody
    public String del(@RequestParam("id") String id){
        if(hasPermission(Permissions.PLANS_CREATE)){
            if(!id.equals("")) {
                CustomGame customGame = customGameService.find(Integer.parseInt(id));
                if(!gamePlanService.exist(customGame)) {
                    //Delete connected event
                    Calendar event = calendarService.findByUUID(customGame.getUuid());
                    calendarService.delete(event);
                    calendarService.flush();
                    //Delete connected notification
                    userNotificationService.findAllByUUID(customGame.getUuid()).forEach(notification -> {
                        userNotificationService.delete(notification);
                        userNotificationService.flush();
                    });
                    //Delete game
                    customGame.setDeleted(true);
                    customGameService.mergeFlush(customGame);
                }
            }
        }
        return "redirect:/game";
    }

    @RequestMapping(method = RequestMethod.POST, value = "/get")
    @ResponseBody
    public String get(@RequestParam("id") String id){
        if(hasPermission(Permissions.PLANS_CREATE)){
            if(!id.equals("")) {
                CustomGame customGame = customGameService.find(Integer.parseInt(id));
                if(!gamePlanService.exist(customGame)){
                    JSONObject json = new JSONObject();
                    try {
                        json.put("id", customGame.getId());
                        json.put("date", customGame.getFormattedDate(true));
                        json.put("teamId", customGame.getTeam().getId());
                        json.put("enemy", customGame.getEnemy());
                        json.put("place", customGame.getPlace());
                    } catch (Exception e){
                        e.printStackTrace();
                    }
                    return json.toString();
                }
            }
        }
        return "redirect:/game";
    }
}
