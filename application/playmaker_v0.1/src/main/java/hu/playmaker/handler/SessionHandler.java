package hu.playmaker.handler;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Configuration
public class SessionHandler implements Serializable{

    /**
     * Dinamikusan a legújabb HttpRequestből leszedi a Sessionben lévő username-t.
     * Ha nincs bejelentkezve felhasználó, akkor "null"-t ad vissza.
     * @return A username a jelenlegi fehasználónak
     */
    public static String getUsernameFromCurrentSession() {
        try {
            ServletRequestAttributes attr = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
            String username = (String)attr.getRequest().getSession().getAttribute("username");
            return Objects.nonNull(username) && username.isEmpty()?null:username;
        } catch (IllegalStateException e) {
            return "system";
        }
    }

    public static boolean userHasPermission(String permission) {
        ServletRequestAttributes attr = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
        List permissions = (List)attr.getRequest().getSession().getAttribute("permissions");
        return !Objects.isNull(permissions) && permissions.contains(permission);
    }

    public static boolean userHasRole(String role) {
        ServletRequestAttributes attr = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
        List permissions = (List)attr.getRequest().getSession().getAttribute("roles");
        return !Objects.isNull(permissions) && permissions.contains(role);
    }

    public static String canNavigate(String permission, String fullUrl) {
        if(Objects.isNull(SessionHandler.getUsernameFromCurrentSession())) {
            return "redirect:/login";
        }
        if(!SessionHandler.userHasPermission(permission)) {
            if(fullUrl.equals("/home"))
                return "redirect:/logout";
            return  "redirect:/403";
        }
        return "redirect:" + fullUrl;
    }
}
