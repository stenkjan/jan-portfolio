import BlobImage from "@/components/ui/BlobImage";

/**
 * Zwei ausführliche Projekte, danach eine kompakte Liste.
 *
 * Hoam House ist ein Auftraggeber mit zwei getrennten Vorhaben: die Website mit
 * dem Konfigurator, die das Modulkonzept erklärt und das Haus an Endkunden wie
 * an Gewerbe verkauft — und das Buchungssystem, das Verwaltung und Vermietung
 * automatisiert. Sie teilen sich die Marke, sonst nichts. Auf der Seite muss
 * dieser Unterschied sichtbar sein, sonst liest es sich wie ein einziges,
 * doppelt aufgeführtes Projekt.
 *
 * Betriebszahlen des Auftraggebers — Umsätze, Belegung, Provisionen — stehen
 * hier grundsätzlich nicht. Genannt sind nur Zahlen zum System selbst.
 */

type Projekt = {
  id: string;
  titel: string;
  auftraggeber?: string;
  rolle: string;
  zeitraum: string;
  aufgabe: string;
  beschreibung: string;
  loesung: string[];
  technik: string[];
  kennzahlen?: { wert: string; label: string }[];
  hinweis?: string;
  images?: string[];
  links?: { label: string; url: string }[];
};

const leitprojekte: Projekt[] = [
  {
    id: "buchungssystem",
    titel: "Buchungs- und Vermietungsautomatisierung",
    auftraggeber: "Hoam House · Nebenprojekt zur Website",
    rolle: "Alleinentwickler, agentengestützt",
    zeitraum: "Mai bis September 2026 · im produktiven Betrieb",
    aufgabe:
      "Verwaltung und Vermietung automatisieren, ohne die Preishoheit abzugeben.",
    beschreibung:
      "Ein eigenständiges System neben der Verkaufsseite: Es verwaltet die Objekte und steuert die Vermietung. Gäste buchen direkt — Verfügbarkeit, Preisberechnung, Zahlung über Stripe, Bestätigung und Rechnung mit eigener Nummernreihe. Parallel laufen Airbnb, Booking.com, Vrbo und Beds24 auf demselben Kalender; eine Doppelbuchung ist durch den Aufbau ausgeschlossen, nicht durch Nachkontrolle. Preisregeln kommen aus der Tabelle des Betreibers und werden täglich abgeglichen. Ein Sprachmodell schlägt Preise und Belegung vor — freigegeben wird von Hand, nie automatisch.",
    loesung: [
      "Buchungsstrecke mit Verfügbarkeit, Preis, Zahlung und Rechnung",
      "Kalenderabgleich über vier Vertriebskanäle",
      "Doppelbuchung durch Sperren im Datenmodell ausgeschlossen",
      "Preisvorschläge mit vorgeschaltetem Freigabe-Workflow",
      "Zeitgesteuerte Läufe mit Überwachung und Protokoll",
    ],
    technik: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL (Neon)",
      "Stripe",
      "Beds24",
      "Google Sheets/Drive API",
      "Vercel",
      "GitHub Actions",
    ],
    kennzahlen: [
      { wert: "83.000", label: "Zeilen TypeScript" },
      { wert: "1.326", label: "automatisierte Tests" },
      { wert: "44", label: "API-Endpunkte" },
      { wert: "41", label: "Datenmodelle" },
      { wert: "16", label: "zeitgesteuerte Läufe" },
      { wert: "180", label: "Fachdokumente" },
    ],
    hinweis:
      "Zahlen zum System, Stand September 2026. Betriebszahlen des Auftraggebers — Umsätze, Belegung, Provisionen — stehen hier nicht.",
    links: [{ label: "hoam-house.com", url: "https://hoam-house.com" }],
  },
  {
    id: "hoam-house-website",
    titel: "Hoam House — Website und Hauskonfigurator",
    auftraggeber: "Hoam House",
    rolle: "Alleinentwickler",
    zeitraum: "2025 bis 2026",
    aufgabe:
      "Ein Modulkonzept erklären und das Haus an Private wie an Gewerbe verkaufen.",
    beschreibung:
      "Der Verkaufsauftritt des Hauses. Ein Modulkonzept lässt sich in einem Prospekt schlecht erklären, deshalb steht ein Konfigurator im Mittelpunkt: Wer ein Haus zusammenstellt, sieht bei jeder Auswahl sofort, wie sich Darstellung und Preis ändern — ohne Neuladen, ohne Zwischenschritt. Die Seite bedient zwei Zielgruppen gleichzeitig: private Interessenten, die sich ein Haus vorstellen wollen, und gewerbliche Abnehmer, die Stückzahlen und Konditionen prüfen.",
    loesung: [
      "Konfigurator mit sofortiger Rückmeldung auf jede Auswahl",
      "Preisberechnung je Modulkombination",
      "Konzept- und Modellseiten für den Verkauf an Private und Gewerbe",
      "Auf dem Telefon genauso benutzbar wie am Rechner",
    ],
    technik: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Prisma",
      "PostgreSQL",
    ],
    images: [
      "da-hoam_konfigurator",
      "da-hoam_landingpage",
      "da-hoam_konzeptcheck",
      "da-hoam_warumwir",
    ],
    links: [
      { label: "Live ansehen", url: "https://nest-haus.vercel.app" },
      { label: "Quellcode", url: "https://github.com/stenkjan/nest-haus" },
    ],
  },
];

