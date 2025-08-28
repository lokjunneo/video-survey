import { parseFakeMD } from "@/utils/surveydataformat";
import type { FC, HTMLAttributes } from "react";
import { useNavigate, useParams } from "react-router-dom"

interface SectionMarkerProps extends HTMLAttributes<HTMLDivElement>{
    title?: string,
    description: string,
}

export const SectionMarker: FC<SectionMarkerProps> = ({title="Section", description}) => {
    
  const { idParam } = useParams()
    const navigate = useNavigate()
    const currentId = idParam ? parseInt(idParam, 10) : -1;

    return <div>
        <div className="max-w-md w-full mx-auto bg-white shadow rounded-lg flex-col px-5 py-5 text-left">
            <p className="text-normal font-bold mb-1">{title}</ p> 
            {/* <p className="text-normal font-normal mb-3">{description}</ p> */}
            {
              // description?.split("\n").map((line) => {
              //   let fontStyle = "text-normal font-normal mb-3"
              //   if (line.trimStart().startsWith(">")) {
              //     line = line.replace(">","")
              //     fontStyle = "border-l-4 pl-4 text-gray-500"
              //   }
              //   return <p className={fontStyle}>{line}</ p>
              // }) 
              parseFakeMD(description)
            } 
          </div>

          <br />

          <button
            className="g-blue-600 text-black py-2 rounded max-w-md w-full hover:bg-blue-700 shadow"
            onClick={ () => {
                navigate(`/${currentId + 1}`)
            }}
          >
            Next
          </button>
    </div>
}