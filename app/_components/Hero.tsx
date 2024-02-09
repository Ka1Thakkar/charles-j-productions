import Image from "next/image";
import heroImage from '@/public/hero image.png'

const Hero = () => {
    return (
        <div className="relative min-h-screen w-full">
            <Image src={heroImage} alt="hero image" className="w-[100vw] h-[100vh] object-cover object-center absolute" />
            <div className="absolute bg-gradient-to-b from-[#191416] to-transparent h-[35vh] w-full z-10"></div>
        </div>
    );
}
 
export default Hero;