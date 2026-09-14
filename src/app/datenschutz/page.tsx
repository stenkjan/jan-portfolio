import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT, IMPRESSUM, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Welche Daten beim Besuch dieser Website verarbeitet werden — und welche nicht.",
  alternates: { canonical: `${SITE_URL}/datenschutz` },
  robots: { index: true, follow: true },
};

function Abschnitt({
  titel,
  children,
}: {
  titel: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold text-tinte">{titel}</h2>
      <div className="mt-3 space-y-3 text-tinte leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export default function DatenschutzSeite() {
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
          Datenschutzerklärung
        </h1>

        <div className="mt-6 rounded-lg border border-linie bg-papier-tief p-5">
          <p className="text-tinte font-medium">Kurz gesagt</p>
          <p className="mt-2 text-tinte leading-relaxed">
            Diese Website setzt <strong>keine Cookies</strong>, verwendet{" "}
            <strong>keine Analyse- oder Trackingwerkzeuge</strong> und bindet{" "}
            <strong>keine externen Schriftarten</strong> ein. Es gibt kein
            Kontaktformular, das Daten an einen Server sendet. Verarbeitet werden
            im Wesentlichen nur die technischen Zugriffsdaten, die beim Aufruf
            jeder Website anfallen.
          </p>
        </div>

        <Abschnitt titel="Verantwortlicher">
          <p>
            {IMPRESSUM.name}
            <br />
            {IMPRESSUM.strasse}, {IMPRESSUM.ort}, {IMPRESSUM.land}
            <br />
            <a
              href={CONTACT.emailHref}
              className="textlink"
            >
              {CONTACT.email}
            </a>
            {" · "}
            <a href={CONTACT.phoneHref} className="textlink">
              {CONTACT.phone}
            </a>
          </p>
        </Abschnitt>

        <Abschnitt titel="Zugriffsdaten beim Aufruf der Website">
          <p>
            Beim Aufruf dieser Website werden durch den Hostinganbieter
            automatisch Daten in Serverprotokollen erfasst: IP-Adresse,
            Zeitpunkt des Zugriffs, die abgerufene Datei, übertragene
            Datenmenge, Browsertyp und Betriebssystem sowie die zuvor besuchte
            Seite, sofern der Browser sie übermittelt.
          </p>
          <p>
            <strong>Zweck</strong>: sicherer und störungsfreier Betrieb der
            Website sowie Abwehr von Missbrauch.
            <br />
            <strong>Rechtsgrundlage</strong>: Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse am technischen Betrieb).
            <br />
            <strong>Speicherdauer</strong>: Diese Daten werden nicht mit anderen
            Datenquellen zusammengeführt und nach kurzer Zeit vom Anbieter
            gelöscht.
          </p>
        </Abschnitt>

        <Abschnitt titel="Hosting und Auftragsverarbeitung">
          <p>
            Diese Website wird bei <strong>Vercel Inc.</strong> (440 N Barranca
            Ave #4133, Covina, CA 91723, USA) betrieben. Vercel verarbeitet die
            oben genannten Zugriffsdaten in meinem Auftrag als Auftragsverarbeiter
            im Sinne des Art. 28 DSGVO. Bilder werden über den Speicherdienst
            desselben Anbieters ausgeliefert.
          </p>
          <p>
            Dabei kann es zu einer Übermittlung personenbezogener Daten in die
            USA kommen. Der Anbieter stützt diese Übermittlung auf die
            Standardvertragsklauseln der Europäischen Kommission und
            gegebenenfalls auf das EU-US Data Privacy Framework.
          </p>
        </Abschnitt>

        <Abschnitt titel="Keine Cookies, keine Analyse, kein Tracking">
          <p>
            Es werden keine Cookies gesetzt, die nicht für den Betrieb der Seite
            erforderlich sind — tatsächlich werden gar keine Cookies gesetzt. Es
            kommen keine Analysewerkzeuge, keine Reichweitenmessung, keine
            Werbenetzwerke und keine sozialen Erweiterungen zum Einsatz. Eine
            Einwilligungsabfrage ist deshalb nicht erforderlich.
          </p>
        </Abschnitt>

        <Abschnitt titel="Schriftarten">
          <p>
            Die verwendeten Schriftarten werden beim Erstellen der Seite
            mitgeliefert und von diesem Server ausgeliefert. Beim Besuch der
            Website wird{" "}
            <strong>keine Verbindung zu Servern von Google hergestellt</strong>.
          </p>
        </Abschnitt>

        <Abschnitt titel="Kontaktaufnahme">
          <p>
            Das Kontaktformular auf dieser Website übermittelt keine Daten an
            einen Server. Es öffnet Ihr E-Mail-Programm mit einem vorbereiteten
            Text; abgesendet wird die Nachricht ausschließlich durch Sie selbst
            und über Ihren eigenen E-Mail-Anbieter.
          </p>
          <p>
            Wenn Sie mich per E-Mail oder Telefon kontaktieren, verarbeite ich
            die übermittelten Angaben, um Ihre Anfrage zu beantworten und eine
            mögliche Zusammenarbeit vorzubereiten.
            <br />
            <strong>Rechtsgrundlage</strong>: Art. 6 Abs. 1 lit. b DSGVO
            (vorvertragliche Maßnahmen) beziehungsweise lit. f DSGVO
            (berechtigtes Interesse an der Beantwortung von Anfragen).
            <br />
            <strong>Speicherdauer</strong>: bis die Anfrage abschließend
            bearbeitet ist, darüber hinaus nur, soweit gesetzliche
            Aufbewahrungspflichten bestehen.
          </p>
        </Abschnitt>

        <Abschnitt titel="Weitergabe an Dritte">
          <p>
            Eine Weitergabe Ihrer Daten findet nicht statt, ausgenommen an den
            oben genannten Hostinganbieter im Rahmen des technischen Betriebs
            und in Fällen, in denen ich gesetzlich dazu verpflichtet bin.
          </p>
        </Abschnitt>

        <Abschnitt titel="Ihre Rechte">
          <p>
            Sie haben das Recht auf Auskunft über die zu Ihrer Person
            verarbeiteten Daten, auf Berichtigung, auf Löschung, auf
            Einschränkung der Verarbeitung, auf Datenübertragbarkeit sowie auf
            Widerspruch gegen eine Verarbeitung, die auf berechtigtem Interesse
            beruht. Wenden Sie sich dafür formlos an die oben genannte
            E-Mail-Adresse.
          </p>
          <p>
            Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen
            das Datenschutzrecht verstößt, können Sie sich bei der
            Aufsichtsbehörde beschweren:
            <br />
            <strong>Österreichische Datenschutzbehörde</strong>, Barichgasse
            40–42, 1030 Wien,{" "}
            <a
              href="mailto:dsb@dsb.gv.at"
              className="textlink"
            >
              dsb@dsb.gv.at
            </a>
            ,{" "}
            <a
              href="https://www.dsb.gv.at"
              target="_blank"
              rel="noopener noreferrer"
              className="textlink"
            >
              dsb.gv.at
            </a>
          </p>
        </Abschnitt>

        <Abschnitt titel="Änderungen">
          <p>
            Diese Erklärung wird angepasst, sobald sich die auf der Website
            eingesetzte Technik ändert — etwa wenn ein Kontaktformular mit
            Serverversand oder eine Reichweitenmessung hinzukommt.
          </p>
        </Abschnitt>

        <p className="mt-14 text-sm text-tinte-still">
          Siehe auch das{" "}
          <Link href="/impressum" className="textlink">
            Impressum
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
