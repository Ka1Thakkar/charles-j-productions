import Footer from "@/components/Footer";
import Navbar from "../_components/Navbar";
import PeopleSay from "./_components/PeopleSay";
import CommercialClients from "./_components/CommercialClients";
import MusicVideoClients from "./_components/MusicVideoClients";

const Testimonials = () => {
    return (
        <main className="">
            <Navbar />
            <PeopleSay />
            <CommercialClients />
            <MusicVideoClients />
            <Footer />
        </main>
    );
}
 
export default Testimonials;