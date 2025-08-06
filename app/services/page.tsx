
import Footer from "@/components/Front/Footer";
import Header from "@/components/Front/Header";
import Services from "@/components/Front/Services";
import { getAllArrayData, getServices } from "@/lib/edge-config";
import { siteConfig } from "@/lib/site";
import { get } from "@vercel/edge-config";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `Our Services - ${siteConfig.name} Comprehensive healthcare services in Ahmedabad`,
    description: `Explore ${siteConfig.name} services including ENT, general physician, and general medicine in south Bopal, Ahmedabad. Book appointments with expert doctors.`,
    keywords: [
        "veda multispeciality clinic ahmedabad",
        "about veda  clinic",
        "multispeciality clinic ahmedabad",
        "experienced doctors in ahmedabad",
        "best ent clinic",
        "general physician doctor south bopal"
    ],
}

export default async function About() {
    const AllArrayData = await getAllArrayData();
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <Services services={AllArrayData.services} />
            <Footer services={AllArrayData.services}/>
        </div>
    );
}