import type { RatingLabelMap } from "./ratinglabels";

export interface SurveyDataFormat {
    name: string;
    title: string;
    description: string;
    ratinglabels: RatingLabelMap;
}