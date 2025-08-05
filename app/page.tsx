import Contact from "@/components/Front/Contact";
import Doctors from "@/components/Front/Doctors";
import Footer from "@/components/Front/Footer";
import Header from "@/components/Front/Header";
import Hero from "@/components/Front/Hero";
import Services from "@/components/Front/Services";
import { getAllArrayData } from "@/lib/edge-config";

export default async function Home() {
  const allArrayData = await getAllArrayData();
  return (
    <div className="min-h-screen">
      <Header/>
      <Hero/>
      <Services services={allArrayData.services}/>
      <Doctors doctors={allArrayData.doctors}/>
      <Contact areas={allArrayData.areas}/>
      <Footer services={allArrayData.services}/>
    </div>
  );
}
