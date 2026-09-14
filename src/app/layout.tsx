import type { Metadata } from "next";
import { Geist, Newsreader } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/ui/StructuredData";
import { SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

/**
 * Serifenschrift für Überschriften. Die Palette der Seite ist fast farblos —
 * den Charakter muss die Typografie tragen, nicht ein bunter Akzent.
 */
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

/**
 * Die Kursive steht auf genau zwei Zeilen (die Aufgabenzeile der beiden
 * Leitprojekte), ist aber die größte der Schriftdateien. Deshalb ein eigenes
 * Objekt mit `preload: false`: Sie lädt nach, statt den kritischen Pfad zu
 * blockieren.
 */
const newsreaderKursiv = Newsreader({
  variable: "--font-newsreader-kursiv",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  preload: false,
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
        className={`${geistSans.variable} ${newsreader.variable} ${newsreaderKursiv.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
