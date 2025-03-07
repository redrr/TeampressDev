package com.teampress.database.model.trainingplan;

import com.teampress.database.model.BaseModel;
import com.teampress.database.model.system.LookupCode;
import com.teampress.database.model.system.Organization;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;


/**
 * The persistent class for the EXCEPTION database table.
 * 
 */
@Entity
@Table(name="TRAININGPLAN", schema="teampress")
@NoArgsConstructor
@Getter
@Setter
public class TrainingPlan extends BaseModel {

	private static final long serialVersionUID = 1L;

	@ManyToOne
	@JoinColumn(name="ORGANIZATION_ID", nullable=false)
	private Organization organization;

	@ManyToOne
	@JoinColumn(name="TEAM_ID", nullable = false)
	private LookupCode team;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="TRAINING_DATE", nullable=false)
	@CreatedDate
	private Date trainingDate;

	@Column(name = "UUID")
	private String uuid;

	@Column(name = "DELETABLE")
	private boolean deletable = true;

	public String getFormattedTrainingDate() {
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy.MM.dd. ' - ' HH:mm");
		return dateFormat.format(trainingDate);
	}

	public void setFormattedTrainingDate(String trainingDate) {
		try {
			SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd/HH:mm");
			this.trainingDate = dateFormat.parse(trainingDate);
		} catch (ParseException e) {
			e.printStackTrace();
		}
	}
}
