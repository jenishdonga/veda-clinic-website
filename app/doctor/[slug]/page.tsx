import DoctorDetails from "@/components/Front/DoctorDetails";
import { doctors, siteConfig } from "@/lib/site";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface SlugParams {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: SlugParams): Promise<Metadata> {
  const { slug } = await params
  const doctor = doctors.find(d => d.id === slug);
  if (!doctor) {
    notFound();
  }

  return {
    title: doctor.name,
    description: doctor.about,
    keywords: [...doctor.conditions],
    openGraph: {
      title: doctor.name,
      description: doctor.about,
      url: siteConfig.seo.url,
      images: [...siteConfig.seo.image]
    },
  };
}

export default async function Page({ params }: SlugParams) {
  const { slug } = await params;
  const doctor = doctors.find(d => d.id === slug);
  if (!doctor) {
    notFound();
  }
  return (
    <DoctorDetails doctor={doctor} />
  )
}