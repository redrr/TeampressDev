package com.teampress.controller.play;

import com.teampress.common.enums.LGroups;
import com.teampress.common.enums.Permissions;
import com.teampress.controller.BaseController;
import com.teampress.database.model.system.Organization;
import com.teampress.database.model.system.User;
import com.teampress.database.model.system.UserOrganization;
import com.teampress.database.model.videoanalytics.AnalyticsAction;
import com.teampress.database.model.videoanalytics.Video;
import com.teampress.database.service.system.LookupCodeService;
import com.teampress.database.service.system.ParameterService;
import com.teampress.database.service.system.UserOrganizationService;
import com.teampress.database.service.system.UserService;
import com.teampress.database.service.videoanalytics.AnalyticsActionService;
import com.teampress.database.service.videoanalytics.VideoService;
import com.teampress.form.VideoAnalyticsForm;
import com.teampress.handler.SessionHandler;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.validation.Valid;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Comparator;
import java.util.List;
import java.util.Objects;
import java.util.UUID;
import java.util.stream.Collectors;

import static com.teampress.common.enums.Parameters.SYSTEM;
import static com.teampress.common.enums.Parameters.UPLOAD_FOLDER;

@Controller
@RequestMapping("/videoanalytics")
public class VideoAnalyticsController extends BaseController {

    private final UserService userService;
    private final UserOrganizationService userOrganizationService;
    private final ParameterService parameterService;
    private final VideoService videoService;
    private final AnalyticsActionService analyticsActionService;
    private final LookupCodeService lookupCodeService;

    public VideoAnalyticsController(UserService userService, UserOrganizationService userOrganizationService, ParameterService parameterService, VideoService videoService, AnalyticsActionService analyticsActionService, LookupCodeService lookupCodeService) {
        this.userService = userService;
        this.userOrganizationService = userOrganizationService;
        this.parameterService = parameterService;
        this.videoService = videoService;
        this.analyticsActionService = analyticsActionService;
        this.lookupCodeService = lookupCodeService;
    }

    @RequestMapping("")
    public ModelAndView show(){
        if(hasPermission(Permissions.VIDEO_ANALYTICS)) {
            ModelAndView view = new ModelAndView("play/VideoAnalytics", "video", new VideoAnalyticsForm());
            User currentUser = userService.findEnabledUserByUsername(SessionHandler.getUsernameFromCurrentSession());
            view.addObject("teamTypes", lookupCodeService.findAllLookupByLgroup(LGroups.TEAM_TYPE.name()));
            if (hasPermission(Permissions.VIDEO_ANALYTICS_EDIT)) {
                view.addObject("data", videoService.findAll(userOrganizationService.getOrgListByUser(currentUser)));
            } else {
                view.addObject("data", videoService.findAllPublished(userOrganizationService.getOrgListByUser(currentUser)));
            }
            return view;
        }
        return new ModelAndView("403");
    }

    @RequestMapping(method = RequestMethod.POST)
    public String doSubmit(@Valid @ModelAttribute("video") VideoAnalyticsForm form) {
        if(hasPermission(Permissions.VIDEO_ANALYTICS)) {
            String uploadFolder = parameterService.findParameterByGroupAndCode(SYSTEM, UPLOAD_FOLDER).getValue();
            User currentUser = userService.findEnabledUserByUsername(SessionHandler.getUsernameFromCurrentSession());
            UserOrganization userOrganization = userOrganizationService.getOrgByUser(currentUser);
            boolean isNameValid = !form.getName().trim().equals("");
            boolean isTeamValid = Objects.nonNull(form.getTeamId()) && lookupCodeService.exists(form.getTeamId());
            boolean isFileValid = !form.getVideo().isEmpty() && Objects.nonNull(form.getVideo().getContentType()) && form.getVideo().getContentType().contains("mp4");
            if(isNameValid && isTeamValid && isFileValid) {
                Video video = new Video();
                String fileName = UUID.randomUUID()+".mp4";
                try {
                    byte[] bytes = form.getVideo().getBytes();
                    Path path = Paths.get(uploadFolder+fileName);
                    Files.write(path, bytes);
                    video.setOrganization(userOrganization.getOrganization());
                    video.setFileName(fileName);
                    video.setName(form.getName());
                    video.setTeam(lookupCodeService.find(form.getTeamId()));
                    videoService.mergeFlush(video);
                } catch (Exception e){
                    e.printStackTrace();
                }
            }
        }
        return "redirect:/videoanalytics";
    }

    @RequestMapping(method = RequestMethod.POST, value = "/getPlayers")
    @ResponseBody
    public String getPlayerList(@RequestParam String id) {
        if(hasPermission(Permissions.VIDEO_ANALYTICS)) {
            if(Objects.nonNull(id) && id.trim().equals("") && lookupCodeService.exists(Integer.parseInt(id)))
                return "[]";
            Organization organization = userOrganizationService.getOrgByUser(userService.findEnabledUserByUsername(SessionHandler.getUsernameFromCurrentSession())).getOrganization();
            List<UserOrganization> players = userOrganizationService.getUsersByOrgIfPlayer(organization, lookupCodeService.find(Integer.parseInt(id)));
            JSONArray array = new JSONArray();
            try {
                for (UserOrganization player : players) {
                    array.put(new JSONObject().put("id", player.getUser().getId()).put("name", player.getUser().getName()));
                }
            } catch (Exception e) {
                return "[]";
            }
            return array.toString();
        }
        return "redirect:/403";
    }

