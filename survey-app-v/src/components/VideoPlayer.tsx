import { type FC, type HTMLAttributes } from "react";
import { useParams } from "react-router-dom";

interface VideoPlayerProps extends HTMLAttributes<HTMLDivElement> {
    src: string; // optional, default video source
    description?: string;
  }

  const VideoPlayer: FC<VideoPlayerProps> = ({ src="videos/veo3fast_3.mp4", description="-" }: VideoPlayerProps) => {
    const { idParam } = useParams()
    const currentId = idParam ? parseInt(idParam, 10) : -1;

    return (
      <div className="w-full max-h-full h-full p-8 rounded-xl flex items-center justify-center flex-col">
        <div className="w-auto h-full flex flex-col items-center justify-center">
          <div className="w-full max-w-full mx-auto bg-white shadow rounded-lg flex-col px-5 py-3">
            <b>Video {currentId}</b>
          </div>
          <div className="w-full max-w-full mx-auto bg-white shadow rounded-lg flex-col px-5 py-3">
            <p>Video description</p>
            <i className="max-w-full break-words">{description}</i>
          </div>
          <video
              autoPlay
              loop
              controls
              className="rounded shadow-lg max-h-9/10 max-w-full"
          >
              <source
              src={src}
              type="video/mp4"
              />
              Your browser does not support the video tag.
          </video>

        </div>
      </div>
    );
  };
  
  export default VideoPlayer;