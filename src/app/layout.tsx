import type { Metadata } from "next";
import { Inter, Roboto_Mono, Great_Vibes } from "next/font/google";
import "./globals.css";
import CursorFollower from "@/components/CursorFollower";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-signature",
});

export const metadata: Metadata = {
  title: "Atta-ul-Bari | Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in MERN stack. I build modern, responsive web applications with React, Next.js, Node.js, and MongoDB.",
  authors: [{ name: "Atta-ul-Bari" }],
  keywords: [
    "Atta-ul-Bari",
    "Full-Stack Developer",
    "MERN Stack",
    "Portfolio",
    "Web Developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoMono.variable} ${greatVibes.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-bg text-text antialiased overflow-x-hidden">
        <CursorFollower />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
