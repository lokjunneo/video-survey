import { useState, type FC, type HTMLAttributes } from "react";

interface QuestionMarkTooltipProps extends HTMLAttributes<HTMLDivElement> {
  explanation : string
}

const QuestionMarkTooltip: FC<QuestionMarkTooltipProps> = ({explanation = "Cool"}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Question mark button */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="px-2 py-1 flex items-center justify-center rounded-full text-xs bg-gray-100 text-gray-700 font-bold hover:bg-gray-300 transition"
      >
        ?
      </div>

      {/* Tooltip div */}
      {hovered && (
        <div className="absolute left-8 top-1/2 -translate-y-1/2 w-48 p-2 rounded-lg bg-gray-800 text-white text-sm shadow-lg">
          {
              explanation?.split("\n").map((line) => {
                  return <p>{line}</ p>
              })
            }
        </div>
      )}
    </div>
  );
}

export default QuestionMarkTooltip;