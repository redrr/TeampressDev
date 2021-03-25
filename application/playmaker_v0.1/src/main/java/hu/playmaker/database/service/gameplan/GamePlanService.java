package hu.playmaker.database.service.gameplan;

import hu.playmaker.database.model.databank.Sorsolas;
import hu.playmaker.database.model.gameplan.CustomGame;
import hu.playmaker.database.model.gameplan.GamePlan;
import hu.playmaker.database.model.system.Organization;
import hu.playmaker.database.model.system.User;
import hu.playmaker.database.service.BaseService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GamePlanService extends BaseService {

    public boolean exist(User user, CustomGame customGame){
        return getEntityManager().createNamedQuery("GamePlan.findByUserAndCG").setParameter("pcg", customGame).setParameter("puser",user).getResultList().size() > 0;
    }

    public boolean exist(CustomGame customGame){
        return getEntityManager().createNamedQuery("GamePlan.findByCG").setParameter("pcg", customGame).getResultList().size() > 0;
    }

    public List<GamePlan> findAll(){
        return getEntityManager().createNamedQuery("GamePlan.findAll").getResultList();
    }

    public List<GamePlan> find(User user, CustomGame customGame){
        return getEntityManager().createNamedQuery("GamePlan.findByUserAndCG").setParameter("pcg", customGame).setParameter("puser",user).getResultList();
    }

    public List<GamePlan> findByOrg(Organization organization){
        List<GamePlan> result = new ArrayList<>();
        result.addAll(getEntityManager().createNamedQuery("GamePlan.findByOrgGroupedCustom").setParameter("porg", organization).getResultList());
        return result;
    }

    public GamePlan find(int id){
        return (GamePlan) getEntityManager().createNamedQuery("GamePlan.findById").setParameter("pid",id).getResultList().get(0);
    }
}