const weitere = [
  {
    id: "produktdatenbank",
    titel: "Produktdatenbank",
    zusammenfassung:
      "Verwaltung von Produkten und Konfigurationen mit Administrationsbereich, Suche und Rechten je Benutzerrolle. Der Aufbau war von Anfang an darauf ausgelegt, dass ein anderes Team daran weiterarbeitet.",
    technik: ["React", "Node.js", "Express", "PostgreSQL", "Material-UI"],
    links: [
      {
        label: "Live ansehen",
        url: "https://produktdatenbank-298f60a21e50.herokuapp.com",
      },
      { label: "Quellcode", url: "https://github.com/stenkjan/ks-database" },
    ],
  },
  {
    id: "veranstaltungen",
    titel: "Anmeldeseiten für Veranstaltungen",
    zusammenfassung:
      "Drei Anmeldeseiten für Organisationen ohne eigene IT: Formular, Teilnehmerliste, Link zum Weitergeben. Mehr war nicht gefragt, und genau das war die Anforderung.",
    technik: ["Next.js", "React", "TypeScript", "Netlify"],
    links: [
      { label: "Eule-Grngr", url: "https://github.com/stenkjan/eule-grngr" },
      { label: "NTGL-Events", url: "https://github.com/stenkjan/ntgl-events" },
      { label: "Eule-Event", url: "https://github.com/stenkjan/eule_event" },
    ],
  },
  {
    id: "mobile",
    titel: "Mobile Anwendungen",
    zusammenfassung:
      "Android und iOS aus einer gemeinsamen Codebasis. Darunter eine App aus dem Umfeld meiner Masterarbeit zur Begleitung von Long-Covid-Betroffenen, mit Erfassung und Auswertung von Verlaufsdaten.",
    technik: ["Flutter", "Dart"],
    links: [
      { label: "COVID-App", url: "https://github.com/stenkjan/covidapp" },
      {
        label: "Fuesse und Fusspflege CW",
        url: "https://github.com/stenkjan/fuesse_und_fusspflege_cw",
      },
    ],
  },
];

/**
 * Sichtbarkeit und Abstand liegen in der Komponente, nicht am Aufrufort.
 * Sonst bleibt bei leerer Liste der Aussenabstand als Loch stehen.
 */
function Technikzeile({ eintraege }: { eintraege?: string[] }) {
  if (!eintraege?.length) return null;
  return <p className="mt-3 text-sm text-tinte-still">{eintraege.join(" · ")}</p>;
}

