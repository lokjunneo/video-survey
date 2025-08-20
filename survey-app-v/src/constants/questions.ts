import type { SurveyDataFormat } from "@/utils/surveydataformat";

export const naturalnessofMovementsQn: SurveyDataFormat = {
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

export const backgroundCoherenceQn: SurveyDataFormat = {
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