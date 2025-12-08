import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DotGrid from "@/components/DotGrid";

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
        <div
          style={{
            width: "100%",
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -1
          }}
        >
          <DotGrid
            dotSize={2}
            gap={12}
            baseColor="#271e37aa"
            activeColor="#512CE4"
            proximity={120}
            shockRadius={250}
            shockStrength={10}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        {children}
      </body>
    </html>
  );
}
