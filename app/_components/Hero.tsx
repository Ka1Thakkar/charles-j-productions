import Image from "next/image";
import heroImage from '@/public/hero image.png'

const Hero = () => {
    return (
        <div className="relative min-h-screen w-full">
            <video autoPlay muted preload="none" loop className="w-[100vw] h-[100vh] object-cover object-center absolute">
                <source type="video/mp4" src="/aassets/weddingVideo.mp4" ></source>
            </video>
            <div className="absolute bg-gradient-to-b from-[#191416] to-transparent h-[50vh] via-transparent w-full z-10 top-0"></div>
            {/* <div className="absolute bottom-0 bg-gradient-to-t from-[#191416] to-transparent via-transparent h-[15vh] w-full z-10"></div> */}
        </div>
    );
}
 
export default Hero;