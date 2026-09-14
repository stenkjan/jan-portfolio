import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/ui/StructuredData";
import { SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Serifenschrift für Überschriften. Die Palette der Seite ist fast farblos —
 * den Charakter muss die Typografie tragen, nicht ein bunter Akzent.
 */
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const beschreibung =
  "Softwareentwickler mit Schwerpunkt Automatisierung. Ich baue Web-Anwendungen und automatisierte Abläufe, bei denen die Freigabe beim Menschen bleibt — und übergebe sie so, dass ein anderes Team sie weiterführen kann. Verfügbar für Auftragsentwicklung, remote.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Jan Stenk – Softwareentwickler & Automatisierung",
  description: beschreibung,
  keywords: [
    "Softwareentwickler Automatisierung",
    "Freelance Entwickler Österreich",
    "Next.js Entwickler",
    "TypeScript Entwickler",
    "Auftragsentwicklung remote",
    "Prozessautomatisierung mit Freigabe",
    "KI-Agenten produktiv betreiben",
    "Buchungssystem Entwicklung",
    "Full-Stack Entwickler Graz",
    "Entwickler für Agenturen",
  ],
  authors: [{ name: "Jan Stenk" }],
  creator: "Jan Stenk",
  publisher: "Jan Stenk",
  alternates: {
    canonical: "/",
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
    locale: "de_AT",
    url: SITE_URL,
    title: "Jan Stenk – Softwareentwickler & Automatisierung",
    description: beschreibung,
    siteName: "Jan Stenk",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jan Stenk – Softwareentwickler & Automatisierung",
    description: beschreibung,
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
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
