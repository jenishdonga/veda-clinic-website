import Contact from "@/components/Front/Contact";
import Footer from "@/components/Front/Footer";
import Header from "@/components/Front/Header";
import { getAllStaticData } from "@/lib/staticData";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";

export const metadata : Metadata = {
    title:`Contact Us - ${siteConfig.name} – Support, Feedback & Queries`,
    description:`Have questions about ${siteConfig.name}? Contact our support team for help with appointments, app issues, or health-related queries.`
} 

export default function Page() {
 const allArrayData = getAllStaticData();
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <Contact areas={allArrayData.areas}/>
            <Footer services={allArrayData.services}/>
        </div>
    );
}