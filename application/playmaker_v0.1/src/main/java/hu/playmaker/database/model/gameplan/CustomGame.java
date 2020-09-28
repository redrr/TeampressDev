package hu.playmaker.database.model.gameplan;

import hu.playmaker.database.model.BaseModel;
import hu.playmaker.database.model.system.LookupCode;
import hu.playmaker.database.model.system.Organization;

import javax.persistence.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import static java.util.Objects.isNull;

@Entity
@Table(name="CUSTOM_GAME", schema="probe")
@NamedQueries({
        @NamedQuery(name="CustomGame.findAll", query="SELECT p FROM CustomGame p"),
        @NamedQuery(name="CustomGame.countAll", query="SELECT COUNT(p) FROM CustomGame p"),
        @NamedQuery(name="CustomGame.findById", query="SELECT p FROM CustomGame p WHERE p.id = :pid"),
        @NamedQuery(name="CustomGame.findByOrg", query="SELECT p FROM CustomGame p WHERE p.organization=:porg"),
        @NamedQuery(name="CustomGame.findByOrgAndTeam", query="SELECT p FROM CustomGame p WHERE p.team=:pteam AND p.organization=:porg"),
        @NamedQuery(name="CustomGame.findByTeamAndDate", query="SELECT p FROM CustomGame p WHERE p.team=:pteam AND p.date=:pdate"),
        @NamedQuery(name="CustomGame.findByCreated", query="SELECT p FROM CustomGame p WHERE p.createdBy=:pby AND p.deleted=false")
})
@Cacheable(false)
public class CustomGame extends BaseModel {
    private static final long serialVersionUID = 1L;

    @ManyToOne
    @JoinColumn(name="ORG_ID")
    private Organization organization;

    @ManyToOne
    @JoinColumn(name="TEAM_ID")
    private LookupCode team;

    @Column(name="ELLEN", length=255)
    private String enemy;

    @Column(name="HELY", length=255)
    private String place;

    @Column(name="DATUM", length=255)
    private Date date;

    @Column(name="DELETED", length=255)
    private Boolean deleted;

    public CustomGame() {
    }

    public Organization getOrganization() {
        return organization;
    }

    public void setOrganization(Organization organization) {
        this.organization = organization;
    }

    public LookupCode getTeam() {
        return team;
    }

    public void setTeam(LookupCode team) {
        this.team = team;
    }

    public String getEnemy() {
        return enemy;
    }

    public void setEnemy(String enemy) {
        this.enemy = enemy;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public Date getDate() {
        return date;
    }

    public String getDateAs(boolean flag){
        SimpleDateFormat dateFormat = new SimpleDateFormat(flag ? "yyyy/MM/dd/HH:mm" : "yyyy-MM-dd HH:mm");
        return (isNull(getDate())) ? "" : dateFormat.format(getDate());
    }

    public void setDate(String date) {
        try {
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd/HH:mm");
            Date parsedDate = dateFormat.parse(date);
            this.date = parsedDate;
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    public Boolean getDeleted() {
        return deleted;
    }

    public void setDeleted(Boolean deleted) {
        this.deleted = deleted;
    }
}
