'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import localFont from "next/font/local";
import weddings from './data/weddings'
import commercials from './data/commercials'
import musicVideos from './data/musicVideos'
import Image from "next/image";
import { usePortfolioState } from "@/hooks/portfolio-state";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import VideoPlayer from '@/components/VideoPlayer'


const headingFont = localFont({ src: '../../../public/Fonts/Nirvana-Font/NIRVANA.woff2' })

const subheadingFont = localFont({ src: '../../../public/Fonts/Satoshi-Font/Satoshi-Variable.woff2' })

const Categories = () => {
    const portfolioState = usePortfolioState()
    return (
        <div className="min-h-screen flex flex-col pt-40 pb-20 px-10 md:px-32 gap-20">
            <h1 className={headingFont.className + " text-8xl text-[#FFE812] font-medium"}>
                Portfolio
            </h1>
            <div className={subheadingFont.className + " text-[#FFE812]"}>
                <Tabs defaultValue='Weddings' className="w-full">
                    <TabsList className="bg-transparent text-white/50">
                        <TabsTrigger value="Weddings" className="data-[state=active]:bg-transparent data-[state=active]:text-[#FFE812] data-[state=active]:border-b-2 data-[state=active]:border-[#FFE812] rounded-none border-b-2 border-white/50 md:text-lg">
                            Weddings
                        </TabsTrigger>
                        <TabsTrigger value="Commercials" className="data-[state=active]:bg-transparent data-[state=active]:text-[#FFE812] data-[state=active]:border-b-2 data-[state=active]:border-[#FFE812] rounded-none border-b-2 border-white/50 md:text-lg">
                            Commercials
                        </TabsTrigger>
                        <TabsTrigger value="Music Videos" className="data-[state=active]:bg-transparent data-[state=active]:text-[#FFE812] data-[state=active]:border-b-2 data-[state=active]:border-[#FFE812] rounded-none border-b-2 border-white/50 md:text-lg">
                            Music Videos
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="Weddings"><WeddingsElement /></TabsContent>
                    <TabsContent value="Commercials"><CommercialsElement /></TabsContent>
                    <TabsContent value="Music Videos"><MusicVideosElement /></TabsContent>
                    {/* <TabsList className="bg-transparent text-white/50">
                    <TabsTrigger value="Weddings" className="data-[state=active]:bg-transparent data-[state=active]:text-[#FFD504] data-[state=active]:border-b-2 data-[state=active]:border-[#FFD504] rounded-none border-b-2 border-white/50 text-lg">
                        Weddings
                    </TabsTrigger>
                    <TabsTrigger value="Commercials" className="data-[state=active]:bg-transparent data-[state=active]:text-[#FFD504] data-[state=active]:border-b-2 data-[state=active]:border-[#FFD504] rounded-none border-b-2 border-white/50 text-lg">
                        Commercials
                    </TabsTrigger>
                    <TabsTrigger value="Music Videos" className="data-[state=active]:bg-transparent data-[state=active]:text-[#FFD504] data-[state=active]:border-b-2 data-[state=active]:border-[#FFD504] rounded-none border-b-2 border-white/50 text-lg">
                        Music Videos
                    </TabsTrigger>
                </TabsList> */}
                </Tabs>
            </div>
            {/* <Form /> */}
        </div>
    );
}

export default Categories;

const WeddingsElement = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end end']
    })
    const containerProgress = scrollYProgress
    const [hasWindow, setHasWindow] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
    }, []);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center pt-10 relative">
            {weddings.map((element, key) => {
                return (
                    <div key={key} className="w-full">
                        {/* <Link href={element.link}>
                            <div className="relative w-fit h-fit rounded-3xl overflow-hidden">
                                <Image priority placeholder="blur" key={key} src={element.image} alt="wedding image" className=" h-[60vh] object-cover" />
                            </div>
                        </Link> */}
                        <iframe src={element.link} allowFullScreen allowTransparency loading="eager" referrerPolicy="strict-origin-when-cross-origin" className="w-[100%] h-[100%] outline-none border-none aspect-video rounded-xl" frameBorder={0}>
                        </iframe>
                        <script src="https://player.vimeo.com/api/player.js"></script>
                    </div>
                )
            })}
        </div>
    );
}

const CommercialsElement = () => {
    return (
        <div className="flex flex-col gap-10 justify-center items-center pt-10 relative">
            {commercials.map((element, key) => {
                return (
                    <div className="relative w-fit h-fit rounded-3xl overflow-hidden">
                        <Image priority placeholder="blur" key={key} src={element.image} alt="wedding image" className=" h-[60vh] object-cover object-center" />
                        <div className="absolute bottom-0 flex lg:flex-row flex-col w-full justify-end lg:justify-between px-5 bg-gradient-to-t from-[#191416] to-transparent h-[25%] lg:items-end py-5">
                            <p className="xl:text-xl text-lg font-bold">
                                {element.title}
                            </p>
                            <p className="xl:text-lg">
                                {element.industry}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

const MusicVideosElement = () => {
    return (
        <div className="flex flex-col gap-10 justify-center items-center pt-10 relative">
            {musicVideos.map((element, key) => {
                return (
                    <div className="relative w-fit h-fit rounded-3xl overflow-hidden">
                        <Image priority placeholder="blur" key={key} src={element.image} alt="wedding image" className=" h-[50vh] object-cover" />
                        <div className="absolute bottom-0 flex lg:flex-row flex-col w-full justify-end lg:justify-between px-5 bg-gradient-to-t from-[#191416] to-transparent h-[50%] lg:items-end py-5">
                            <p className="xl:text-xl text-lg font-bold">
                                {element.songName}
                            </p>
                            <p className="xl:text-lg">
                                {element.artists}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}