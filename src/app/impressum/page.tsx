import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT, IMPRESSUM, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Offenlegung nach § 5 E-Commerce-Gesetz und § 25 Mediengesetz.",
  alternates: { canonical: `${SITE_URL}/impressum` },
  robots: { index: true, follow: true },
};

function Zeile({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1 py-4 sm:grid-cols-[13rem_1fr] sm:gap-6 border-b border-linie last:border-0">
      <dt className="text-sm font-medium text-tinte-still">{label}</dt>
      <dd className="text-tinte">{children}</dd>
    </div>
  );
}

export default function ImpressumSeite() {
  return (
    <main className="min-h-screen bg-papier-rein">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <Link
          href="/"
          className="text-sm text-tinte-still hover:text-tinte transition-colors"
        >
          ← Zurück zur Startseite
        </Link>

        <h1 className="mt-8 text-3xl sm:text-4xl font-bold tracking-tight text-tinte">
          Impressum
        </h1>
        <p className="mt-3 text-tinte-leise">
          Offenlegung nach § 5 E-Commerce-Gesetz (ECG) und § 25 Mediengesetz.
        </p>

        <dl className="mt-10">
          <Zeile label="Medieninhaber und Herausgeber">
            {IMPRESSUM.name}
          </Zeile>

          <Zeile label="Anschrift">
            {IMPRESSUM.strasse}
            <br />
            {IMPRESSUM.ort}
            <br />
            {IMPRESSUM.land}
          </Zeile>

          <Zeile label="Kontakt">
            <a
              href={CONTACT.emailHref}
              className="textlink"
            >
              {CONTACT.email}
            </a>
            <br />
            <a href={CONTACT.phoneHref} className="textlink">
              {CONTACT.phone}
            </a>
          </Zeile>

          <Zeile label="Unternehmensgegenstand">
            <ul className="space-y-1">
              {IMPRESSUM.gewerbe.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </Zeile>

          <Zeile label="Gewerbebehörde">{IMPRESSUM.behoerde}</Zeile>

          <Zeile label="Kammerzugehörigkeit">
            {IMPRESSUM.kammer}, Fachgruppen entsprechend den oben genannten
            Gewerben
          </Zeile>

          <Zeile label="Anwendbare Rechtsvorschrift">
            Gewerbeordnung 1994, abrufbar im Rechtsinformationssystem des Bundes:{" "}
            <a
              href="https://www.ris.bka.gv.at"
              target="_blank"
              rel="noopener noreferrer"
              className="textlink"
            >
              ris.bka.gv.at
            </a>
          </Zeile>

          <Zeile label="Umsatzsteuer">
            Kleinunternehmer gemäß § 6 Abs 1 Z 27 UStG. Rechnungen werden ohne
            Ausweis von Umsatzsteuer gestellt.
          </Zeile>

          <Zeile label="Aufsichtsbehörde">
            Magistrat Graz, Referat für Gewerbeangelegenheiten
          </Zeile>

          <Zeile label="Verbraucherstreitbeilegung">
            Ich bin weder verpflichtet noch bereit, an einem
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </Zeile>
        </dl>

        <section className="mt-14 space-y-8 text-tinte leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-tinte">
              Offenlegung nach § 25 Mediengesetz
            </h2>
            <p className="mt-3">
              Diese Website dient der Darstellung des eigenen Leistungsangebots
              und der eigenen Arbeiten sowie der Kontaktaufnahme mit
              Interessentinnen und Interessenten. Sie enthält keine
              redaktionellen Inhalte Dritter und keine bezahlte Werbung.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-tinte">
              Haftung für Inhalte
            </h2>
            <p className="mt-3">
              Die Inhalte dieser Website werden mit Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität kann jedoch keine
              Gewähr übernommen werden. Angaben zu Preisen und Leistungen sind
              unverbindlich und stellen kein Angebot im rechtlichen Sinn dar; ein
              Vertrag kommt erst durch eine gesonderte schriftliche Vereinbarung
              zustande.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-tinte">
              Haftung für Links
            </h2>
            <p className="mt-3">
              Diese Website enthält Verweise auf externe Websites. Auf deren
              Inhalte habe ich keinen Einfluss; für sie ist ausschließlich der
              jeweilige Anbieter verantwortlich. Zum Zeitpunkt der Verlinkung
              waren keine rechtswidrigen Inhalte erkennbar. Wird mir eine
              Rechtsverletzung bekannt, entferne ich den betreffenden Verweis.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-tinte">Urheberrecht</h2>
            <p className="mt-3">
              Die auf dieser Website veröffentlichten Inhalte, Texte und
              Abbildungen unterliegen dem Urheberrecht. Abbildungen aus
              Kundenprojekten werden mit Zustimmung des jeweiligen Auftraggebers
              gezeigt. Eine Verwendung außerhalb der gesetzlich zulässigen Fälle
              bedarf der vorherigen Zustimmung.
            </p>
          </div>
        </section>

        <p className="mt-14 text-sm text-tinte-still">
          Zum Datenschutz siehe die{" "}
          <Link href="/datenschutz" className="textlink">
            Datenschutzerklärung
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
