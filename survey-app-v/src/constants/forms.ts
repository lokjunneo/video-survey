import type { SurveyDataFormat } from "@/utils/surveydataformat";
import { genObjConsistencyQn, naturalnessofMovementsQn } from "./questions";


export const surveyForms: SurveyDataFormat[] = [
    {
        vidDesc: "The veteran walks left and exits frame, then walk back into the frame from the right, and stops at his original position.",
        vidUrl: "videos/Veteran/V3-1A-1.mp4",
        qns: [
            naturalnessofMovementsQn,
            genObjConsistencyQn(["veteran","his uniform"])
        ]
    }
]