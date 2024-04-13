import ReactPlayer from "react-player/lazy";
import { useEffect, useState } from "react";

const VideoPlayer = ({url}) => {
    const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
    return (
        <>
            {hasWindow && <ReactPlayer url={url}
                width="100%"
                height="100%"
                controls
                playing
            />}
        </>
    );
}
 
export default VideoPlayer;