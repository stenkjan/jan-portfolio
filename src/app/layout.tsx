import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/ui/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jan Stenk - React & Next.js Developer | Full-Stack TypeScript Expert",
  description:
    "Experienced React web app developer, Next.js specialist, and Flutter developer. Expert in TypeScript, full-stack development with modern tools. Creating scalable web solutions and mobile applications.",
  keywords: [
    "React web app developer",
    "Next.js developer",
    "Flutter developer",
    "Full stack developer",
    "TypeScript developer",
    "Web development",
    "Mobile app development",
    "Frontend developer",
    "Backend developer",
  ],
  authors: [{ name: "Jan Stenk" }],
  creator: "Jan Stenk",
  publisher: "Jan Stenk",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jan-stenk-portfolio.vercel.app",
    title: "Jan Stenk - React & Next.js Developer",
    description:
      "Expert React web app developer and Next.js specialist. Creating modern, scalable web solutions with TypeScript.",
    siteName: "Jan Stenk Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jan Stenk - React & Next.js Developer",
    description:
      "Expert React web app developer and Next.js specialist. Creating modern, scalable web solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

