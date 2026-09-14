import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RATES, ZUSAMMENARBEIT, CONTACT } from "@/lib/site";

/**
 * Was eine Agentur oder ein Softwarehaus vor dem ersten Gespräch wissen will:
 * Satz, Verfügbarkeit, Vertragsform — und wofür ich nicht der Richtige bin.
 *
 * Leere Felder werden ausgeblendet statt gefüllt. Stundensatz und Halbtag sind
 * bestätigt; Tagessatz, Starttermin und Kapazität stehen in site.ts noch offen.
 */
const passt = [
  "Auftragsentwicklung über mehrere Wochen oder Monate, remote",
  "Bestehende Anwendung übernehmen, erweitern, in Betrieb halten",
  "Integrationen und Automatisierung zwischen Systemen, die nicht miteinander reden",
  "Next.js, TypeScript, PostgreSQL — dort bin ich am schnellsten produktiv",
  "Projekte, bei denen Dokumentation und Übergabe mitgedacht werden sollen",
];

const passtNicht = [
  "Aufträge mit Anwesenheitspflicht vor Ort außerhalb von Graz",
  "Gestaltung ohne Umsetzung — ich entwerfe nicht als eigene Leistung",
  "Native Entwicklung in Swift oder Kotlin; mobil arbeite ich mit Flutter",
  "Modelltraining und Data Science; ich baue um Modelle herum, nicht an ihnen",
];

export default function KonditionenSection() {
  /**
   * Der Tagessatz steht oben: Er ist der Ausgangswert, aus dem sich die beiden
   * anderen ableiten, und die Größe, in der Agenturen kalkulieren.
   */
  const saetze = [
    { label: "Tagessatz", wert: RATES.dayRate },
    { label: "Halbtag", wert: RATES.halfDay },
    { label: "Stundensatz", wert: RATES.hourly },
    { label: "Verfügbar ab", wert: RATES.availability },
    { label: "Kapazität", wert: RATES.capacity },
  ].filter((eintrag) => eintrag.wert);

  return (
    <section
      id="konditionen"
      className="scroll-mt-24 border-t border-linie bg-papier-tief py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="marke mb-6">Konditionen</p>
        <h2 className="schrift-serif text-3xl sm:text-4xl text-tinte max-w-2xl text-balance">
          Was eine Zusammenarbeit kostet und wann sie beginnen kann.
        </h2>
        <p className="mt-6 max-w-[58ch] text-tinte-leise leading-relaxed">
          Alle Beträge netto. Der Umfang wird vor Beginn schriftlich
          festgehalten — auch bei kleinen Aufträgen, weil sich sonst im
          Nachhinein nicht klären lässt, was vereinbart war.
        </p>

        <div className="mt-14 grid lg:grid-cols-2 gap-x-16 gap-y-12">
          {/* Sätze und Verfügbarkeit */}
          <div>
            <h3 className="marke mb-6">Sätze und Verfügbarkeit</h3>
            <dl className="border-t border-linie-stark">
              {saetze.map((eintrag) => (
                <div
                  key={eintrag.label}
                  className="flex items-baseline justify-between gap-6 border-b border-linie py-4"
                >
                  <dt className="text-tinte-leise">{eintrag.label}</dt>
                  <dd className="schrift-serif text-xl text-tinte text-right">
                    {eintrag.wert}
                  </dd>
                </div>
              ))}
              <div className="flex items-baseline justify-between gap-6 border-b border-linie py-4">
                <dt className="text-tinte-leise">Arbeitsort</dt>
                <dd className="text-right text-tinte">
                  {CONTACT.location}, Arbeit remote
                </dd>
              </div>
            </dl>

            <h3 className="marke mt-12 mb-6">Rahmen</h3>
            <ul className="space-y-4">
              {Object.values(ZUSAMMENARBEIT).map((punkt) => (
                <li
                  key={punkt}
                  className="text-[0.9375rem] leading-relaxed text-tinte-leise"
                >
                  {punkt}
                </li>
              ))}
            </ul>
          </div>

          {/* Abgrenzung */}
          <div>
            <h3 className="marke mb-6">Wofür ich passe</h3>
            <ul className="space-y-3">
              {passt.map((punkt) => (
                <li key={punkt} className="flex gap-4">
                  <span
                    aria-hidden
                    className="mt-[0.6em] h-px w-4 flex-shrink-0 bg-akzent"
                  />
                  <span className="text-[0.9375rem] leading-relaxed text-tinte">
                    {punkt}
                  </span>
                </li>
              ))}
            </ul>

            <h3 className="marke mt-12 mb-6">Wofür nicht</h3>
            <ul className="space-y-3">
              {passtNicht.map((punkt) => (
                <li key={punkt} className="flex gap-4">
                  <span
                    aria-hidden
                    className="mt-[0.6em] h-px w-4 flex-shrink-0 bg-linie-stark"
                  />
                  <span className="text-[0.9375rem] leading-relaxed text-tinte-still">
                    {punkt}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-sm leading-relaxed text-tinte-still">
              Eine Absage kostet weniger als ein Auftrag, der beiden Seiten
              nicht passt. Wenn Ihr Vorhaben zwischen den Listen liegt, sagen
              Sie es — dann klären wir das im Gespräch.
            </p>

            <Link
              href="#kontakt"
              className="group mt-8 inline-flex items-center gap-2 bg-akzent px-6 py-3 text-[0.9375rem] font-medium text-white rounded-sm hover:bg-akzent-hell transition-colors"
            >
              <span>Vorhaben schildern</span>
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                strokeWidth={1.75}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
