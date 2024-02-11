'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import localFont from "next/font/local";
import weddings from './data/weddings'
import commercials from './data/commercials'
import musicVideos from './data/musciVideos'
import Image from "next/image";
import { usePortfolioState } from "@/hooks/portfolio-state";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const headingFont = localFont({src : '../../../public/Fonts/Nirvana-Font/NIRVANA.woff2'})

const subheadingFont = localFont({src : '../../../public/Fonts/Satoshi-Font/Satoshi-Variable.woff2'})

const Categories = () => {
    const portfolioState = usePortfolioState()
    return (
        <div className="min-h-screen flex flex-col py-40 px-10 md:px-32 gap-20">
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
    const {scrollYProgress} = useScroll({
        target : containerRef,
        offset: ['start end', 'end end']
    })
    const containerProgress = scrollYProgress
    return (
        // <div ref={containerRef} className="flex flex-col gap-10 justify-center items-center">
        //     {weddings.map((element, key) => {
        //         const imageRef = useRef<HTMLImageElement>(null)
        //         const containerScale = useTransform(containerProgress, [(key/weddings.length),1], [1,(1 - (weddings.length - key)*0.05)])
        //         const {scrollYProgress} = useScroll({
        //             target : imageRef,
        //             offset : ['start end', 'end end']
        //         })
        //         const imageScale = useTransform(scrollYProgress, [0,1], [1.5,1])
        //         return (
        //             <div  ref={imageRef} style={{top: `calc(${key}*30px)`}} className="h-screen flex flex-col items-center justify-center sticky">
        //                 <motion.div style={{scale : containerScale}} className="h-[80%] w-[100%] overflow-hidden rounded-3xl">
        //                     <motion.div style={{scale : imageScale}} className="h-full w-full">
        //                         <Image  priority placeholder='blur' key={key} src={element.image} alt="wedding image" className=" object-cover h-full w-full" />
        //                     </motion.div>
        //                 </motion.div>
        //             </div>
        //         )
        //     })}
        // </div>
        <div className="flex flex-col gap-10 justify-center items-center pt-10 relative">
            {weddings.map((element, key) => {
                return (
                    <div className="relative w-fit h-fit rounded-3xl overflow-hidden">
                        <Image priority placeholder="blur" key={key} src={element.image} alt="wedding image" className=" h-[50vh] object-cover" />
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
                        <Image priority placeholder="blur" key={key} src={element.image} alt="wedding image" className=" h-[50vh] object-cover object-center" />
                        <div className="absolute bottom-0 flex lg:flex-row flex-col w-full justify-end lg:justify-between px-10 bg-gradient-to-t from-[#191416]/90 to-transparent h-[50%] lg:items-end py-5">
                            <p className="text-xl font-bold">
                                Title
                            </p>
                            <p className="text-lg">
                                Artist
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
                        <div className="absolute bottom-0 flex lg:flex-row flex-col w-full justify-end lg:justify-between px-10 bg-gradient-to-t from-[#191416]/90 to-transparent h-[50%] lg:items-end py-5">
                            <p className="text-xl font-bold">
                                Title
                            </p>
                            <p className="text-lg">
                                Industry
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}