import type { Metadata } from "next";
import { Geist, Geist_Mono, Merienda, Noto_Sans, Unbounded } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ClientLayoutWrapper from "./Components/ClientLayoutWrapper";
import { GoogleAnalytics } from "./Components/GoogleAnalytics";

const notoserif = Noto_Sans({
  variable: "--font-notoserif",
  subsets: ["latin"],
  display: "swap",
});


const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  display: "swap",
});


const merienda = Merienda({
  variable: "--font-merienda",
  subsets: ["latin"],
   display: "swap",
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nitesh Chaudhari — Portfolio",
  description: "Full-stack developer portfolio showcasing projects, blogs, and professional experience",
  icons: {
    icon: "/logos/apple-touch-icon.png",
    apple: "/logos/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoserif.variable} ${merienda.variable} `}
      >
        <GoogleAnalytics />
        <Navbar/>
        {children}
        <Footer/>
      
      </body>
    </html>
  );
} 
