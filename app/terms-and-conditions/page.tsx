import Header from "@/components/Front/Header";
import Footer from "@/components/Front/Footer";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { getAllArrayData } from "@/lib/edge-config";
import TermsConditions from "@/components/Front/TermsConditions";

export const metadata: Metadata = {
  title: `Terms and Conditions - ${siteConfig.name} `,
  description: `Read the Terms and Conditions of ${siteConfig.name}.`,
};

const TermsConditionsPage = async () => {
  const AllArrayData = await getAllArrayData();
  return (
    <div className="min-h-screen bg-background">
      <Header />
        <TermsConditions/>
      <Footer services={AllArrayData.services}/>
    </div>
  );
};

export default TermsConditionsPage;