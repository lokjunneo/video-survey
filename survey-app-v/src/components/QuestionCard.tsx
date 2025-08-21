
import { useState, type FC, type HTMLAttributes } from "react";
import type { RatingLabelMap } from "../utils/ratinglabels";
import RatingSlider from "./RatingSlider"

interface QuestionCardProps extends HTMLAttributes<HTMLDivElement>{
    title?: string,
    description?: string,
    name?: string, // form field name
    labels?: RatingLabelMap,
    requireExplanation?: Boolean
}

const QuestionCard: FC<QuestionCardProps> = ({ name, title, description, labels, requireExplanation = true }) => {
    
    const [isNegativeScore, setIsNegativeScore] = useState(false);
    return (
        <div className="max-w-md w-full mx-auto bg-white shadow rounded-lg flex-col px-5 py-5 text-left">
            <p className="text-normal font-bold mb-1">{title}</ p>
            {
                description?.split("\n").map((line, i) => {
                    let fontSize = "text-base"
                    if (i > 0) fontSize += " italic"
                    return <p className={`${fontSize}`}>{line}</ p>
                })
            }
            <br></br>
            { 
                requireExplanation ? 
                <RatingSlider name={name +"-score"} labels={labels} setIsNegativeScore={setIsNegativeScore}></RatingSlider> :
                <RatingSlider name={name +"-score"} labels={labels}></RatingSlider>
            }
            {
                isNegativeScore ?
                <div className="flex items-center flex-col">
                    <p className="text-normal mb-3">Briefly explain why:</ p>
                    <input className="w-4/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Because..." name={name +"-comment"} required></input>
                </div> :
                <div></div>
            }
            
        </div>
    )
}


export default QuestionCard;
