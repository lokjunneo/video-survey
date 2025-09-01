import { type FC, type HTMLAttributes } from "react";
import WrapperCard from "../CardWrapper";
import { useParams } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
import VideoThumbnail from "./VideoThumbnail";
import { setInitialFrameVisibility, setVideoFrameVisibility } from "@/redux/surveySlice";

import type { AppDispatch, RootState } from "@/redux/store";
// import { setInitialFrameVisibility, toggleInitialFrameVisibility } from "@/redux/surveySlice";
import { useDispatch, useSelector } from "react-redux";
import { ChevronDownIcon, ChevronRightIcon, MinusIcon } from "@heroicons/react/24/solid";

interface VideoModuleProps extends HTMLAttributes<HTMLDivElement> {
    vidUrl: string; // optional, default video source
    displayInitialFrame: boolean;
}

const VideoModule: FC<VideoModuleProps> = ({ vidUrl, displayInitialFrame  }) => {

    const { idParam } = useParams()
    const currentId = idParam ? parseInt(idParam, 10) : -1;
    // const [collapseDesc, setCollapseDesc] = useState(false);
    // const [showInitial, setShowInitial] = useState(false)
    const showInitialFrame = useSelector((state: RootState) => state.survey.showInitialFrame);
    const showVideoFrame = useSelector((state: RootState) => state.survey.showVideoFrame);
    const dispatch = useDispatch<AppDispatch>();
    // const surveyContext = useContext(SurveyContext);
    

    return <div className='flex flex-col max-h-full w-full md:w-auto'>

                  <div className='w-full' onClick={() => {
                      if (window.innerWidth < 768){
                          dispatch(setVideoFrameVisibility(!showVideoFrame))
                        }
                      }}>
                    <WrapperCard className='w-full flex-row flex border border-gray-400 md:border-none' padding={"small"}>
                      <b className='flex-1 justify-center'>Video {currentId}</b>
                      {showVideoFrame ? <ChevronDownIcon className="w-5 h-5 md:invisible"/> : <ChevronRightIcon className="w-5 h-5 md:invisible"/>}
                    </WrapperCard>
                  </div>
                  <WrapperCard className={`w-full flex ${!showInitialFrame ? "": "flex-1"} flex-col overflow-hidden bg-white md:bg-none items-center justify-center`}
                    color="none"
                    rounded={"none"}>
                    { showVideoFrame ? <VideoPlayer src={vidUrl}></VideoPlayer> : <></>}
                  </WrapperCard>
                  {
                    showInitialFrame ? 
                    <div className='w-full' onClick={() => {
                      if (window.innerWidth < 768){
                          dispatch(setInitialFrameVisibility(!showInitialFrame))
                        }
                      }}>
                      <WrapperCard className='w-full flex-row flex border border-gray-400 md:border-none' padding={"small"}>
                        <b className='flex-1 justify-center'>Initial Video frame</b>
                        {showInitialFrame ? <MinusIcon className="w-5 h-5 md:invisible"/> : <ChevronRightIcon className="w-5 h-5 md:invisible"/>}
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