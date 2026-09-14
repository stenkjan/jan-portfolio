import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CONTACT, LEBENSLAUF, RATES } from "@/lib/site";

/**
 * Der Einstieg bleibt bewusst ruhig: eine Aussage, ein Absatz, zwei Wege
 * weiter. Kennzahlen stehen nicht hier, sondern bei dem Projekt, aus dem sie
 * stammen — eine Zahl ohne ihren Zusammenhang ist eine Behauptung.
 */
const schwerpunkte = [
  {
    titel: "Automatisierung mit Freigabe",
    text: "Wiederkehrende Arbeit läuft selbsttätig. An jeder Stelle, an der Geld oder Außenwirkung im Spiel ist, entscheidet ein Mensch.",
  },
  {
    titel: "Web-Anwendungen im Betrieb",
    text: "Von der ersten Zeile bis zur laufenden Anwendung: Datenmodell, Schnittstellen, Zahlungen, Überwachung.",
  },
  {
    titel: "Übergabefähig gebaut",
    text: "Dokumentation, Tests und festgehaltene Entscheidungen gehören zum Auftrag — nicht zu einem späteren Angebot.",
  },
];

export default function HeroSection() {
  const statusZeilen = [
    CONTACT.location,
    "Remote",
    RATES.availability,
  ].filter(Boolean);

  return (
    <section id="start" className="pt-36 pb-20 sm:pt-44 sm:pb-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="marke mb-8">Softwareentwickler &amp; Automatisierung</p>

        <h1 className="schrift-serif text-[2.75rem] leading-[1.08] sm:text-6xl sm:leading-[1.06] font-normal text-tinte max-w-3xl text-balance">
          Ich baue Systeme, die ohne mich weiterlaufen.
        </h1>

        <p className="mt-8 max-w-[58ch] text-lg leading-relaxed text-tinte-leise">
          Auftragsentwicklung für Agenturen, Softwarehäuser und Betriebe, die
          eine Anwendung nicht nur gebaut, sondern auch betrieben brauchen.
          Schwerpunkt: Abläufe automatisieren, ohne dass die Entscheidung an die
          Maschine übergeht.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link
            href="#projekte"
            className="group inline-flex items-center gap-2 bg-akzent px-6 py-3 text-[0.9375rem] font-medium text-white rounded-sm hover:bg-akzent-hell transition-colors"
          >
            <span>Arbeit ansehen</span>
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              strokeWidth={1.75}
            />
          </Link>
          <a
            href={LEBENSLAUF.href}
            target="_blank"
            rel="noopener noreferrer"
            className="textlink text-[0.9375rem]"
          >
            {LEBENSLAUF.label}
          </a>
          <Link href="#konditionen" className="textlink text-[0.9375rem]">
            Konditionen und Verfügbarkeit
          </Link>
        </div>

        {statusZeilen.length > 0 && (
          <p className="mt-10 text-sm text-tinte-still">
            {statusZeilen.join(" · ")}
          </p>
        )}

        {/* Schwerpunkte: drei Spalten, getrennt durch Haarlinien statt Kästen. */}
        <div className="mt-20 sm:mt-24 border-t border-linie">
          <div className="grid sm:grid-cols-3">
            {schwerpunkte.map((schwerpunkt, index) => (
              <div
                key={schwerpunkt.titel}
                className={`py-8 sm:py-10 sm:pr-10 ${
                  index > 0
                    ? "border-t border-linie sm:border-t-0 sm:border-l sm:border-linie sm:pl-10 sm:pr-0 lg:pr-10"
                    : ""
                }`}
              >
                <h2 className="schrift-serif text-xl text-tinte mb-3">
                  {schwerpunkt.titel}
                </h2>
                <p className="text-[0.9375rem] leading-relaxed text-tinte-leise">
                  {schwerpunkt.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
