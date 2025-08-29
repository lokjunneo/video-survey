import type { SurveyDataFormat } from "@/utils/surveydataformat";
import { coherenceExample, coherenceQn, genScenarioFulfilment, genObjConsistencyQn, naturalnessofMovementsQn, genExampleGuide, backgroundCoherenceQn, appealRatingQn, genGenericQn } from "./questions";
import { FormType } from "./FormTypes";


export const surveyForms: SurveyDataFormat[] = [

    {
        vidDesc: "First, we will go through a few example questions",
        vidUrl: "Section 0: Example",
        qns: [],
        formType: FormType.SectionMarker
    },

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

    {
        vidDesc: `That's all the example questions we have. The survey will officially begin now.
        In this section, the following scenario will be covered:
        > A veteran does the following: 
        > 1. Walks left and exits the camera frame, 
        > 2. Walks back into the camera frame from the right, 
        > 3. Finally, stops at his original position.
        > The camera does not move.`,
        vidUrl: "Section 1  : Veteran",
        qns: [],
        formType: FormType.SectionMarker
    },
    // Veteran
    {
        vidDesc: "The veteran Walks left and exits frame, then walk back into the frame from the right, and stops at his original position.",
        vidUrl: "videos/Veteran/Apple",
        qns: [
            genObjConsistencyQn(["the veteran","his uniform"]),
            genScenarioFulfilment(`
                > A veteran does the following: 
                > 1. Walks left and exits the camera frame, 
                > 2. Walks back into the camera frame from the right, 
                > 3. Finally, stops at his original position.
                > The camera does not move.`)
        ]
    },
    {
        vidDesc: "The veteran Walks left and exits frame, then walk back into the frame from the right, and stops at his original position.",
        vidUrl: "videos/Veteran/Apple-2",
        qns: [
            genObjConsistencyQn(["the veteran","his uniform"]),
            genScenarioFulfilment(`
                > A veteran does the following: 
                > 1. Walks left and exits the camera frame, 
                > 2. Walks back into the camera frame from the right, 
                > 3. Finally, stops at his original position.
                > The camera does not move.`)
        ]
    },
    {
        vidDesc: "The veteran Walks left and exits frame, then walk back into the frame from the right, and stops at his original position.",
        vidUrl: "videos/Veteran/Banana",
        qns: [
            genObjConsistencyQn(["the veteran","his uniform"]),
            genScenarioFulfilment(`
                > A veteran does the following: 
                > 1. Walks left and exits the camera frame, 
                > 2. Walks back into the camera frame from the right, 
                > 3. Finally, stops at his original position.
                > The camera does not move.`)
        ]
    },

    {
        vidDesc: `In this section, the following scenario will be covered:
        > A man and a woman does the following: 
        > 1. Lift their cups 
        > 2. Clink them together
        > 3. Take a sip of coffee`,
        vidUrl: "Section 2: Cheers",
        qns: [],
        formType: FormType.SectionMarker
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
        vidDesc: `In this section, the following scenario will be covered:
        > 1. A cameraman, using a handheld camera, approaches a cardboard standee.
        > (A handheld camera has a natural wobble to it.)
        > 2. Suddenly, the standee comes to life! It starts walking towards the cameraman.
        > 3. The cameraman starts to move backwards away from the standee, screen shaking greatly to reflect his anxiety.`,

        vidUrl: "Section 3: SPF Standee",
        qns: [],
        formType: FormType.SectionMarker
    },

    {
        vidDesc: "The standee comes to life and walks towards the camera.",
        vidUrl: "videos/Standee/V3-1D-2.mp4",
        qns: [
            naturalnessofMovementsQn,
            backgroundCoherenceQn,
            genScenarioFulfilment(`
                > 1. A cameraman, using a handheld camera, approaches a cardboard standee.
                > (A handheld camera has a natural wobble to it.)
                > 2. Suddenly, the standee comes to life! It starts walking towards the cameraman.
                > 3. The cameraman starts to move backwards away from the standee, screen shaking greatly to reflect his anxiety.`)
        ]
    },

        {
        vidDesc: "The standee comes to life and walks towards the camera.",
        vidUrl: "videos/Standee/SD1P-2A-1.mp4",
        qns: [
            naturalnessofMovementsQn,
            backgroundCoherenceQn,
            genScenarioFulfilment(`
                > 1. A cameraman, using a handheld camera, approaches a cardboard standee.
                > (A handheld camera has a natural wobble to it.)
                > 2. Suddenly, the standee comes to life! It starts walking towards the cameraman.
                > 3. The cameraman starts to move backwards away from the standee, screen shaking greatly to reflect his anxiety.`)
        ]
    },

    //      Low consistency
    {
        vidDesc: "The standee comes to life and walks towards the camera.",
        vidUrl: "videos/Standee/HL2P-2C-1.mp4",
        qns: [
            naturalnessofMovementsQn,
            backgroundCoherenceQn,
            genScenarioFulfilment(`
                > 1. A cameraman, using a handheld camera, approaches a cardboard standee.
                > (A handheld camera has a natural wobble to it.)
                > 2. Suddenly, the standee comes to life! It starts walking towards the cameraman.
                > 3. The cameraman starts to move backwards away from the standee, screen shaking greatly to reflect his anxiety.`)
        ]
    },

    // Streets
    {
        vidDesc: `In this section, the following scenario will be covered:
        > The man runs in a hurry while on a call. Tracking shot. (camera follows the man)`,
        vidUrl: "Section 4: Running Man",
        qns: [],
        formType: FormType.SectionMarker
    },

    {
        vidDesc: "The man runs in a hurry while on a call. Tracking shot.",
        vidUrl: "videos/Streets/HL2P-2A-1.mp4",
        qns: [
            naturalnessofMovementsQn,
            backgroundCoherenceQn,
            genObjConsistencyQn(["the man"]),
            genScenarioFulfilment(`> The man runs in a hurry while on a call. Tracking shot. (camera follows the man).`)
        ]
    },

    {
        vidDesc: "The man runs in a hurry while on a call. Tracking shot.",
        vidUrl: "videos/Streets/HL2P-2A-2.mp4",
        qns: [
            naturalnessofMovementsQn,
            backgroundCoherenceQn,
            genObjConsistencyQn(["the man"]),
            genScenarioFulfilment(`> The man runs in a hurry while on a call. Tracking shot. (camera follows the man).`)
        ]
    },

    {
        vidDesc: "The man runs in a hurry while on a call. Tracking shot.",
        vidUrl: "videos/Streets/V3-2A-2.mp4",
        qns: [
            naturalnessofMovementsQn,
            backgroundCoherenceQn,
            genObjConsistencyQn(["the man"]),
            genScenarioFulfilment(`> The man runs in a hurry while on a call. Tracking shot. (camera follows the man).`)
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
            genScenarioFulfilment(`> The man runs in a hurry while on a call. Tracking shot. (camera follows the man).`)
        ]
    },

    {
        vidDesc: "The man runs in a hurry while on a call. Tracking shot.",
        vidUrl: "videos/Streets/SD1P-2C-2.mp4",
        qns: [
            naturalnessofMovementsQn,
            backgroundCoherenceQn,
            genObjConsistencyQn(["the man"]),
            genScenarioFulfilment(`> The man runs in a hurry while on a call. Tracking shot. (camera follows the man).`)
        ]
    },

    // Gummy bear
    {
        vidDesc: `In this section, the following scenario will be covered:
        > Stop motion animation. 
        > A detective gummy bear bends down to look closer at body. 
        > Gummy bears in the background turn towards each other repeatedly,
        > slightly bobbing their heads, as if talking amongst themselves.`,

        vidUrl: "Section 5: Gummy bears",
        qns: [],
        formType: FormType.SectionMarker
    },

    {
        vidDesc: "Gummy bears talk talk talk",
        vidUrl: "videos/Gummy/SD1P-2E-3.mp4",
        qns: [
            appealRatingQn,
            coherenceQn,
            genScenarioFulfilment(
                `> Stop motion animation. 
                > The detective gummy bear bends down to look closer at body. 
                > Gummy bears in the background turn towards each other repeatedly,
                > slightly bobbing their heads, as if talking amongst themselves.`)
        ]
    },

    {
        vidDesc: "Gummy bears talk talk talk",
        vidUrl: "videos/Gummy/SD1P-2G-3.mp4",
        qns: [
            appealRatingQn,
            coherenceQn,
            genScenarioFulfilment(
                `> Stop motion animation. 
                > The detective gummy bear bends down to look closer at body. 
                > Gummy bears in the background turn towards each other repeatedly,
                > slightly bobbing their heads, as if talking amongst themselves.`)
        ]
    },

    {
        vidDesc: "Gummy bears talk talk talk",
        vidUrl: "videos/Gummy/HL2P-2A-3.mp4",
        qns: [
            appealRatingQn,
            coherenceQn,
            genScenarioFulfilment(
                `> Stop motion animation. 
                > The detective gummy bear bends down to look closer at body. 
                > Gummy bears in the background turn towards each other repeatedly,
                > slightly bobbing their heads, as if talking amongst themselves.`)
        ]
    },

    {
        vidDesc: "Gummy bears talk talk talk",
        vidUrl: "videos/Gummy/HL2P-2F-1.mp4",
        qns: [
            appealRatingQn,
            coherenceQn,
            genScenarioFulfilment(
                `
                > Stop motion animation. 
                > The detective gummy bear bends down to look closer at body. 
                > Gummy bears in the background turn towards each other repeatedly,
                > slightly bobbing their heads, as if talking amongst themselves.`)
        ]
    },

    {
        vidDesc: `For the following videos in this same section, there will be slight to the scenario:
        > Stop motion animation. 
        > The detective gummy bear bends down to look closer at body. 
        > Gummy bears in the background turn towards each other **and fidgets repeatedly**, 
        > as if talking amongst each other. Gummy bears do not disappear.
        The gummy bears should now "fidget" to imitate talking, instead of bobbing their heads slightly.`,

        vidUrl: "Section 5.5: Gummy bears",
        qns: [],
        formType: FormType.SectionMarker
    },

    {
        vidDesc: "Gummy bears talk talk talk",
        vidUrl: "videos/Gummy/V3-1G-1.mp4",
        qns: [
            appealRatingQn,
            coherenceQn,
            genScenarioFulfilment(
                `> Stop motion animation. 
                > The detective gummy bear bends down to look closer at body. 
                > Gummy bears in the background turn towards each other and fidgets repeatedly, 
                > as if talking amongst each other. Gummy bears do not disappear.`)
        ]
    },

    {
        vidDesc: "Gummy bears talk talk talk",
        vidUrl: "videos/Gummy/V3-1G-2.mp4",
        qns: [
            appealRatingQn,
            coherenceQn,
            genScenarioFulfilment(
                `> Stop motion animation. 
                > The detective gummy bear bends down to look closer at body. 
                > Gummy bears in the background turn towards each other and fidgets repeatedly, 
                > as if talking amongst each other. Gummy bears do not disappear.`)
        ]
    },

    // Cafe

    {
        vidDesc: `In this section, the following scenario will be covered:
        > Fixed camera. A woman is seated in a cafe.
        > Her expression gradually becomes terrified as the scene color tone transitions into eerie, creating a terrifying atmosphere.`,

        vidUrl: "Section 6: Cafe",
        qns: [],
        formType: FormType.SectionMarker
    },

    {
        vidDesc: "Freaky cafe",
        vidUrl: "videos/Cafe/V3-1B-1.mp4",
        qns: [
            genGenericQn("convey-emotion", "Effectiveness of Emotion", "How effectively does the character convey fear/terror in this scene?"),
            genGenericQn("convey-eerie-bg", "Effectiveness of Background", "How effectively does the background convey a sense of eeriness in this scene?"),
            coherenceQn,
            genScenarioFulfilment(
                ` Fixed camera. A woman is seated in a cafe.
                > Her expression gradually becomes terrified as the scene color tone transitions into eerie, creating a terrifying atmosphere.`)
        ]
    },

    {
        vidDesc: "Freaky cafe",
        vidUrl: "videos/Cafe/SD1P-2B-2.mp4",
        qns: [
            genGenericQn("convey-emotion", "Effectiveness of Emotion", "How effectively does the character convey fear/terror in this scene?"),
            genGenericQn("convey-eerie-bg", "Effectiveness of Background", "How effectively does the background convey a sense of eeriness in this scene?"),
            coherenceQn,
            genScenarioFulfilment(
                ` Fixed camera. A woman is seated in a cafe.
                > Her expression gradually becomes terrified as the scene color tone transitions into eerie, creating a terrifying atmosphere.`)
        ]
    },

    {
        vidDesc: "Freaky cafe",
        vidUrl: "videos/Cafe/HL2P-2C-1.mp4",
        qns: [
            genGenericQn("convey-emotion", "Effectiveness of Emotion", "How effectively does the character convey fear/terror in this scene?"),
            genGenericQn("convey-eerie-bg", "Effectiveness of Background", "How effectively does the background convey a sense of eeriness in this scene?"),
            coherenceQn,
            genScenarioFulfilment(
                ` Fixed camera. A woman is seated in a cafe.
                > Her expression gradually becomes terrified as the scene color tone transitions into eerie, creating a terrifying atmosphere.`)
        ]
    },

    {
        vidDesc: "Freaky cafe",
        vidUrl: "videos/Cafe/HL2P-2C-2.mp4",
        qns: [
            genGenericQn("convey-emotion", "Effectiveness of Emotion", "How effectively does the character convey fear/terror in this scene?"),
            genGenericQn("convey-eerie-bg", "Effectiveness of Background", "How effectively does the background convey a sense of eeriness in this scene?"),
            coherenceQn,
            genScenarioFulfilment(
                ` Fixed camera. A woman is seated in a cafe.
                > Her expression gradually becomes terrified as the scene color tone transitions into eerie, creating a terrifying atmosphere.`)
        ]
    },




]