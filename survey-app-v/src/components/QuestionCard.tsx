
import type { FC, HTMLAttributes } from "react";
import type { RatingLabelMap } from "../utils/ratinglabels";
import RatingSlider from "./RatingSlider"

interface QuestionCardProps extends HTMLAttributes<HTMLDivElement>{
    title?: string,
    description?: string,
    name?: string, // form field name
    labels?: RatingLabelMap
}

const QuestionCard: FC<QuestionCardProps> = ({ name, title, description, labels }) => {
    

    return (
        <div className="max-w-md w-full mx-auto bg-white shadow rounded-lg flex-col py-5">
            <p className="text-normal font-bold mb-1">{title}</ p>
            <p className="text-normal mb-3">{description}</ p>
            <RatingSlider name={name} labels={labels}></RatingSlider>
        </div>
    )
}


export default QuestionCard;
