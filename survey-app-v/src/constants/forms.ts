import type { SurveyDataFormat } from "@/utils/surveydataformat";
import { coherenceExample, coherenceQn, genScenarioFulfilment, genObjConsistencyQn, naturalnessofMovementsQn, genExampleGuide, backgroundCoherenceQn } from "./questions";
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
        vidDesc: "The man jumps to the left, then jumps to the right.",
        vidUrl: "videos/Examples/fulfilment-ex",
        qns: [
            genExampleGuide(
                "fulfilment-ex",
                "Scenario Fulfilment Example",
                `This is an example question on Scenario Fulfilment.\nNotice how the video description says the man "jumps to the left", then "to the right",\nbut the man in the video instead jumps to the left twice.\nHence, a middling score (~3) should be given as only the first part of the video scenario is fulfilled.`
            ),
            genScenarioFulfilment(`"The man jumps to the left, then jumps to the right."`)
        ],
        formType: FormType.Example
    },

    {
        vidDesc: "The man does a 360 degree turn.",
        vidUrl: "videos/Examples/object-consistency-ex",
        qns: [
            genExampleGuide(
                "object-consistency-ex",
                "Object Consistency Example",
                `This is an example question on Object Consistency.\nUse the initial frame of the video as the point of reference.\nNotice how the man's cup and suit changes after he turns around.\nHence, the video should be given a low Object Consistency rating.`
            ),
            genObjConsistencyQn(["the man", "possessions"])
        ],
        formType: FormType.Example
    },

    {
        vidDesc: "The person sprints towards their right very naturally.",
        vidUrl: "videos/Examples/movement-naturalness-ex",
        qns: [
            genExampleGuide(
                "movement-naturalness-ex",
                "Naturalness of Movements Example",
                `This is an example question on Naturalness of Movement.\nDo the movements in the video appear natural?\nNote that the question should cover only the naturalness of the movement.\n(The disparity between the video description and video should be written elsewhere, such as the \n"Any Other Issues" field.)`
            ),
            naturalnessofMovementsQn
        ],
        formType: FormType.Normal
    },

    // Something to denote end of examples?
    // {
    //     vidDesc: "The man jumps to the left, then jumps to the right.",
    //     vidUrl: "videos/Examples/fulfilment-ex",
    //     qns: [
    //         genExampleGuide(
    //             "fulfilment-ex",
    //             "Scenario Fulfilment Example",
    //             `This is an example question on Scenario Fulfilment.\nNotice how the video description says the man "jumps to the left", then "to the right",\nbut the man in the video instead jumps to the left twice.\nHence, a middling score (~3) should be given as only the first part of the video scenario is fulfilled.`
    //         ),
    //         genScenarioFulfilment(`"The man jumps to the left, then jumps to the right."`)
    //     ],
    //     formType: FormType.Example
    // },

    // Veteran
    {
        vidDesc: "The veteran walks left and exits frame, then walk back into the frame from the right, and stops at his original position.",
        vidUrl: "videos/Veteran/Apple",
        qns: [
            genObjConsistencyQn(["the veteran","his uniform"]),
            genScenarioFulfilment(`"A veteran walks left until he is completely out of view. Then, he walks back into view from the right side of the screen. Camera does not move."`)
        ]
    },
    {
        vidDesc: "The veteran walks left and exits frame, then walk back into the frame from the right, and stops at his original position.",
        vidUrl: "videos/Veteran/Apple-2",
        qns: [
            genObjConsistencyQn(["the veteran","his uniform"]),
            genScenarioFulfilment(`"A veteran walks left until he is completely out of view. Then, he walks back into view from the right side of the screen. Camera does not move."`)
        ]
    },
    {
        vidDesc: "The veteran walks left and exits frame, then walk back into the frame from the right, and stops at his original position.",
        vidUrl: "videos/Veteran/Banana",
        qns: [
            genObjConsistencyQn(["the veteran","his uniform"]),
            genScenarioFulfilment(`"A veteran walks left until he is completely out of view. Then, he walks back into view from the right side of the screen. Camera does not move."`)
        ]
    },

    // Cheers

    {
        vidDesc: "The man and the woman lift their cups, clink them together, and take a sip of coffee.",
        vidUrl: "videos/Cheers/V3-1CB-3.mp4",
        qns: [
            coherenceQn,
            naturalnessofMovementsQn,
            genScenarioFulfilment(`"The man and the woman lift their cups, clink them together, and take a sip of coffee."`)
        ]
    },
    {
        vidDesc: "The man and the woman lift their cups, clink them together, and take a sip of coffee.",
        vidUrl: "videos/Cheers/SD1-2D-2.mp4",
        qns: [
            coherenceQn,
            naturalnessofMovementsQn,
            genScenarioFulfilment(`"The man and the woman lift their cups, clink them together, and take a sip of coffee."`)
        ]
    },

    {
        vidDesc: "The man and the woman lift their cups, clink them together, and take a sip of coffee.",
        vidUrl: "videos/Cheers/hailuo2pro_4.mp4",
        qns: [
            coherenceQn,
            naturalnessofMovementsQn,
            genScenarioFulfilment(`"The man and the woman lift their cups, clink them together, and take a sip of coffee."`)
        ]
    },


    // standee
    {
        vidDesc: "The standee comes to life and walks towards the camera.",
        vidUrl: "videos/Standee/V3-1D-2.mp4",
        qns: [
            naturalnessofMovementsQn,
            backgroundCoherenceQn,
            genScenarioFulfilment(`"The standee comes to life and walks towards the camera."`)
        ]
    },

        {
        vidDesc: "The standee comes to life and walks towards the camera.",
        vidUrl: "videos/Standee/SD1P-2A-1.mp4",
        qns: [
            naturalnessofMovementsQn,
            backgroundCoherenceQn,
            genScenarioFulfilment(`"The standee comes to life and walks towards the camera."`)
        ]
    },

    //      Low consistency
    {
        vidDesc: "The standee comes to life and walks towards the camera.",
        vidUrl: "videos/Standee/HL2P-2C-1.mp4",
        qns: [
            naturalnessofMovementsQn,
            backgroundCoherenceQn,
            genScenarioFulfilment(`"The standee comes to life and walks towards the camera."`)
        ]
    },

    // Streets
    {
        vidDesc: "The man runs in a hurry while on a call. Tracking shot.",
        vidUrl: "videos/Streets/HL2P-2A-1.mp4",
        qns: [
            naturalnessofMovementsQn,
            backgroundCoherenceQn,
            genObjConsistencyQn(["the man"]),
            genScenarioFulfilment(`"The man runs in a hurry while on a call. Tracking shot."`)
        ]
    },

    {
        vidDesc: "The man runs in a hurry while on a call. Tracking shot.",
        vidUrl: "videos/Streets/HL2P-2A-2.mp4",
        qns: [
            naturalnessofMovementsQn,
            backgroundCoherenceQn,
            genObjConsistencyQn(["the man"]),
            genScenarioFulfilment(`"The man runs in a hurry while on a call. Tracking shot."`)
        ]
    },

    {
        vidDesc: "The man runs in a hurry while on a call. Tracking shot.",
        vidUrl: "videos/Streets/V3-2A-2.mp4",
        qns: [
            naturalnessofMovementsQn,
            backgroundCoherenceQn,
            genObjConsistencyQn(["the man"]),
            genScenarioFulfilment(`"The man runs in a hurry while on a call. Tracking shot."`)
        ]
    },

    // TODO: Lower to 5s?
    {
        vidDesc: "The man runs in a hurry while on a call. Tracking shot.",
        vidUrl: "videos/Streets/SD1P-2A-1.mp4",
        qns: [
            naturalnessofMovementsQn,
            backgroundCoherenceQn,
            genObjConsistencyQn(["the man"]),
            genScenarioFulfilment(`"The man runs in a hurry while on a call. Tracking shot."`)
        ]
    },

    {
        vidDesc: "The man runs in a hurry while on a call. Tracking shot.",
        vidUrl: "videos/Streets/SD1P-2C-2.mp4",
        qns: [
            naturalnessofMovementsQn,
            backgroundCoherenceQn,
            genObjConsistencyQn(["the man"]),
            genScenarioFulfilment(`"The man runs in a hurry while on a call. Tracking shot."`)
        ]
    },



]