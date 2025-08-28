
import { useContext, useState, type FC, type HTMLAttributes } from "react";
import type { RatingLabelMap } from "../utils/ratinglabels";
import RatingSlider from "./RatingSlider"
import { inputHandleEnter } from "../utils/inputhandler";
import QuestionMarkTooltip from "./QuestionMarkTooltip";
import { SurveyActionType } from "@/reducer/SurveyReducer";
import { SurveyContext } from "@/context/VideoContextProvider";

interface QuestionCardProps extends HTMLAttributes<HTMLDivElement>{
    title?: string,
    description?: string,
    name?: string, // form field name
    labels?: RatingLabelMap,
    additionalExplanation?: string,
    requireExplanation?: Boolean
}

const QuestionCard: FC<QuestionCardProps> = ({ name, title, description, labels, additionalExplanation, requireExplanation = true }) => {
    
    const [isNegativeScore, setIsNegativeScore] = useState(false);
    const context = useContext(SurveyContext);
    if (!context) throw new Error("Must be used inside SurveyProvider");

    const { dispatch } = context;
    return (
        <div className="max-w-md w-full mx-auto bg-white shadow rounded-lg flex-col px-5 py-5 text-left">
            <div className="flex flex-row">
                <p className="text-normal font-bold mb-1">{title}</ p>
                <p className="">&nbsp;&nbsp;</p>
                {
                    additionalExplanation && <QuestionMarkTooltip explanation={additionalExplanation}  />
                }
                
            </div>
            
            {
                description?.split("\n").map((line, i) => {
                    let fontSize = "text-base"
                    if (i > 0 && labels) fontSize += " text-gray-500"
                    return <p className={`${fontSize}`}>{line}</ p>
                })
            }
            {
                // lazy
                name === "object-consistency" ? 
                    <button type="button" onClick={() => {dispatch({
                            type: SurveyActionType.TOGGLE_INITIAL_FRAME_VISIBILITY
                    })}}> Show initial frame </button> : <></>
            }

            <br></br>
            { 
                labels ?
                    requireExplanation ? 
                    <RatingSlider name={name +"-score"} labels={labels} setIsNegativeScore={setIsNegativeScore}></RatingSlider> :
                    <RatingSlider name={name +"-score"} labels={labels}></RatingSlider> 
                    :
                <></>
            }
            {
                isNegativeScore ?
                <div className="flex items-center flex-col">
                    <p className="text-normal mb-3">Briefly explain why:</ p>
                    <input className="w-4/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Because..." name={name +"-comment"} onKeyDown={inputHandleEnter} required></input>
                </div> :
                <div></div>
            }
            
        </div>
    )
}


export default QuestionCard;