function Projektlinks({
  links,
}: {
  links?: { label: string; url: string }[];
}) {
  if (!links?.length) return null;
  return (
    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="textlink text-[0.9375rem]"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

/**
 * Das Zahlenraster. Die Leerpruefung sitzt wie bei Projektlinks in der
 * Komponente, damit der Aufrufort sie nicht falsch schreiben kann — ein leeres
 * Array ist truthy und haette sonst eine Ueberschrift ueber einer leeren
 * Haarlinie ergeben.
 *
 * `odd:` trifft das erste, dritte, fuenfte Kind und ersetzt damit die
 * Index-Rechnung. Label und Wert stehen je einmal im DOM: `flex-col-reverse`
 * dreht die Lesereihenfolge (dt vor dd) in die gewuenschte Darstellung
 * (Wert ueber Label), ohne den Text fuer Screenreader zu verdoppeln.
 */
function Kennzahlen({
  eintraege,
  hinweis,
}: {
  eintraege?: { wert: string; label: string }[];
  hinweis?: string;
}) {
  if (!eintraege?.length) return null;
  return (
    <div>
      <h4 className="marke mb-5">Größenordnung</h4>
      <dl className="grid grid-cols-2 border-t border-linie">
        {eintraege.map((kennzahl) => (
          <div
            key={kennzahl.label}
            className="flex flex-col-reverse gap-2 border-b border-linie py-5 odd:border-r odd:border-linie odd:pr-5 even:pl-5"
          >
            <dt className="text-[0.8125rem] leading-snug text-tinte-leise">
              {kennzahl.label}
            </dt>
            <dd className="schrift-serif text-3xl leading-none text-tinte">
              {kennzahl.wert}
            </dd>
          </div>
        ))}
      </dl>
      {hinweis && (
        <p className="mt-5 text-[0.8125rem] leading-relaxed text-tinte-still">
          {hinweis}
        </p>
      )}
    </div>
  );
}

function Projektbilder({
  prefixe,
  titel,
}: {
  prefixe?: string[];
  titel: string;
}) {
  if (!prefixe?.length) return null;
  return (
    <div className="space-y-4">
      {prefixe.map((prefix, index) => (
        <div
          key={prefix}
          className="overflow-hidden border border-linie bg-papier-rein"
        >
          <BlobImage
            prefix={prefix}
            alt={`${titel} — Ansicht ${index + 1}`}
            className="w-full"
          />
        </div>
      ))}
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projekte"
      className="border-t border-linie py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="marke mb-6">Arbeit</p>
        <h2 className="schrift-serif text-3xl sm:text-4xl leading-snug text-tinte max-w-2xl text-balance">
          Zwei Systeme für denselben Auftraggeber, mit zwei verschiedenen
          Aufgaben.
        </h2>
        <p className="mt-6 max-w-[58ch] leading-relaxed text-tinte-leise">
          Für Hoam House sind zwei getrennte Vorhaben entstanden: die Website,
          die das Modulkonzept erklärt und das Haus verkauft — und das
          Buchungssystem, das Verwaltung und Vermietung automatisiert. Sie
          teilen sich die Marke, sonst nichts.
        </p>

        <div className="mt-16 space-y-20 sm:space-y-24">
          {leitprojekte.map((projekt) => (
            <article
              key={projekt.id}
              id={projekt.id}
              className="border-t border-linie-stark pt-10"
            >
              <div className="grid lg:grid-cols-12 gap-x-14 gap-y-10">
                <div className="lg:col-span-7">
                  {projekt.auftraggeber && (
                    <p className="marke mb-4">{projekt.auftraggeber}</p>
                  )}
                  <h3 className="schrift-serif text-2xl sm:text-[1.75rem] leading-snug text-tinte">
                    {projekt.titel}
                  </h3>
                  <p className="mt-2 text-sm text-tinte-still">
                    {projekt.rolle} · {projekt.zeitraum}
                  </p>

                  <p className="schrift-serif-kursiv mt-6 text-lg leading-relaxed text-tinte">
                    {projekt.aufgabe}
                  </p>

                  <p className="mt-5 leading-relaxed text-tinte-leise">
                    {projekt.beschreibung}
                  </p>

                  <h4 className="marke mt-10 mb-4">Was entstanden ist</h4>
                  <ul className="space-y-2.5">
                    {projekt.loesung.map((punkt) => (
                      <li key={punkt} className="flex gap-4">
                        <span
                          aria-hidden
                          className="mt-[0.7em] h-px w-4 flex-shrink-0 bg-akzent"
                        />
                        <span className="text-[0.9375rem] leading-relaxed text-tinte">
                          {punkt}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="marke mt-10">Technik</h4>
                  <Technikzeile eintraege={projekt.technik} />
                  <Projektlinks links={projekt.links} />
                </div>

                <div className="lg:col-span-5">
                  <Kennzahlen
                    eintraege={projekt.kennzahlen}
                    hinweis={projekt.hinweis}
                  />
                  <Projektbilder
                    prefixe={projekt.images}
                    titel={projekt.titel}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Weitere Arbeiten, kompakt */}
        <div className="mt-24">
          <h3 className="marke mb-8">Weitere Arbeiten</h3>
          <div className="border-t border-linie-stark">
            {weitere.map((projekt) => (
              <article
                key={projekt.id}
                className="grid gap-x-12 gap-y-4 border-b border-linie py-8 sm:grid-cols-12"
              >
                <div className="sm:col-span-4">
                  <h4 className="schrift-serif text-xl text-tinte">
                    {projekt.titel}
                  </h4>
                  <Technikzeile eintraege={projekt.technik} />
                </div>
                <div className="sm:col-span-8">
                  <p className="leading-relaxed text-tinte-leise">
                    {projekt.zusammenfassung}
                  </p>
                  <Projektlinks links={projekt.links} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
