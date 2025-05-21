import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { title } from "process";

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
  description: "Rubina's Fragrance store .",
   keywords:"perfume , Rubina , Ecommerce",
   icons: {
    icon: '/icon-v2.ico', 
  },
  openGraph:{
    title: "Rubina's Fragrance",
    description: "Rubina's Fragrance store .",
    images:[],
    url:"https://RubinaFragrance.com" ,
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
        {children}
      </body>
    </html>
  );
}
