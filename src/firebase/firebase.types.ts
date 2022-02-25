import { Timestamp } from "firebase/firestore";

export interface Session {
    id?: string,
    createdAt?: Date,
    updatedAt?: Date,
    tic?: string,
    survey?: unknown,
    termsAccepted?: boolean,
    state?: string,
    states?: string[],
    info?: string
}

export interface SurveyData {
    survey_demographic?: SurveyDataObject,
    survey_ks_fast?: SurveyDataObject,
    survey_ks_medium?: SurveyDataObject,
    survey_ks_slow?: SurveyDataObject
}

export interface SurveyDataObject {
    id?: string,
    age?: number,
    gender?: string,
    musical?: number,
    tech?: number,
    videoFile?: string,
    numPlayed?: number,
    duration?: number,
    valence?: number,
    arousal?: number,
    dominance?: number,
    confidence?: number,
    description?: string,
    tags?: string[]
}


export enum SessionState {
    UNDEFINED = 'undefined',
    TERMS = 'terms',
    SURVEY_DEMOGRAPHIC = 'survey_demographic',
    SURVEY_NEUTRAL_SHORT = 'survey_neutral_short',
    SURVEY_SLOW_SHORT = 'survey_slow_short',
    SURVEY_MEDIUM_SHORT = 'survey_medium_short',
    SURVEY_FAST_SHORT = 'survey_fast_short', 
    SURVEY_NEUTRAL_LONG = 'survey_neutral_long',
    SURVEY_SLOW_LONG = 'survey_slow_long',
    SURVEY_MEDIUM_LONG = 'survey_medium_long',
    SURVEY_FAST_LONG = 'survey_fast_long',
    SURVEY_IM_GENTLE = 'survey_im_gentle',
    SURVEY_IM_INVISIBLE = 'survey_im_invisible',
    SURVEY_IM_LOUD = 'survey_im_loud',
    SURVEY_IM_SLAM = 'survey_im_slam',
    SURVEY_IM_NEUTRAL = 'survey_im_neutral',
    END = 'end',
}
