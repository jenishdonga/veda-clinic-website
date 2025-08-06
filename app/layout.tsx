import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MyWrapper } from "@/lib/edge-config-context";
import { getSiteConfig } from "@/lib/edge-config";
import type { Metadata, ResolvingMetadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});




export const metadata: Metadata = {
  title: 'Veda Multispeciality Clinic - Expert Medical Care in South Bopal, Ahmedabad',
  description: 'Veda Multi Speciality Clinic offers expert medical care with trusted specialists including ENT surgeons , orthopaedics, cardiologists, and more. Led by Dr. Bela Donga and Dr. Radhika Patoriya.',
  keywords: [
    "Ent doctor near south bopal",
    "doctor near me",
    "clinic near me",
    "Hospital near south bopal",
    "Ent surgeon in south bopal, shela",
    "Dr Bela Donga",
    "Dr Radhika Patoriya"
  ],
  openGraph: {
    title: "Veda Multispeciality Clinic - Expert Medical Care in South Bopal, Ahmedabad",
    description: "Veda Multi Speciality Clinic offers expert medical care with trusted specialists including ENT surgeons , orthopaedics, cardiologists, and more. Led by Dr. Bela Donga and Dr. Radhika Patoriya.",
    url: "https://veda-clinic-website.vercel.app",
    images: [
      {
        "url": "https://veda-clinic-website.vercel.app/b4dac46e-f71a-442e-be96-f7a841eaaf16.png",
        "height": 416,
        "width": 1022,
        "alt": "Veda Multispeciality Clinic South Bopal Ahmedabad"
      }
    ]
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteConfig = await getSiteConfig();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        <MyWrapper siteConfig={siteConfig}>
          {children}
        </MyWrapper>
      </body>
    </html>
  );
}
