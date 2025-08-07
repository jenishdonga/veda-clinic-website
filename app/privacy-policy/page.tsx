import Header from "@/components/Front/Header";
import Footer from "@/components/Front/Footer";
import { siteConfig } from "@/lib/site";
import { Metadata } from "next";
import { getAllStaticData } from "@/lib/staticData";
import PrivacyPolicy from "@/components/Front/PrivacyPolicy";

export const metadata: Metadata = {
  title: `Privacy Policy - ${siteConfig.name} `,
  description: `Understand how ${siteConfig.name} collects and uses your data.`,
};

const PrivacyPolicyPage =  () => {
  const AllArrayData =  getAllStaticData();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PrivacyPolicy/>
      <Footer services={AllArrayData.services}/>
    </div>
  );
};

export default PrivacyPolicyPage;