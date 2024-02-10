'use client'

import localFont from "next/font/local";
import Image from "next/image";
import clients from './data/clients'
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const headingFont = localFont({src : '../../../public/Fonts/Nirvana-Font/NIRVANA.woff2'})

const subheadingFont = localFont({src : '../../../public/Fonts/Satoshi-Font/Satoshi-Variable.woff2'})

const PeopleSay = () => {
    return (
        <div className={subheadingFont.className + " flex flex-col justify-center gap-20 md:px-32 px-10 text-[#FFD504] pt-40"}>
            <h1 className={headingFont.className + " text-8xl font-medium"}>
                What People Say
            </h1>
            <Carousel className="px-2">
                <CarouselContent>
                    {clients.map((client, key) => {
                        return (
                            <CarouselItem className="flex flex-col xl:flex-row xl:justify-center justify-start items-center xl:items-center gap-10 xl:basis-1/2">
                                <div className="relative w-fit overflow-hidden rounded-3xl">
                                    <Image priority src={client.image} alt="client image" className=" h-[50vh] object-cover object-top" />
                                    {/* <div className="absolute w-full h-full bg-[#FFD504]/10 top-0" /> */}
                                </div>
                                <div className="xl:w-6/12">
                                    <p className="text-3xl font-bold pb-10">
                                        {client.name}
                                    </p>
                                    <p className="text-lg font-light text-white">
                                        {client.description}
                                    </p>
                                    <p className="text-xl font-medium pt-10">
                                        Services
                                    </p>
                                    <ul className=" list-disc list-inside text-white text-lg font-light">
                                        {client.services.map((service, key) => {
                                            return (
                                                <li>
                                                    {service}
                                                </li>
                                            )
                                        })}
                                    </ul>
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
 
export default PeopleSay;