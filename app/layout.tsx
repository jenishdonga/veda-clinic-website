import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { get } from "@vercel/edge-config";
import { MyWrapper } from "@/lib/edge-config-context";
import { getSiteConfig } from "@/lib/edge-config";
import type { Metadata } from "next";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export async function generateMetadata(): Promise<Metadata> {
  const siteConfig = await getSiteConfig();

  return {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    keywords: siteConfig.seo.keywords,
    openGraph: {
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
      url: siteConfig.seo.url,
      images: [...siteConfig.seo.image]
    },
  };
}


// export const metadata: Metadata = {
//   title: 'Veda Multispeciality Clinic - Expert Medical Care in South Bopal, Ahmedabad',
//   description: 'Veda Multi Speciality Clinic offers expert medical care with trusted specialists including ENT surgeons , orthopaedics, cardiologists, and more. Led by Dr. Bela Donga and Dr. Radhika Patoriya.',
//   keywords: [
//     "Ent doctor near south bopal",
//     "doctor near me",
//     "clinic near me",
//     "Hospital near south bopal",
//     "Ent surgeon in south bopal, shela",
//     "Dr Bela Donga",
//     "Dr Radhika Patoriya"
//   ],
//   // icons:{
//   //   icon: [
//   //     { url: "/ic/favicon-32x32.png", sizes: "32x32", type: "image/png" },
//   //     { url: "/ic/favicon-16x16.png", sizes: "16x16", type: "image/png" },
//   //   ],
//   //   apple: [
//   //     { url: "/ic/apple-icon-180x180.png", sizes: "180x180" },
//   //     { url: "/ic/apple-icon-152x152.png", sizes: "152x152" },
//   //   ],
//   // },

//   openGraph: {
//     title: "Veda Multispeciality Clinic - Expert Medical Care in South Bopal, Ahmedabad",
//     description: "Veda Multi Speciality Clinic offers expert medical care with trusted specialists including ENT surgeons , orthopaedics, cardiologists, and more. Led by Dr. Bela Donga and Dr. Radhika Patoriya.",
//     url: "",
//     images: [
//       {
//         url: "https://yourwebsite.com/images/clinic.jpg",
//         width: 800,
//         height: 600,
//         alt: "Veda Multispeciality Clinic South Bopal Ahmedabad"
//       }
//     ]
//   }
// };

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
