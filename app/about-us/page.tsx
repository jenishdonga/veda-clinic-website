import Doctors from "@/components/Front/Doctors";
import Footer from "@/components/Front/Footer";
import Header from "@/components/Front/Header";
import { getAllStaticData } from "@/lib/staticData";
import { siteConfig } from "@/lib/site";
import { Metadata } from "next";

export const metadata :Metadata = {
    title:`About Us - ${siteConfig.name} – Doctors in Ahmedabad`,
    description:`Discover our story, mission, and team of specialists at ${siteConfig.name}. We provide expert multispeciality care for families in Ahmedabad.`,
    keywords:["veda clinic ahmedabad", "about veda clinic", "multispeciality clinic ahmedabad", "experienced doctors in ahmedabad", "best ent clinic", "general phisician doctor south bopal"]
}

export default  function About() {
    const allArrayData =  getAllStaticData();
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <Doctors doctors={allArrayData.doctors} />
            <Footer services={allArrayData.services}/>
        </div>
    );
}