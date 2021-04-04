package hu.playmaker.controller.admin;

import hu.playmaker.common.enums.LGroups;
import hu.playmaker.common.enums.Permissions;
import hu.playmaker.controller.BaseController;
import hu.playmaker.database.model.system.UserOrganization;
import hu.playmaker.database.service.databank.LigaService;
import hu.playmaker.database.service.system.LookupCodeService;
import hu.playmaker.database.service.system.OrganizationService;
import hu.playmaker.database.service.system.UserOrganizationService;
import hu.playmaker.database.service.system.UserService;
import hu.playmaker.form.UserOrganizationForm;
import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.Objects;

@Controller
@RequestMapping("/org/userorg")
public class UserOrganizationController extends BaseController {

    private UserService userService;
    private OrganizationService organizationService;
    private LookupCodeService lookupCodeService;
    private UserOrganizationService userOrganizationService;
    private LigaService ligaService;

    public UserOrganizationController(UserService userService, OrganizationService organizationService, LookupCodeService lookupCodeService, UserOrganizationService userOrganizationService, LigaService ligaService) {
        this.userService = userService;
        this.organizationService = organizationService;
        this.lookupCodeService = lookupCodeService;
        this.userOrganizationService = userOrganizationService;
        this.ligaService = ligaService;
    }

    @RequestMapping()
    public ModelAndView show(){
        if(hasPermission(Permissions.ADMIN)){
            ModelAndView view = new ModelAndView("admin/UserOrganization", "model", new UserOrganizationForm());
            view.addObject("teams", lookupCodeService.findAllLookupByLgroup(LGroups.TEAM_TYPE.name()));
            view.addObject("orgs", organizationService.findAll());
            view.addObject("users", userService.findAll());
            view.addObject("ligas", ligaService.findAll());
            view.addObject("datas",userOrganizationService.findAll());
            return view;
        }
        return new ModelAndView("403");
    }

    @RequestMapping(method = RequestMethod.POST)
    public String create(@Valid @ModelAttribute("model") UserOrganizationForm form, BindingResult result, HttpServletRequest request){
        if(hasPermission(Permissions.ADMIN)){
            UserOrganization u = Objects.nonNull(form.getId()) ? userOrganizationService.find(form.getId()) : new UserOrganization();
            u.setOrganization(organizationService.find(form.getOrganization()));
            u.setLiga(ligaService.find(form.getLiga()));
            u.setType(lookupCodeService.find(form.getType()));
            u.setUser(userService.find(form.getUser()));
            userOrganizationService.mergeFlush(u);
        }
        return "redirect:/org/userorg";
    }

    @RequestMapping(method = RequestMethod.POST, value = "/get")
    @ResponseBody
    public String get(@RequestParam("id") String id) {
        if(hasPermission(Permissions.ADMIN)){
            UserOrganization u = userOrganizationService.find(Integer.parseInt(id));
            JSONObject json = new JSONObject();
            try {
                json.put("id", u.getId());
                json.put("user", u.getUser().getId());
                json.put("org", u.getOrganization().getId());
                json.put("type", u.getType().getId());
                json.put("liga", u.getLiga().getId());
            } catch (Exception e){
                e.printStackTrace();
            }
            return json.toString();
        }
        return "redirect:/org/userorg";
    }

    @RequestMapping(method = RequestMethod.POST, value = "/del")
    public String del(@RequestParam("id") String id) {
        if(hasPermission(Permissions.ADMIN)){
            UserOrganization u = userOrganizationService.find(Integer.parseInt(id));
            userOrganizationService.delete(u);
            userOrganizationService.flush();
        }
        return "redirect:/org/userorg";
    }
}
