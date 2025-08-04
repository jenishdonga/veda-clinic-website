import Footer from "@/components/Front/Footer";
import Header from "@/components/Front/Header";
import Services from "@/components/Front/Services";
import { siteConfig } from "@/lib/site";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `Our Services - ${siteConfig.name} Comprehensive healthcare services in Ahmedabad`,
    description: `Explore ${siteConfig.name} services including ENT, general physician, and general medicine in south Bopal, Ahmedabad. Book appointments with expert doctors.`,
    keywords: [
        'veda multispeciality clinic ahmedabad',
        'about veda  clinic',
        'multispeciality clinic ahmedabad',
        'experienced doctors in ahmedabad',
        'best ent clinic',
        'general physician doctor south bopal'
    ],
}

export default function About() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <Services />
            <Footer />
        </div>
    );
}