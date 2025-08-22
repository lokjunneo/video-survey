import type { FormType } from "@/constants/FormTypes";
import type { QuestionDataFormat } from "./questiondataformat";

export interface SurveyDataFormat {
    vidUrl: string,
    vidDesc: string,
    formType?: FormType // should be treated as normal form by default
    qns: QuestionDataFormat[]
}