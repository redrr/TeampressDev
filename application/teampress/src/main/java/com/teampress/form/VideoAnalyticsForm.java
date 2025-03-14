package com.teampress.form;

import org.springframework.web.multipart.MultipartFile;

public class VideoAnalyticsForm extends BaseForm {

    public MultipartFile video;
    public String name;
    public Integer teamId;

    public MultipartFile getVideo() {
        return video;
    }

    public void setVideo(MultipartFile video) {
        this.video = video;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getTeamId() {
        return teamId;
    }

    public void setTeamId(Integer teamId) {
        this.teamId = teamId;
    }
}
