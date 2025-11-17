import type { Metadata } from "next";
import { Geist, Geist_Mono, Merienda, Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";

const notoserif = Noto_Sans({
  variable: "--font-notoserif",
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
  title: "Nitesh Chaudhari",
  description: "Portfolio App",
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
        <Navbar/>
        {children}
      </body>
    </html>
  );
} 
