
import { useState, type FC, type HTMLAttributes } from "react";
import type { RatingLabelMap } from "../utils/ratinglabels";
import RatingSlider from "./RatingSlider"
import { inputHandleEnter } from "../utils/inputhandler";
import QuestionMarkTooltip from "./QuestionMarkTooltip";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/redux/store";
import { setInitialFrameVisibility } from "@/redux/surveySlice";
import { parseFakeMD } from "@/utils/surveydataformat";

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
    const showInitialFrame = useSelector((state: RootState) => state.survey.showInitialFrame);
    const dispatch = useDispatch<AppDispatch>();

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
                // description?.split("\n").map((line, i) => {
                //     let fontSize = "text-base"
                //     if (i > 0 && labels) fontSize += " text-gray-500"
                //     return <p className={`${fontSize}`}>{line}</ p>
                // })
                description && parseFakeMD(description)
            }
            {
                // lazy
                name === "object-consistency" ? 
                    <div className="w-full flex flex-col pt-4">
                        <button type="button" 
                            className="self-center mx-auto !border-gray-400 !font-normal"
                            onClick={() => {dispatch(setInitialFrameVisibility(!showInitialFrame))}}> 
                            {`${showInitialFrame ? "Hide" : "Show"} initial video frame`} 
                        </button>
                    </div> : <></>
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
                    placeholder="Because..." name={name +"-comment"} onKeyDown={inputHandleEnter} autoComplete="off" required></input>
                </div> :
                <div></div>
            }
            
        </div>
    )
}


export default QuestionCard;
