import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Derek Oware | Senior Full-Stack Developer",
  description:
    "Senior Full-Stack Developer specializing in React, Next.js, and Node.js. Building elegant solutions with modern web technologies.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Development"
  ],
  authors: [{ name: "Derek Oware" }],
  openGraph: {
    title: "Derek Oware | Senior Full-Stack Developer",
    description:
      "Senior Full-Stack Developer specializing in React, Next.js, and Node.js",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-black dark:text-white`}
      >
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
