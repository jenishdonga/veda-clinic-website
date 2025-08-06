
import Contact from "@/components/Front/Contact";
import Doctors from "@/components/Front/Doctors";
import Footer from "@/components/Front/Footer";
import Header from "@/components/Front/Header";
import Hero from "@/components/Front/Hero";
import Services from "@/components/Front/Services";
import { getAllArrayData } from "@/lib/edge-config";
// import type { Metadata, ResolvingMetadata } from "next";



// type Props = {
//   params: Promise<{ id: string }>
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>
// }


// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {

//   const siteConfig = await getSiteConfig();
  
//   return {
//     title: siteConfig.seo.title,
//     description: siteConfig.seo.description,
//     keywords: siteConfig.seo.keywords,
//     openGraph: {
//       title: siteConfig.seo.title,
//       description: siteConfig.seo.description,
//       url: siteConfig.seo.url,
//       images: [...siteConfig.seo.image]
//     },
//   };
// }

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
