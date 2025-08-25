import { type FC, type HTMLAttributes } from "react";

interface VideoThumbnailProps extends HTMLAttributes<HTMLDivElement> {
    src: string; // optional, default video source
    // description?: string;
  }

  const VideoThumbnail: FC<VideoThumbnailProps> = ({ src="videos/veo3fast_3.mp4"}: VideoThumbnailProps) => {

    return (
      <div className="w-full max-h-full h-full rounded-xl flex items-center justify-center flex-col">
        <div className="w-auto h-full flex flex-col items-center justify-center">
          <div className="w-full max-w-full max-h-full mx-auto bg-white shadow rounded-lg flex-col px-5 py-3">
            <b>Initial frame</b>
            <p>For object consistency comparison</p>
          </div>
        <video
            prefix="metadata"
            controls={false}
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
  
  export default VideoThumbnail;