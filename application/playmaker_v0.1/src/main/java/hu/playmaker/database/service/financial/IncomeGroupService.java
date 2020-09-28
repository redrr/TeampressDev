package hu.playmaker.database.service.financial;

import hu.playmaker.database.model.financial.IncomeGroup;
import hu.playmaker.database.service.BaseService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IncomeGroupService extends BaseService {

    public List<IncomeGroup> findAll(){
        return getEntityManager().createNamedQuery("IncomeGroup.findAll").getResultList();
    }

    public boolean exist(int id){
        return findById(id).size() > 0;
    }

    public IncomeGroup find(int id){
        return findById(id).get(0);
    }

    private List<IncomeGroup> findById(int id){
        return getEntityManager().createNamedQuery("IncomeGroup.findById").setParameter("pid", id).getResultList();
    }

    public List<IncomeGroup> findAllCreatedBy(String createdBy){
        return getEntityManager().createNamedQuery("IncomeGroup.findAllCreatedBy").setParameter("pby", createdBy).getResultList();
    }
}
