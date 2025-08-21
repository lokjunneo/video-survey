import type { RatingLabelMap } from "./ratinglabels";

export interface QuestionDataFormat {
    name: string;
    title: string;
    description: string;
    ratinglabels: RatingLabelMap;
}