import Image, { StaticImageData } from "next/image";
import image1 from '@/public/weddingImage.png'
import image2 from '@/public/musicVideoImage.png'
import image3 from '@/public/CommercialsImage.png'
import { ArrowRight } from "lucide-react";
import localFont from "next/font/local";

const headingFont = localFont({src : '../../public/Fonts/Nirvana-Font/NIRVANA.woff2'})

const subheadingFont = localFont({src : '../../public/Fonts/Satoshi-Font/Satoshi-Variable.woff2'})

const Portfolio = () => {
    return (
        <div className={subheadingFont.className + " text-[#FFD504] min-h-screen py-20 w-full flex flex-col gap-10"}>
            <h1 className="font-bold text-4xl px-10 md:px-32">Portfolio Overview</h1>
            <div className="flex flex-col gap-10 w-full justify-center items-center px-10 md:px-32">
                <PortfolioComponent image={image1} />
                <PortfolioComponent image={image2} />
                <PortfolioComponent image={image3} />
            </div>
            <p className="text-2xl flex gap-2 px-10 md:px-32 items-center justify-end">Explore More <ArrowRight /></p>
        </div>
    );
}
 
export default Portfolio;

interface PortfolioComponentProps {
    image : StaticImageData
}

const PortfolioComponent = ({image} : PortfolioComponentProps) => {
    return (
        <div className="relative w-full flex flex-col items-center">
            <Image src={image} alt="wedding" className="w-12/12" />
        </div>
    );
}