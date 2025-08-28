// redux/store.ts
import surveyReducer from "@/redux/surveySlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    survey: surveyReducer,
  },
});

// TypeScript types for convenience
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
