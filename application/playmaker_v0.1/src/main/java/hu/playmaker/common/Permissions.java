package hu.playmaker.common;

public enum Permissions {
    LOGGED_IN,

    //region Playmaker
    DATA_UPLOAD,
    HOME_HEADER_BUTTONS,
    POST_COMMENT_CREATE,
    POST_COMMENT_READ,
    CAREER_HEADER,
    CAREER_TABLE,
    EXERCISE_CREATE,
    EXERCISE_TABLE,
    TRAIN_CREATE,
    TRAIN_TABLE,
    WORKOUT_CREATE,
    WORKOUT_PLAYER_TABLE,
    WORKOUT_ALL_TABLE,
    PLANS_CREATE,
    PLANNER,
    PLANS_TABLE,
    COST_CREATE,
    COST_TABLE,
    COST_ACCEPT,
    GROUP_COSTS,
    STATEMENT,
    PLAYERS_STAT,
    TRAINERS_STAT,
    TEAMS_STAT,
    VIDEO_ANALYTICS,
    EVENT_CREATE,
    //endregion

    //region Admin
    USERS,
    ADMIN
    //endregion
}
