import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/ui/StructuredData";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Chatbot from "@/components/ui/Chatbot";
import Script from "next/script";

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
    "Chatbot integration",
    "AI assistant",
    "Jan Stenk",
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
    locale: "de_DE",
    alternateLocale: ["en_US"],
    url: "https://jan-stenk-portfolio.vercel.app",
    title: "Jan Stenk - React & Next.js Developer | Portfolio",
    description:
      "Expert React web app developer and Next.js specialist. Creating modern, scalable web solutions with TypeScript. Specializing in chatbot integration and AI-powered websites.",
    siteName: "Jan Stenk Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jan Stenk - React & Next.js Developer",
    description:
      "Expert React web app developer and Next.js specialist. Creating modern, scalable web solutions.",
  },
  metadataBase: new URL("https://jan-stenk-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "de-DE": "/",
      "en-US": "/",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563EB" />
        <StructuredData />
        {/* Google Analytics 4 - Replace with your GA4 Measurement ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
          <Chatbot />
        </LanguageProvider>
      </body>
    </html>
  );
}

