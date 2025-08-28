import type { RatingLabelMap } from "./ratinglabels";

export interface QuestionDataFormat {
    name: string;
    title: string;
    description: string;
    additionalExplanation?: string;
    requireExplanation?: Boolean;
    ratinglabels?: RatingLabelMap; // no rating slider shows up, if no rating labels are defined
    mode?: string
}