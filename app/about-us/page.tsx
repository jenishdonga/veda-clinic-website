import Doctors from "@/components/Front/Doctors";
import Footer from "@/components/Front/Footer";
import Header from "@/components/Front/Header";
import { getAllArrayData } from "@/lib/edge-config";
import { siteConfig } from "@/lib/site";
import { Metadata } from "next";

export const metadata :Metadata = {
    title:`About Us - ${siteConfig.name} – Doctors in Ahmedabad`,
    description:`Discover our story, mission, and team of specialists at ${siteConfig.name}. We provide expert multispeciality care for families in Ahmedabad.`,
    keywords:["veda clinic ahmedabad", "about veda clinic", "multispeciality clinic ahmedabad", "experienced doctors in ahmedabad", "best ent clinic", "general phisician doctor south bopal"]
}

export default async function About() {
    const allArrayData = await getAllArrayData();
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <Doctors doctors={allArrayData.doctors} />
            <Footer services={allArrayData.services}/>
        </div>
    );
}