import { JotFormEmbed } from "jotform-react";
import localFont from "next/font/local";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const headingFont = localFont({ src: '../../../public/Fonts/Nirvana-Font/NIRVANA.woff2' })

const subheadingFont = localFont({ src: '../../../public/Fonts/Satoshi-Font/Satoshi-Variable.woff2' })

const Form = () => {
    return (
        <div className="md:px-32 px-5 relative py-40 text-[#FFE812]">
            <div className="pb-20">
                <h1 className={headingFont.className + " text-8xl font-medium"}>Get an Estimated Quote</h1>
            </div>
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
                <TabsContent value="Weddings">
                    <JotFormEmbed formURL={'https://form.jotform.com/233176911017149'} autoResize={true} />
                </TabsContent>
                <TabsContent value="Commercials">
                    <JotFormEmbed formURL={'https://form.jotform.com/233176911017149'} autoResize={true} />
                </TabsContent>
                <TabsContent value="Music Videos">
                    <JotFormEmbed formURL={'https://form.jotform.com/233176911017149'} autoResize={true} />
                </TabsContent>
            </Tabs>
        </div>
    );
}

export default Form;