    @RequestMapping(method = RequestMethod.POST, value = "/getActionsAsArray")
    @ResponseBody
    public String getActionList(@RequestParam String videoId) {
        if(hasPermission(Permissions.VIDEO_ANALYTICS)) {
            if(videoId.trim().equals(""))   return "[]";
            Video video = videoService.find(Integer.parseInt(videoId));
            Organization organization = userOrganizationService.getOrgByUser(userService.findEnabledUserByUsername(SessionHandler.getUsernameFromCurrentSession())).getOrganization();
            List<AnalyticsAction> analyticsActions = analyticsActionService.findBySourceVideo(video, organization);
            JSONArray array = new JSONArray();
            try {
                List<AnalyticsAction> sorted = analyticsActions.stream()
                        .sorted(Comparator.comparingInt(a -> Integer.parseInt(a.getTime())))
                        .collect(Collectors.toList());
                for (AnalyticsAction action : sorted) {
                    User player = userService.find(Integer.parseInt(action.getPlayerIds()));
                    array.put(new JSONObject()
                            .put("id", action.getId())
                            .put("name", action.getName())
                            .put("player", player.getName())
                            .put("time", action.getTime())
                    );
                }
            } catch (Exception e) {
                return "[]";
            }
            return array.toString();
        }
        return "redirect:/403";
    }

    @RequestMapping(method = RequestMethod.POST, value = "/getAction")
    @ResponseBody
    public String getActionBlueprint(@RequestParam String analyticsActionId) {
        if(hasPermission(Permissions.VIDEO_ANALYTICS)) {
            if(!analyticsActionId.trim().equals("") && analyticsActionService.exist(Integer.parseInt(analyticsActionId))) {
                try {
                    AnalyticsAction action = analyticsActionService.find(Integer.parseInt(analyticsActionId));
                    JSONObject object = new JSONObject();
                    object.put("id", action.getId());
                    object.put("name", action.getName());
                    object.put("time", action.getTime());
                    object.put("player", action.getPlayerIds());
                    object.put("comment", action.getComment());
                    object.put("data", action.getBluePrint());
                    return object.toString();
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
            return "";
        }
        return "redirect:/403";
    }

    @RequestMapping(method = RequestMethod.POST, value = "/recordAction")
    @ResponseBody
    public String recordAction(@RequestParam String id, @RequestParam String videoId, @RequestParam String time, @RequestParam String bluePrint, @RequestParam String name, @RequestParam String players, @RequestParam String comment){
        if(hasPermission(Permissions.VIDEO_ANALYTICS)) {
            if(videoId.trim().equals(""))   return "Video is missing!";
            Video video = videoService.find(Integer.parseInt(videoId));
            if(Objects.isNull(video))   return "Invalid video!";
            if(time.trim().equals(""))  return "Time is missing!";
            if(bluePrint.trim().equals("")) return "Analysis is missing!";
            try {
                boolean isNewAction = id.trim().equals("") || !analyticsActionService.exist(Integer.parseInt(id));
                Organization organization = userOrganizationService.getOrgByUser(userService.findEnabledUserByUsername(SessionHandler.getUsernameFromCurrentSession())).getOrganization();
                AnalyticsAction action = isNewAction ? new AnalyticsAction() : analyticsActionService.find(Integer.parseInt(id));
                action.setOrganization(organization);
                action.setSourceVideo(video);
                action.setName(name);
                action.setPlayerIds(players);
                action.setComment(comment);
                action.setTime(time);
                action.setBluePrint(bluePrint);
                analyticsActionService.mergeFlush(action);
            } catch (Exception e) {
                return "Creation failed!";
            }
            return "";
        }
        return "redirect:/403";
    }

    @RequestMapping(method = RequestMethod.POST, value = "/action/del")
    @ResponseBody
    public String deleteAction(@RequestParam String analyticsActionId) {
        if(hasPermission(Permissions.VIDEO_ANALYTICS)) {
            if(!analyticsActionId.trim().equals("") && analyticsActionService.exist(Integer.parseInt(analyticsActionId))) {
                try {
                    AnalyticsAction action = analyticsActionService.find(Integer.parseInt(analyticsActionId));
                    analyticsActionService.delete(action);
                } catch (Exception e) {
                    return "Delete failed!";
                }
                return "";
            }
            return "Delete failed!";
        }
        return "redirect:/403";
    }

    @RequestMapping(method = RequestMethod.POST, value = "/video/del")
    @ResponseBody
    public String delete(@RequestParam String id) {
        if(hasPermission(Permissions.VIDEO_ANALYTICS)) {
            if(!id.trim().equals("") && videoService.find(Integer.parseInt(id)) != null) {
                try {
                    Video video = videoService.find(Integer.parseInt(id));
                    video.setDeleted(true);
                    videoService.mergeFlush(video);
                } catch (Exception e) {
                    return "redirect:/500";
                }
            }
            return "redirect:/videoanalytics";
        }
        return "redirect:/403";
    }

    @RequestMapping(method = RequestMethod.POST, value = "/video/publish")
    @ResponseBody
    public String publish(@RequestParam String id) {
        if(hasPermission(Permissions.VIDEO_ANALYTICS)) {
            if(!id.trim().equals("") && videoService.find(Integer.parseInt(id)) != null) {
                try {
                    Video video = videoService.find(Integer.parseInt(id));
                    video.setIsPublic(true);
                    videoService.mergeFlush(video);
                } catch (Exception e) {
                    return "redirect:/500";
                }
            }
            return "redirect:/videoanalytics";
        }
        return "redirect:/403";
    }
}
