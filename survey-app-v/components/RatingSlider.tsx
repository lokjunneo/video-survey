import { forwardRef, useState, type HTMLAttributes } from "react";

interface RatingSliderProps extends HTMLAttributes<HTMLDivElement>{
//   value: number;
//   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string; // optional, can override default "rating"
}

const labels: Record<number, string> = {
  1: "Perfectly normal",
  2: "Slightly abnormal",
  3: "Moderately abnormal",
  4: "Abnormal",
  5: "Very abnormal",
};

const RatingSlider = forwardRef<HTMLInputElement, RatingSliderProps>(
    ({ name = "rating" }, ref) => {

    const [value, setValue] = useState(3.5);
      // For half steps, show nearest integer label
      const displayLabel = labels[Math.round(value)] || "";
  
      return (
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-medium">{value}: {displayLabel}</span>
          <div className="flex-row items-center w-full">
            <span className="m-4">1</span>
            <input
                ref={ref}
                type="range"
                name={name}
                min={1}
                max={5}
                step={0.5}
                value={value}
                onChange={(e) => setValue(parseFloat(e.target.value))}
                className="w-2/4 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <span className="m-4">5</span>
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
