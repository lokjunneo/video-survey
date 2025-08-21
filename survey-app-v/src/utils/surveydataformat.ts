import type { QuestionDataFormat } from "./questiondataformat";

export interface SurveyDataFormat {
    vidUrl: string,
    vidDesc: string,
    qns: QuestionDataFormat[]
}