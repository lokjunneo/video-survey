import { useState, type FC, type HTMLAttributes } from "react";
import WrapperCard from "../CardWrapper";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useParams } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
import VideoThumbnail from "./VideoThumbnail";

interface VideoModuleProps extends HTMLAttributes<HTMLDivElement> {
    vidUrl: string; // optional, default video source
    displayInitialFrame: boolean;
}

const VideoModule: FC<VideoModuleProps> = ({ vidUrl, displayInitialFrame  }) => {

    const { idParam } = useParams()
    const currentId = idParam ? parseInt(idParam, 10) : -1;
    const [collapseDesc, setCollapseDesc] = useState(false);
    const [showInitial, setShowInitial] = useState(false)

    return <div className='flex flex-col max-h-full'>

                  <div className='w-full' onClick={() => {setCollapseDesc(!collapseDesc)}}>
                    <WrapperCard className='w-full flex-row flex' padding={"small"}>
                      <b className='flex-1 justify-center'>Video {currentId}</b>
                      {!collapseDesc ? <ChevronDownIcon className="w-5 h-5"/> : <ChevronRightIcon className="w-5 h-5"/>}
                    </WrapperCard>
                  </div>
                  {
                    // !collapseDesc ?
                    // <WrapperCard className='w-full transition-all duration-300 ease-in-out' padding={"small"} rounded={"none"}>

                    //     <i className="max-w-full break-words">{surveyForms[id].vidDesc}</i> 
                        

                    // </WrapperCard>
                    // : <></>
                  }
                  <WrapperCard className={`w-full flex ${!showInitial ? "": "flex-1"} flex-col overflow-hidden items-center justify-center`}
                    color="none"
                    rounded={"none"}>
                    <VideoPlayer src={vidUrl}></VideoPlayer>
                  </WrapperCard>
                  {
                    displayInitialFrame ? 
                    <div className='w-full' onClick={() => {setShowInitial(!showInitial)}}>
                      <WrapperCard className='w-full' padding={"small"}>
                        <b>Show initial frame</b>
                      </WrapperCard> 
                    </div> :
                    <></>
                  }
                  {
                    displayInitialFrame && showInitial ? 
                    <div className='flex-1 overflow-hidden w-full'>
                      <VideoThumbnail src={vidUrl}></VideoThumbnail> 
                    </div>
                    :
                    <></>
                  }

                </div>
}

export default VideoModule;