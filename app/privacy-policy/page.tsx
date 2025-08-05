import Header from "@/components/Front/Header";
import Footer from "@/components/Front/Footer";
import { siteConfig } from "@/lib/site";
import { Metadata } from "next";
import { getAllArrayData } from "@/lib/edge-config";
import PrivacyPolicy from "@/components/Front/PrivacyPolicy";

export const metadata: Metadata = {
  title: `Privacy Policy - ${siteConfig.name} `,
  description: `Understand how ${siteConfig.name} collects and uses your data.`,
};

const PrivacyPolicyPage = async () => {
  const AllArrayData = await getAllArrayData();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PrivacyPolicy/>
      <Footer services={AllArrayData.services}/>
    </div>
  );
};

export default PrivacyPolicyPage;