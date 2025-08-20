import { forwardRef, useState, type HTMLAttributes } from "react";
import type { RatingLabelMap } from "../utils/ratinglabels";

interface RatingSliderProps extends HTMLAttributes<HTMLDivElement>{
//   value: number;
//   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string, // optional, can override default "rating"
  labels? :RatingLabelMap,
  setIsNegativeScore?: React.Dispatch<React.SetStateAction<boolean>>
}

// const labels: RatingLabelMap = {
//   1: "Perfectly normal",
//   2: "Slightly abnormal",
//   3: "Moderately abnormal",
//   4: "Abnormal",
//   5: "Very abnormal",
// };

const RatingSlider = forwardRef<HTMLInputElement, RatingSliderProps>(
    ({ name = "rating", labels, setIsNegativeScore }, ref) => {

        const [value, setValue] = useState(5);

        const displayLabel = (labels) ?  ": " + labels[Math.floor(value)] : "";
    
        return (
            <div className="flex flex-col items-center space-y-2">
            {value !== -1 ?  
              <span className="text-sm font-sm italic text-gray-500">{value} {displayLabel}</span>:
              <></>
            }
            <div className="flex-row items-center w-full">
                <span className="w-1/6 text-center inline-block">1</span>
                <input
                    ref={ref}
                    type="range"
                    name={name}
                    min={1}
                    max={5}
                    step={0.5}
                    value={value}
                    onChange={(e) => {
                      const newValue = parseFloat(e.target.value)
                      setValue(newValue)
                      if (newValue < 5) {setIsNegativeScore?.(true)}
                      else {setIsNegativeScore?.(false)}
                    }}
                    className="w-4/6 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    required
                />
                <span className="w-1/6 text-center inline-block">5</span>
            </div>
            {/* <div className="w-64 flex justify-between mt-1 text-xs font-semibold">
            {Array.from({ length: 5 }, (_, i) => (
                <span key={i}>|</span>
            ))}
            </div> */}
            </div>
      );
    }
  );

export default RatingSlider;
