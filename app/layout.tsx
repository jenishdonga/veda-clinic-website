import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

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
  description: 'Veda Multi Speciality Clinic offers expert medical care with trusted specialists including ENT surgeons, MD physicians, orthopaedics, cardiologists, and more. Led by Dr. Bela Donga and Dr. Radhika Patoriya.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="57x57" href="/ic/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/ic/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/ic/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/ic/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/ic/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/ic/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/ic/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/ic/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/ic/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/ic/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/ic/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/ic/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/ic/favicon-16x16.png" />
        <link rel="manifest" href="/ic/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ic/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
