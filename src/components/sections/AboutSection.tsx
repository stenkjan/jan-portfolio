import Image from "next/image";
import { PORTRAIT } from "@/lib/site";

/**
 * Arbeitsweise statt Lebenslauf-Prosa.
 *
 * Die frühere Fassung nannte hier eine Erhebung ("vier von fünf Unternehmen
 * führen KI-Agenten ein, eines von zehn betreibt sie produktiv") ohne Quelle —
 * direkt neben dem Grundsatz, dass jede Zahl eine Quelle hat. Der Widerspruch
 * fällt genau den Lesern auf, die man überzeugen will. Bis eine belastbare
 * Quelle vorliegt, steht die Aussage hier ohne Zahlen.
 */
const prinzipien = [
  {
    titel: "Freigabe statt Automatik",
    text: "Überall dort, wo Geld oder Außenwirkung im Spiel ist, schlägt das System vor und ein Mensch entscheidet. Ein Vorschlag, der stillschweigend ausgeführt wird, ist kein Komfort, sondern ein Fehler.",
  },
  {
    titel: "Fehler baulich ausschließen",
    text: "Im Buchungssystem ist eine Doppelbuchung nicht deshalb ausgeschlossen, weil jemand nachkontrolliert, sondern weil das Datenmodell sie nicht zulässt. Das ist mehr Arbeit beim Bauen und deutlich weniger im Betrieb.",
  },
  {
    titel: "Gemessen statt zugesagt",
    text: "Jede Zahl, die ich nenne, hat eine Quelle. Was ungeprüft ist, sage ich als ungeprüft an — auch dann, wenn die geprüfte Fassung unbequemer ist.",
  },
  {
    titel: "Übergabe gehört zum Auftrag",
    text: "Dokumentation, Tests und festgehaltene Entscheidungen sind Teil der Leistung, nicht eines späteren Angebots. Ein Projekt ist fertig, wenn ein anderes Team es weiterführen kann.",
  },
];

const technik = [
  {
    bereich: "Web",
    eintraege: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    bereich: "Daten",
    eintraege: ["PostgreSQL", "Prisma", "Neon", "Node.js"],
  },
  {
    bereich: "Betrieb",
    eintraege: [
      "Vercel",
      "GitHub Actions",
      "zeitgesteuerte Läufe",
      "Überwachung",
    ],
  },
  {
    bereich: "Anbindungen",
    eintraege: [
      "Stripe",
      "Google Sheets/Drive",
      "Beds24",
      "Kalender von Airbnb, Booking.com und Vrbo",
    ],
  },
  {
    bereich: "Mobil",
    eintraege: ["Flutter", "Dart"],
  },
];

export default function AboutSection() {
  return (
    <section
      id="arbeitsweise"
      className="scroll-mt-24 border-t border-linie py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="marke mb-6">Arbeitsweise</p>

        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="schrift-serif text-3xl sm:text-4xl leading-snug text-tinte text-balance">
              Der schwierige Teil ist nicht das Bauen, sondern der Betrieb.
            </h2>

            <div className="mt-8 space-y-5 leading-relaxed text-tinte-leise">
              <p>
                Meine Arbeit beginnt selten bei einer leeren Datei. Meistens
                gibt es einen Ablauf, der funktioniert, aber Zeit frisst: Preise
                pflegen, Kalender abgleichen, Anfragen beantworten, Belege
                einsortieren. Ich baue das System, das diesen Ablauf übernimmt —
                und die Stelle mit ein, an der ein Mensch Ja oder Nein sagt.
              </p>
              <p>
                Ein Prototyp, der eine Aufgabe einmal löst, ist in wenigen Tagen
                fertig. Was Zeit kostet, ist alles danach: Freigaben,
                Nachvollziehbarkeit, Fehlerfälle, Überwachung, Übergabe. Daran
                habe ich beim Buchungssystem vier Monate gearbeitet, und genau
                das bringe ich in ein Projekt mit.
              </p>
              <p>
                Das Referenzprojekt ist agentengestützt entstanden: KI-Agenten
                schreiben Code und schlagen Entscheidungen vor, ich prüfe und
                gebe frei. Dieselbe Trennung steckt im ausgelieferten System.
              </p>
            </div>
          </div>

          {PORTRAIT.src && (
            <div className="lg:col-span-5">
              <div className="overflow-hidden border border-linie bg-papier-rein">
                <Image
                  src={PORTRAIT.src}
                  alt={PORTRAIT.alt}
                  width={640}
                  height={800}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 32rem, 100vw"
                />
              </div>
            </div>
          )}
        </div>

        <div className="mt-20 grid gap-x-14 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h3 className="marke mb-8">Grundsätze</h3>
            <div className="border-t border-linie">
              {prinzipien.map((prinzip) => (
                <div key={prinzip.titel} className="border-b border-linie py-6">
                  <h4 className="schrift-serif text-lg text-tinte">
                    {prinzip.titel}
                  </h4>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-tinte-leise">
                    {prinzip.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <h3 className="marke mb-8">Womit ich arbeite</h3>
            <dl className="border-t border-linie">
              {technik.map((gruppe) => (
                <div key={gruppe.bereich} className="border-b border-linie py-5">
                  <dt className="text-[0.8125rem] font-medium uppercase tracking-wide text-tinte-still">
                    {gruppe.bereich}
                  </dt>
                  <dd className="mt-2 text-[0.9375rem] leading-relaxed text-tinte">
                    {gruppe.eintraege.join(" · ")}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-[0.8125rem] leading-relaxed text-tinte-still">
              Aufgeführt ist, was in den Projekten auf dieser Seite tatsächlich
              im Einsatz ist — nicht, was ich einmal ausprobiert habe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
