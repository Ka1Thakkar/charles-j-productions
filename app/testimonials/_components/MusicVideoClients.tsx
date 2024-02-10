import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import commercialClients from './data/commercialClients'
import localFont from "next/font/local";

const headingFont = localFont({src : '../../../public/Fonts/Nirvana-Font/NIRVANA.woff2'})

const subheadingFont = localFont({src : '../../../public/Fonts/Satoshi-Font/Satoshi-Variable.woff2'})

const MusicVideoClients = () => {
    return (
        <div className="lg:px-32 md:px-16 px-10 flex flex-col xl:flex-row-reverse text-[#FFD504] gap-20 items-center pt-40">
            <div className="xl:w-5/12">
                <h1 className={headingFont.className + " text-8xl font-medium"}>
                    Music Video Clients
                </h1>
            </div>
            <Carousel className="px-2 xl:w-7/12">
                <CarouselContent>
                    {commercialClients.map((client, key) => {
                        return (
                            <CarouselItem className=" pl-5 pr-5 md:basis-1/2 flex flex-col items-center justify-center">
                                <div className="relative w-fit overflow-hidden rounded-3xl">
                                    <Image priority src={client.image} alt="client image" className=" h-[50vh] object-cover object-top" />
                                    <div className="absolute w-full h-full bg-[#FFD504]/20 top-0" />
                                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                                        <Image priority src={client.logo} alt="client logo" className=" w-[150px] h-[150px] object-cover" />
                                    </div>
                                </div>
                            </CarouselItem>
                        )
                    })}
                </CarouselContent>
                <CarouselPrevious className="bg-transparent md:-left-12 -left-8" />
                <CarouselNext className="bg-transparent md:-right-12 -right-8" />
            </Carousel>
        </div>
    );
}
 
export default MusicVideoClients;