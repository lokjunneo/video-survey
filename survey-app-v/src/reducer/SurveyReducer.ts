// Define state type
export interface SurveyState {
  showInitialFrame: boolean;
}

export enum SurveyActionType {
  SET_INITIAL_FRAME_VISIBILITY = "SET_INITIAL_FRAME_VISIBILITY",
}

// Define action types
export type SurveyAction =
  | { type: SurveyActionType.SET_INITIAL_FRAME_VISIBILITY; payload: boolean }
  // | { type: "RESET_NAME" };

// Reducer function
export const surveyReducer = (state: SurveyState, action: SurveyAction): SurveyState => {
  switch (action.type) {
    case SurveyActionType.SET_INITIAL_FRAME_VISIBILITY:
      return { ...state, showInitialFrame: action.payload };
  }
};

// Initial state
export const initialSurveyState: SurveyState = {
  showInitialFrame: false,
};
