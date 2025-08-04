import Contact from "@/components/Front/Contact";
import Doctors from "@/components/Front/Doctors";
import Footer from "@/components/Front/Footer";
import Header from "@/components/Front/Header";
import Hero from "@/components/Front/Hero";
import Services from "@/components/Front/Services";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header/>
      <Hero/>
      <Services/>
      <Doctors/>
      <Contact/>
      <Footer/>
    </div>
  );
}
