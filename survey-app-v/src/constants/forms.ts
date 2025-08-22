import type { SurveyDataFormat } from "@/utils/surveydataformat";
import { coherenceExample, coherenceQn, genConceptAlignmentQn, genObjConsistencyQn, naturalnessofMovementsQn } from "./questions";
import { FormType } from "./FormTypes";


export const surveyForms: SurveyDataFormat[] = [
    {
        vidDesc: "The man and woman waves at the camera.",
        vidUrl: "videos/Examples/coherence-ex",
        qns: [
            coherenceExample,
            coherenceQn
        ],
        formType: FormType.Example
    },
    {
        vidDesc: "The veteran walks left and exits frame, then walk back into the frame from the right, and stops at his original position.",
        vidUrl: "videos/Veteran/Apple",
        qns: [
            naturalnessofMovementsQn,
            genObjConsistencyQn(["the veteran","his uniform"]),
            genConceptAlignmentQn(`"A veteran walks left until he is completely out of view. Then, he walks back into view from the right side of the screen. Camera does not move."`)
        ]
    },
    {
        vidDesc: "The veteran walks left and exits frame, then walk back into the frame from the right, and stops at his original position.",
        vidUrl: "videos/Veteran/Apple-2",
        qns: [
            naturalnessofMovementsQn,
            genObjConsistencyQn(["the veteran","his uniform"]),
            genConceptAlignmentQn(`"A veteran walks left until he is completely out of view. Then, he walks back into view from the right side of the screen. Camera does not move."`)
        ]
    },
    {
        vidDesc: "The veteran walks left and exits frame, then walk back into the frame from the right, and stops at his original position.",
        vidUrl: "videos/Veteran/Banana",
        qns: [
            naturalnessofMovementsQn,
            genObjConsistencyQn(["the veteran","his uniform"]),
            genConceptAlignmentQn(`"A veteran walks left until he is completely out of view. Then, he walks back into view from the right side of the screen. Camera does not move."`)
        ]
    },

    {
        vidDesc: "The man and the woman lift their cups, clink them together, and take a sip of coffee.",
        vidUrl: "videos/Cheers/V3-1CB-3.mp4",
        qns: [
            coherenceQn,
            naturalnessofMovementsQn,
            genConceptAlignmentQn(`"The man and the woman lift their cups, clink them together, and take a sip of coffee."`)
        ]
    },
    {
        vidDesc: "The man and the woman lift their cups, clink them together, and take a sip of coffee.",
        vidUrl: "videos/Cheers/SD1-2D-2.mp4",
        qns: [
            coherenceQn,
            naturalnessofMovementsQn,
            genConceptAlignmentQn(`"The man and the woman lift their cups, clink them together, and take a sip of coffee."`)
        ]
    }
]