import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import ActiveSectionContextProvider from "@/context/ActiveSectionContextProvider";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/ThemeSwitch";
import Lenis from "@studio-freight/lenis/types";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zain | Portfolio",
  description:
    "Full-stack web development portfolio featuring clean design, reliable architecture, and seamless frontend–backend integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`pt-28 sm:pt-36 bgGrid text-black ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header></Header>
            {children}
            <Footer></Footer>
            <Toaster position="top-right" />
            <ThemeSwitch></ThemeSwitch>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
