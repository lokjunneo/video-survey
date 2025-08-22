import type { QuestionDataFormat } from "@/utils/questiondataformat";

export const coherenceExample: QuestionDataFormat = {
    name: "coherence-example",
    title: "Coherence Example",
    description: "This is an example question on coherence.\nNotice how the woman's cup randomly flew up and transformed, which is completely random and irrelevant to the video description.\nHence, this video should be given a low coherence score.",
}

export const genExampleGuide = (name: string, title: string, description: string): QuestionDataFormat => {
    return {
        name: name,
        title: title,
        description: description
    }
}

export const naturalnessofMovementsQn: QuestionDataFormat = {
    name: "movement-natural",
    title: "Naturalness of Movements",
    description: "How natural does the character's movements appear?",
    ratinglabels: {
        1: "Completely unnatural",
        2: "Very unnatural",
        3: "Somewhat natural",
        4: "Very natural",
        5: "Completely natural"
    }
}

export const coherenceQn: QuestionDataFormat = {
    name: "coherence",
    title: "Coherence of Video",
    description: "Rate how coherent the video is.\nLook out for areas in videos that don't make sense, and not relevant to the video description.",
    additionalExplanation: "Examples of low coherence: \nRandomly floating objects \nItems randomly transforming \nObjects randomly disappearing/reappearing.",
    ratinglabels: {
        1: "Made by a drunk",
        2: "Very incoherent. A fever dream.",
        3: "Somewhat coherent",
        4: "Mostly coherent",
        5: "Completely coherent"
    }
}

export const backgroundCoherenceQn: QuestionDataFormat = {
    name: "background-coherence",
    title: "Coherence of Background",
    description: "How coherent/natural is the background of the video?",
    ratinglabels: {
        1: "Complete glibberish",
        2: "Very incoherent",
        3: "Somewhat coherent",
        4: "Very coherent",
        5: "Completely coherent"
    }
}

export const errorFreeQualityQn: QuestionDataFormat = {
    name: "error-free-quality",
    title: "Error-free Quality",
    description: "Rate how free the video is from errors.\n(glitches, distortion, objects/items morphing or disappearing etc)",
    ratinglabels: {
        1: "Complete disaster",
        2: "A lot of errors",
        3: "Quite a number of errors",
        4: "Almost error free",
        5: "Completely free from errors"
    }
}

export const genObjConsistencyQn = (objects: string[]) : QuestionDataFormat => {
    
    let objectsStr = ""
    objects.forEach((obj, i) => {
        objectsStr += obj
        if (objects.length - i - 1 === 1) objectsStr += " and "
        else if (objects.length - i - 1 > 1) objectsStr += ", "
    })

    return {
        name: "object-consistency",
        title: "Character/Object Consistency",
        description: `Rate the consistency of the appearances of ${objectsStr}.\nIgnore normal expression or movement changes.\nFocus on appearance and presence.`,
        ratinglabels: {
            1: "Completely inconsistent",
            2: "Very inconsistent",
            3: "Somewhat consistent",
            4: "Mostly consistent",
            5: "Completely consistent"
        }
    }

}

export const genScenarioFulfilment = (prompt: string) : QuestionDataFormat => {

    return {
        name: "scenario-fulfilment",
        title: "Scenario Fulfilment",
        description: `Rate how well the video fulfils the video description:\n${prompt}`,
        ratinglabels: {
            1: "Not matching at all",
            2: "Barely matching",
            3: "Somewhat matching",
            4: "Mostly matching",
            5: "Perfectly matching"
        }    

    }
}