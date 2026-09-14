import { CONTACT, SITE_URL, SOCIAL } from "@/lib/site";

/**
 * Strukturierte Daten für Suchmaschinen.
 *
 * Bewusst OHNE Preisangaben: Die Sätze auf der Seite sind Ausgangswerte, und
 * ein Ausgangswert lässt sich nicht als exakter Preis auszeichnen, ohne eine
 * Zusage zu machen, die so nicht gemeint ist.
 *
 * Ausgezeichnet sind Leistungen, keine Festpreis-Pakete — die Seite richtet
 * sich an Firmen und Agenturen, die Auftragsentwicklung vergeben.
 */
export default function StructuredData() {
  const strukturierteDaten = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jan Stenk",
    jobTitle: "Softwareentwickler",
    description:
      "Softwareentwickler mit Schwerpunkt Automatisierung. Auftragsentwicklung für Agenturen, Softwarehäuser und Betriebe — Web-Anwendungen und automatisierte Abläufe, bei denen die Freigabe beim Menschen bleibt.",
    url: SITE_URL,
    email: `mailto:${CONTACT.email}`,
    telephone: CONTACT.phone,
    sameAs: [SOCIAL.github, SOCIAL.linkedin],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Stripe",
      "Flutter",
      "Prozessautomatisierung",
      "KI-Agenten im produktiven Betrieb",
      "Buchungs- und Kanalsysteme",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Softwareentwickler",
      occupationLocation: {
        "@type": "Country",
        name: "Österreich",
      },
      skills: [
        "Entwicklung von Web-Anwendungen",
        "Automatisierung mit Freigabe-Workflow",
        "Anbindung externer Systeme und Schnittstellen",
        "Betrieb und Überwachung laufender Systeme",
      ],
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Auftragsentwicklung",
          description:
            "Entwicklung von Web-Anwendungen über mehrere Wochen oder Monate, remote, mit Dokumentation und Übergabe.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Übernahme bestehender Systeme",
          description:
            "Eine vorhandene Anwendung übernehmen, erweitern und im Betrieb halten.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Automatisierung und Integration",
          description:
            "Abläufe zwischen Systemen automatisieren, mit menschlicher Freigabe und nachvollziehbarer Spur.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(strukturierteDaten) }}
    />
  );
}
