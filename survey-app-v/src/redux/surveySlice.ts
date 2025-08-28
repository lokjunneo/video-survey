// redux/surveySlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// Initial state
export interface SurveyState {
  showInitialFrame: boolean;
}

const initialState: SurveyState = {
  showInitialFrame: false,
};

// Create slice
const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    setInitialFrameVisibility: (state, action: PayloadAction<boolean>) => {
      state.showInitialFrame = action.payload;
    },
    toggleInitialFrameVisibility: (state) => {
      state.showInitialFrame = !state.showInitialFrame;
    },
  },
});

export const { setInitialFrameVisibility, toggleInitialFrameVisibility } = surveySlice.actions;
export default surveySlice.reducer;
