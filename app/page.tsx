
import Contact from "@/components/Front/Contact";
import Doctors from "@/components/Front/Doctors";
import Footer from "@/components/Front/Footer";
import Header from "@/components/Front/Header";
import Hero from "@/components/Front/Hero";
import Services from "@/components/Front/Services";
import { getAllStaticData } from "@/lib/staticData";


export default function Home() {
  const allArrayData = getAllStaticData();
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
