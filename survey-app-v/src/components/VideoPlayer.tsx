import type { FC, HTMLAttributes } from "react";

interface VideoPlayerProps extends HTMLAttributes<HTMLDivElement> {
    src?: string; // optional, default video source
  }

  const VideoPlayer: FC<VideoPlayerProps> = ({ src="videos/veo3fast_3.mp4", className="" }: VideoPlayerProps) => {
    return (
    <div className={className}>
        <video
            controls
            className="rounded shadow-lg"
        >
            <source
            src={src}
            type="video/mp4"
            />
            Your browser does not support the video tag.
        </video>
      </div>
    );
  };
  
  export default VideoPlayer;