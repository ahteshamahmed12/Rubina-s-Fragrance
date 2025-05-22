import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Topheader from "./Component/Topheader";
import Header from "./Component/Header";
import Headers from "./Component/Headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  
  title: "Rubina's Fragrance",
  description:"Your destination for premium fragrances authentic, curated and unforgettable .Shop with confidence.Small extraordinary.!",
  keywords: ["perfume", "fragrance", "Rubina", "buy perfume online", "luxury scent"],

   icons: {
    icon: '/icon-v2.ico', 
  },
  openGraph:{
    title: "Rubina's Fragrance",
    description:"Premium perfumes for every mood. Shop now.",
    url:"https://rubinafragrance.com" ,
    images: [
      {
        url: "/og-image.jpg", // put this in /public
        width: 1200,
        height: 630,
        alt: "Rubina's Fragrance Banner",
      },
    ],
  }
  
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Topheader/>
        <Headers/>
        <Header/>
        {children}
      </body>
    </html>
  );
}
