import Contact from "@/components/Front/Contact";
import Footer from "@/components/Front/Footer";
import Header from "@/components/Front/Header";
import { getAllArrayData } from "@/lib/edge-config";
import { siteConfig } from "@/lib/site";
import { Metadata } from "next";

export const metadata : Metadata = {
    title:`Contact Us - ${siteConfig.name} – Support, Feedback & Queries`,
    description:`Have questions about ${siteConfig.name}? Contact our support team for help with appointments, app issues, or health-related queries.`
} 

export default async function About() {
 const allArrayData = await getAllArrayData();
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <Contact areas={allArrayData.areas}/>
            <Footer services={allArrayData.services}/>
        </div>
    );
}