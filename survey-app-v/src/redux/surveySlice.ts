// redux/surveySlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// Initial state
export interface SurveyState {
  showInitialFrame: boolean;
  showVideoFrame: boolean;
}

const initialState: SurveyState = {
  showInitialFrame: false,
  showVideoFrame: true
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
    setVideoFrameVisibility: (state, action: PayloadAction<boolean>) => {
      state.showVideoFrame = action.payload;
    },
  },
});

export const { setInitialFrameVisibility, toggleInitialFrameVisibility, setVideoFrameVisibility } = surveySlice.actions;
export default surveySlice.reducer;
