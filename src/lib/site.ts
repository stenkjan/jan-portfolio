/**
 * Zentrale Stammdaten der Seite.
 *
 * Eine Änderung hier zieht Kontaktkarte, Formular, Fußzeile, Impressum und
 * strukturierte Daten mit. Kontaktdaten bestätigt von Jan am 10.09.2026.
 */

export const SITE_URL = "https://jan-stenk-portfolio.vercel.app";

export const CONTACT = {
  email: "m.janstenk@gmail.com",
  phone: "+43 660 5649683",
  phoneHref: "tel:+436605649683",
  location: "Graz, Österreich",
  locationNote: "Arbeit remote und ortsunabhängig",
} as const;

export const SOCIAL = {
  github: "https://github.com/stenkjan",
  linkedin: "https://www.linkedin.com/in/jan-stenk-46b820147/",
} as const;

/**
 * Konditionen. Angepasst von Jan am 14.09.2026.
 *
 * Der Tagessatz ist der Ausgangswert; Stunde und Halbtag liegen bewusst leicht
 * darüber, damit ein gebuchter Tag günstiger ist als derselbe Umfang in
 * Einzelstunden. 250 / 8 = 31,25 €, aufgerundet auf 35 €.
 *
 * ACHTUNG: Die frühere Fassung vom 10.09.2026 nannte 60 €/Stunde und 250 € für
 * den HALBTAG. Die Werte hier sind die neueren und lösen jene ab.
 */
export const RATES = {
  hourly: "35 €",
  halfDay: "140 €",
  dayRate: "250 €",
  availability: "Ab Anfang Oktober 2026",
  capacity: "25 Stunden pro Woche",
  /**
   * Die Sätze sind Einstiegssätze und ab 01.01.2027 auf 60 €/Stunde angehoben
   * (entschieden 14.09.2026). Die Befristung steht hier ausdrücklich auf der
   * Seite: Ein Satz, der unbefristet veröffentlicht ist, lässt sich gegenüber
   * Bestandskunden später kaum heben.
   * TODO: Ab 01.01.2027 hourly auf 60 € setzen und dayRate/halfDay nach
   * derselben Logik neu ableiten (Tag ~430 €, Halbtag ~240 €).
   */
  entryNote: "Einstiegssätze für Beauftragungen bis Ende 2026.",
} as const;

/** Wie die Zusammenarbeit organisatorisch läuft. */
export const ZUSAMMENARBEIT = {
  vertrag: "Werkvertrag oder Dienstleistungsvertrag, Einzelunternehmen",
  ust: "Kleinunternehmer nach § 6 Abs 1 Z 27 UStG — Rechnungen ohne Umsatzsteuer",
  arbeitsweise: "Remote, Zeitzone Mitteleuropa, Abstimmung auf Deutsch oder Englisch",
} as const;

/** Lebenslauf als PDF, liegt unter public/. */
export const LEBENSLAUF = {
  href: "/Lebenslauf_Stenk_Jan.pdf",
  label: "Lebenslauf als PDF",
} as const;

/** Angaben für Impressum und Datenschutzerklärung. */
export const IMPRESSUM = {
  name: "Jan Andre Stenk, MSc",
  strasse: "Grazbachgasse 53/6/39",
  ort: "8010 Graz",
  land: "Österreich",
  gewerbe: [
    "Erstellung von Trainingskonzepten (freies Gewerbe, GISA 37502447)",
    "Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik (freies Gewerbe, GISA 38129728)",
  ],
  behoerde: "Magistrat Graz",
  kammer: "Wirtschaftskammer Steiermark",
  // Umsatzsteuer: Kleinunternehmer nach § 6 Abs 1 Z 27 UStG.
  // KEINE UID angeben — sie ist seit 01.08.2026 begrenzt.
} as const;

/**
 * Porträtfoto. Bleibt `src` leer, wird der Bildbereich gar nicht gerendert —
 * ein leerer Rahmen sieht schlechter aus als kein Bild.
 * TODO: Foto unter public/ ablegen und den Pfad hier eintragen.
 */
export const PORTRAIT = {
  src: "",
  alt: "Jan Stenk",
} as const;
