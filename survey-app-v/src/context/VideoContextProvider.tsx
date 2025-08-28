import React, { createContext, useReducer, } from "react";
import { initialSurveyState, surveyReducer, type SurveyAction, type SurveyState } from "@/reducer/SurveyReducer";

// Define context type
interface SurveyContextType {
  state: SurveyState;
  dispatch: React.Dispatch<SurveyAction>;
}

// Create context with default value (optional: undefined to enforce provider usage)
export const SurveyContext = createContext<SurveyContextType | undefined>(undefined);

// Define provider props
interface VideoContextProviderProps {
  children: React.ReactNode;
}

// Create Provider to wrap app
export const SurveyContextProvider = ({ children }: VideoContextProviderProps) => {
  const [state, dispatch] = useReducer(surveyReducer, initialSurveyState);

  return (
    <SurveyContext.Provider value={{ state, dispatch }}>
      {children}
    </SurveyContext.Provider>
  );
};
