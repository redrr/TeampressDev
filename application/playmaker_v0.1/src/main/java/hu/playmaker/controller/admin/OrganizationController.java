package hu.playmaker.controller.admin;

import hu.playmaker.common.Permissions;
import hu.playmaker.controller.BaseController;
import hu.playmaker.database.model.system.Organization;
import hu.playmaker.database.service.system.OrganizationService;
import hu.playmaker.form.BaseForm;
import hu.playmaker.form.OrganizationForm;
import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.Objects;

@Controller
@RequestMapping("/org/organization")
public class OrganizationController extends BaseController {

    private OrganizationService organizationService;

    public OrganizationController(OrganizationService organizationService) {
        this.organizationService = organizationService;
    }

    @RequestMapping()
    public ModelAndView show(){
        if(hasPermission(Permissions.ADMIN)){
            ModelAndView view = new ModelAndView("admin/Organization", "model", new OrganizationForm());
            view.addObject("datas", organizationService.findAll());
            return view;
        }
        return new ModelAndView("403");
    }

    @RequestMapping(method = RequestMethod.POST)
    public String create(@Valid @ModelAttribute("model") OrganizationForm form, BindingResult result, HttpServletRequest request){
        if(hasPermission(Permissions.ADMIN)){
            Organization o = Objects.nonNull(form.getId()) ? organizationService.find(form.getId()) : new Organization();
            o.setName(form.getName());
            o.setUrl(form.getUrl());
            organizationService.mergeFlush(o);
        }
        return "redirect:/org/organization";
    }

    @RequestMapping(method = RequestMethod.POST, value = "/get")
    @ResponseBody
    public String get(@RequestParam("id") String id) {
        if(hasPermission(Permissions.ADMIN)){
            Organization o = organizationService.find(Integer.parseInt(id));
            JSONObject json = new JSONObject();
            try {
                json.put("id", o.getId());
                json.put("name", o.getName());
                json.put("url", o.getUrl());
            } catch (Exception e){
                e.printStackTrace();
            }
            return json.toString();
        }
        return "redirect:/org/organization";
    }

    @RequestMapping(method = RequestMethod.POST, value = "/del")
    public String del(@RequestParam("id") String id) {
        if(hasPermission(Permissions.ADMIN)){
            Organization o = organizationService.find(Integer.parseInt(id));
            organizationService.delete(o);
            organizationService.flush();
        }
        return "redirect:/org/organization";
    }
}
