"use client";

import { useState } from "react";
import { CONTACT, SOCIAL, RATES } from "@/lib/site";

const anliegen = [
  "Auftragsentwicklung für ein neues Vorhaben",
  "Bestehendes System übernehmen oder erweitern",
  "Automatisierung und Integration zwischen Systemen",
  "Unverbindliche Einschätzung zu einem Vorhaben",
  "Etwas anderes",
];

const zeitrahmen = [
  "So bald wie möglich",
  "In den nächsten Wochen",
  "In den nächsten Monaten",
  "Noch offen",
];

const leeresFormular = {
  name: "",
  email: "",
  unternehmen: "",
  anliegen: "",
  zeitrahmen: "",
  nachricht: "",
};

export default function ContactSection() {
  const [formular, setFormular] = useState(leeresFormular);
  const [uebergeben, setUebergeben] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormular((prev) => ({ ...prev, [name]: value }));
    setUebergeben(false);
  };

  /**
   * Die Seite hat keinen Server, der Anfragen entgegennimmt. Statt eine
   * Übermittlung vorzutäuschen, wird das E-Mail-Programm mit fertigem Text
   * geöffnet — so geht keine Anfrage still verloren.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const betreff = formular.anliegen
      ? `Anfrage über die Webseite: ${formular.anliegen}`
      : "Anfrage über die Webseite";

    const zeilen = [
      `Name: ${formular.name}`,
      `E-Mail: ${formular.email}`,
      formular.unternehmen ? `Unternehmen: ${formular.unternehmen}` : null,
      formular.anliegen ? `Anliegen: ${formular.anliegen}` : null,
      formular.zeitrahmen ? `Zeitrahmen: ${formular.zeitrahmen}` : null,
      "",
      formular.nachricht,
    ].filter((zeile) => zeile !== null);

    const mailto =
      CONTACT.emailHref +
      `?subject=${encodeURIComponent(betreff)}` +
      `&body=${encodeURIComponent(zeilen.join("\n"))}`;

    window.location.href = mailto;
    setUebergeben(true);
  };

  /** Felder tragen eine Grundlinie statt eines Kastens — ruhiger im Satzbild. */
  const feld =
    "w-full border-0 border-b border-linie-stark bg-transparent px-0 py-2.5 text-tinte placeholder:text-tinte-still focus:border-akzent focus:outline-none focus:ring-0 transition-colors";
  const beschriftung = "block text-[0.8125rem] text-tinte-leise mb-1";

  return (
    <section
      id="kontakt"
      className="border-t border-linie py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="marke mb-6">Kontakt</p>
        <h2 className="schrift-serif max-w-2xl text-3xl leading-snug text-tinte text-balance sm:text-4xl">
          Schildern Sie das Vorhaben in ein paar Sätzen.
        </h2>
        <p className="mt-6 max-w-[58ch] leading-relaxed text-tinte-leise">
          Ich sage Ihnen, ob ich der Richtige dafür bin, was es ungefähr kostet
          und wie lange es dauert — auch dann, wenn die Antwort lautet, dass Sie
          dafür keine neue Software brauchen.
        </p>

        <div className="mt-14 grid gap-x-16 gap-y-12 lg:grid-cols-12">
          {/* Direkte Wege */}
          <div className="lg:col-span-4">
            <h3 className="marke mb-6">Direkt</h3>
            <dl className="border-t border-linie">
              <div className="border-b border-linie py-4">
                <dt className="text-[0.8125rem] text-tinte-still">E-Mail</dt>
                <dd className="mt-1">
                  <a
                    href={CONTACT.emailHref}
                    className="textlink break-words"
                  >
                    {CONTACT.email}
                  </a>
                </dd>
              </div>
              <div className="border-b border-linie py-4">
                <dt className="text-[0.8125rem] text-tinte-still">Telefon</dt>
                <dd className="mt-1">
                  <a href={CONTACT.phoneHref} className="textlink">
                    {CONTACT.phone}
                  </a>
                </dd>
              </div>
              <div className="border-b border-linie py-4">
                <dt className="text-[0.8125rem] text-tinte-still">Standort</dt>
                <dd className="mt-1 text-tinte">{CONTACT.location}</dd>
                <dd className="mt-0.5 text-sm text-tinte-still">
                  {CONTACT.locationNote}
                </dd>
              </div>
              <div className="border-b border-linie py-4">
                <dt className="text-[0.8125rem] text-tinte-still">Profile</dt>
                <dd className="mt-1 flex flex-wrap gap-x-5">
                  <a
                    href={SOCIAL.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="textlink"
                  >
                    GitHub
                  </a>
                  <a
                    href={SOCIAL.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="textlink"
                  >
                    LinkedIn
                  </a>
                </dd>
              </div>
              {RATES.availability && (
                <div className="border-b border-linie py-4">
                  <dt className="text-[0.8125rem] text-tinte-still">
                    Verfügbar
                  </dt>
                  <dd className="mt-1 text-tinte">{RATES.availability}</dd>
                </div>
              )}
            </dl>
            <p className="mt-5 text-[0.8125rem] leading-relaxed text-tinte-still">
              Antwort in der Regel innerhalb eines Werktags.
            </p>
          </div>

          {/* Formular */}
          <div className="lg:col-span-8">
            <h3 className="marke mb-6">Anfrage</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={beschriftung}>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formular.name}
                    onChange={handleChange}
                    className={feld}
                    placeholder="Vor- und Nachname"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={beschriftung}>
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formular.email}
                    onChange={handleChange}
                    className={feld}
                    placeholder="name@firma.at"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="unternehmen" className={beschriftung}>
                  Unternehmen
                </label>
                <input
                  type="text"
                  id="unternehmen"
                  name="unternehmen"
                  value={formular.unternehmen}
                  onChange={handleChange}
                  className={feld}
                  placeholder="Optional"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="anliegen" className={beschriftung}>
                    Anliegen
                  </label>
                  <select
                    id="anliegen"
                    name="anliegen"
                    value={formular.anliegen}
                    onChange={handleChange}
                    className={feld}
                  >
                    <option value="">Bitte wählen</option>
                    {anliegen.map((eintrag) => (
                      <option key={eintrag} value={eintrag}>
                        {eintrag}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="zeitrahmen" className={beschriftung}>
                    Zeitrahmen
                  </label>
                  <select
                    id="zeitrahmen"
                    name="zeitrahmen"
                    value={formular.zeitrahmen}
                    onChange={handleChange}
                    className={feld}
                  >
                    <option value="">Bitte wählen</option>
                    {zeitrahmen.map((eintrag) => (
                      <option key={eintrag} value={eintrag}>
                        {eintrag}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="nachricht" className={beschriftung}>
                  Worum geht es? *
                </label>
                <textarea
                  id="nachricht"
                  name="nachricht"
                  required
                  rows={6}
                  value={formular.nachricht}
                  onChange={handleChange}
                  className={`${feld} resize-none`}
                  placeholder="Was soll entstehen, und was ist schon da?"
                />
              </div>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-[42ch] text-[0.8125rem] leading-relaxed text-tinte-still">
                  * Pflichtfelder. Das Formular öffnet Ihr E-Mail-Programm mit
                  fertigem Text. Auf dieser Seite wird nichts gespeichert.
                </p>
                <button
                  type="submit"
                  className="flex-shrink-0 rounded-sm bg-akzent px-6 py-3 text-[0.9375rem] font-medium text-white transition-colors hover:bg-akzent-hell"
                >
                  Anfrage übernehmen
                </button>
              </div>

              {uebergeben && (
                <p
                  role="status"
                  className="border-l-2 border-akzent bg-akzent-lasur px-4 py-3 text-[0.9375rem] leading-relaxed text-tinte"
                >
                  Ihre Angaben wurden an Ihr E-Mail-Programm übergeben. Öffnet
                  sich kein Fenster, schreiben Sie bitte direkt an{" "}
                  <a href={CONTACT.emailHref} className="textlink">
                    {CONTACT.email}
                  </a>
                  .
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
