package com.teampress.database.model.workout;

import com.teampress.database.model.BaseModel;
import com.teampress.database.model.system.LookupCode;
import com.teampress.database.model.system.Organization;
import com.teampress.database.model.system.User;
import com.teampress.database.model.trainingplan.TrainingPlan;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


/**
 * The persistent class for the USER_ORGANIZATION database table.
 * 
 */
@Entity
@Table(name="ATTENDANCE", schema="teampress")
@NamedQueries({
		@NamedQuery(name="Attendance.findAll", query="SELECT u FROM Attendance u"),
		@NamedQuery(name="Attendance.findSum", query="SELECT count(u) FROM Attendance u WHERE u.user = :pu AND u.creationDate BETWEEN :pd1 AND :pd2"),
		@NamedQuery(name="Attendance.findCount", query="SELECT count(u) FROM Attendance u WHERE u.user = :pu AND u.jelen='jelen' AND u.creationDate BETWEEN :pd1 AND :pd2"),
		@NamedQuery(name="Attendance.findSumByTrainer", query="SELECT count(u) FROM Attendance u WHERE u.createdBy = :pu AND u.organization=:porg AND u.creationDate BETWEEN :pd1 AND :pd2"),
		@NamedQuery(name="Attendance.findCountByTrainer", query="SELECT count(u) FROM Attendance u WHERE u.createdBy = :pu AND u.organization=:porg AND u.jelen='jelen' AND u.creationDate BETWEEN :pd1 AND :pd2"),
		@NamedQuery(name="Attendance.findMaxByTeam", query="SELECT u FROM Attendance u WHERE u.team = :pteam ORDER BY u.creationDate ASC"),
		@NamedQuery(name="Attendance.findMinByTeam", query="SELECT u FROM Attendance u WHERE u.team = :pteam ORDER BY u.creationDate DESC"),
		@NamedQuery(name="Attendance.findMaxByOrg", query="SELECT u FROM Attendance u WHERE u.organization = :porg ORDER BY u.creationDate ASC"),
		@NamedQuery(name="Attendance.findMinByOrg", query="SELECT u FROM Attendance u WHERE u.organization = :porg ORDER BY u.creationDate DESC"),
		@NamedQuery(name="Attendance.findByUserLastFive", query="SELECT u FROM Attendance u WHERE u.user = :puser ORDER BY u.creationDate DESC"),
		@NamedQuery(name="Attendance.findByTraining", query="SELECT u FROM Attendance u WHERE u.trainingPlan = :ptraining"),
		@NamedQuery(name="Attendance.findByDateAndTeam", query="SELECT u FROM Attendance u WHERE u.organization=:porg AND u.team=:pteam AND u.creationDate BETWEEN :pd1 AND :pd2"),
})
@Cacheable(false)
@NoArgsConstructor
@Getter
@Setter
public class Attendance extends BaseModel {
	private static final long serialVersionUID = 1L;

	//bi-directional many-to-one association to User
	@ManyToOne
	@JoinColumn(name="ORG_ID", nullable=false)
	private Organization organization;

	//bi-directional many-to-one association to User
	@ManyToOne
	@JoinColumn(name="TEAM_ID", nullable=false)
	private LookupCode team;

	//bi-directional many-to-one association to Organization
	@ManyToOne
	@JoinColumn(name="TRAINING_ID", nullable=false)
	private TrainingPlan trainingPlan;

	//bi-directional many-to-one association to User
	@ManyToOne
	@JoinColumn(name="USER_ID", nullable=false)
	private User user;

	@Column(name="JELEN")
	private String jelen;
}
