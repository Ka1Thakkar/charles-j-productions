'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import localFont from "next/font/local";
import weddings from './data/weddings'
import commercials from './data/commercials'
import musicVideos from './data/musciVideos'
import Image from "next/image";
import { usePortfolioState } from "@/hooks/portfolio-state";

const headingFont = localFont({src : '../../../public/Fonts/Nirvana-Font/NIRVANA.woff2'})

const subheadingFont = localFont({src : '../../../public/Fonts/Satoshi-Font/Satoshi-Variable.woff2'})

const Categories = () => {
    const portfolioState = usePortfolioState()
    return (
        <div className="min-h-screen flex flex-col py-40 px-10 md:px-32 gap-20">
            <h1 className={headingFont.className + " uppercase text-8xl text-[#FFD504] font-medium"}>
                Portfolio
            </h1>
            <div className={subheadingFont.className + " text-[#FFD504]"}>
            <Tabs defaultValue='Weddings' className="w-full">
                <TabsList className="bg-transparent text-white/50">
                    <TabsTrigger value="Weddings" className="data-[state=active]:bg-transparent data-[state=active]:text-[#FFD504] data-[state=active]:border-b-2 data-[state=active]:border-[#FFD504] rounded-none border-b-2 border-white/50 text-lg">
                        Weddings
                    </TabsTrigger>
                    <TabsTrigger value="Commercials" className="data-[state=active]:bg-transparent data-[state=active]:text-[#FFD504] data-[state=active]:border-b-2 data-[state=active]:border-[#FFD504] rounded-none border-b-2 border-white/50 text-lg">
                        Commercials
                    </TabsTrigger>
                    <TabsTrigger value="Music Videos" className="data-[state=active]:bg-transparent data-[state=active]:text-[#FFD504] data-[state=active]:border-b-2 data-[state=active]:border-[#FFD504] rounded-none border-b-2 border-white/50 text-lg">
                        Music Videos
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="Weddings"><WeddingsElement /></TabsContent>
                <TabsContent value="Commercials"><CommercialsElement /></TabsContent>
                <TabsContent value="Music Videos"><MusicVideosElement /></TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
 
export default Categories;

const WeddingsElement = () => {
    return (
        <div className="flex flex-col gap-10 justify-center items-center pt-10">
            {weddings.map((element, key) => {
                return (
                    <Image key={key} src={element.image} alt="wedding image" />
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
                        <Image key={key} src={element.image} alt="wedding image" className="" />
                        <div className="absolute bottom-0 flex w-full justify-between px-10 bg-gradient-to-t from-[#191416]/90 to-transparent py-5">
                            <p className="text-xl font-bold">
                                Title
                            </p>
                            <p className="text-xl font-bold">
                                Industry
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
                        <Image key={key} src={element.image} alt="wedding image" className="" />
                        <div className="absolute bottom-0 flex w-full justify-between px-10 bg-gradient-to-t from-[#191416]/90 to-transparent py-5">
                            <p className="text-xl font-bold">
                                Title
                            </p>
                            <p className="text-xl font-bold">
                                Industry
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}