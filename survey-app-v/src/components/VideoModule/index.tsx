import { useState, type FC, type HTMLAttributes } from "react";
import WrapperCard from "../CardWrapper";
import { useParams } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
import VideoThumbnail from "./VideoThumbnail";

import type { RootState } from "@/redux/store";
// import { setInitialFrameVisibility, toggleInitialFrameVisibility } from "@/redux/surveySlice";
import { useSelector } from "react-redux";


interface VideoModuleProps extends HTMLAttributes<HTMLDivElement> {
    vidUrl: string; // optional, default video source
    displayInitialFrame: boolean;
}

const VideoModule: FC<VideoModuleProps> = ({ vidUrl, displayInitialFrame  }) => {

    const { idParam } = useParams()
    const currentId = idParam ? parseInt(idParam, 10) : -1;
    const [collapseDesc, setCollapseDesc] = useState(false);
    // const [showInitial, setShowInitial] = useState(false)
    const showInitialFrame = useSelector((state: RootState) => state.survey.showInitialFrame);
    // const surveyContext = useContext(SurveyContext);
    

    return <div className='flex flex-col max-h-full'>

                  <div className='w-full' onClick={() => {setCollapseDesc(!collapseDesc)}}>
                    <WrapperCard className='w-full flex-row flex' padding={"small"}>
                      <b className='flex-1 justify-center'>Video {currentId}</b>
                      {/* {!collapseDesc ? <ChevronDownIcon className="w-5 h-5"/> : <ChevronRightIcon className="w-5 h-5"/>} */}
                    </WrapperCard>
                  </div>
                  <WrapperCard className={`w-full flex ${!showInitialFrame ? "": "flex-1"} flex-col overflow-hidden items-center justify-center`}
                    color="none"
                    rounded={"none"}>
                    <VideoPlayer src={vidUrl}></VideoPlayer>
                  </WrapperCard>
                  {
                    showInitialFrame ? 
                    <div className='w-full'>
                      <WrapperCard className='w-full' padding={"small"}>
                        <b>Initial Video frame</b>
                      </WrapperCard> 
                    </div> :
                    <></>
                  }
                  {
                    displayInitialFrame && showInitialFrame ? 
                    <div className='flex-1 overflow-hidden w-full'>
                      <VideoThumbnail src={vidUrl}></VideoThumbnail> 
                    </div>
                    :
                    <></>
                  }

                </div>
}

export default VideoModule;