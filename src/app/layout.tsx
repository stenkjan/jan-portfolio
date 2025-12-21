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
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "G-XXXXXXXXXX";

export const metadata: Metadata = {
  title: {
    default: "Jan Stenk - React & Next.js Developer | Full-Stack TypeScript Expert",
    template: "%s | Jan Stenk Portfolio",
  },
  description:
    "Experienced React web app developer, Next.js specialist, and Flutter developer. Expert in TypeScript, full-stack development, and AI chatbot integration. Creating modern, scalable web solutions and mobile applications.",
  keywords: [
    "React web app developer",
    "Next.js developer",
    "Next.js Entwickler",
    "React Entwickler",
    "Flutter developer",
    "Full stack developer",
    "TypeScript developer",
    "Web development",
    "Mobile app development",
    "Chatbot integration",
    "AI assistant",
    "Jan Stenk",
    "Webentwicklung Deutschland",
    "Next.js Germany",
  ],
  authors: [{ name: "Jan Stenk", url: "https://jan-stenk-portfolio.vercel.app" }],
  creator: "Jan Stenk",
  publisher: "Jan Stenk",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jan Stenk - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jan Stenk - React & Next.js Developer",
    description:
      "Expert React web app developer and Next.js specialist. Creating modern, scalable web solutions.",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://jan-stenk-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "de-DE": "/",
      "en-US": "/",
    },
  },
  verification: {
    google: "google-site-verification-code", // Add your Google Search Console verification code
  },
  category: "technology",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2563EB" },
    { media: "(prefers-color-scheme: dark)", color: "#1E40AF" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <StructuredData />
        
        {/* Google Analytics 4 */}
        {GA_MEASUREMENT_ID !== "G-XXXXXXXXXX" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: true,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <LanguageProvider>
          {children}
          <Chatbot />
        </LanguageProvider>
      </body>
    </html>
  );
}

