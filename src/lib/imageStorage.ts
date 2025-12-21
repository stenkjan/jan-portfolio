// Image storage configuration
// Images are stored in public/images/ folder (following nest-haus pattern)
// This is the standard Next.js approach for static assets

// Helper function to get image path
export function getImagePath(filename: string): string {
  // Use Next.js public folder path
  return `/images/${filename}`;
}

// Static image mappings for your projects
export const projectImages = {
  // SSC Railtec Database
  // produkt: Full screenshot with menu bar (main showcase)
  produktdatenbank_produkt: getImagePath('produktdatenbank_produkt.png'),
  // konfigurationen: Configuration panel (excerpt, no menu bar)
  produktdatenbank_konfigurationen: getImagePath('produktdatenbank_konfigurationen.png'),
  // verwaltung: Admin panel (excerpt, no menu bar)
  produktdatenbank_verwaltung: getImagePath('produktdatenbank_verwaltung.png'),
  // signing: Authentication screen
  produktdatenbank_signing: getImagePath('produktdatenbank_signing.png'),

  // Fusspflege App
  // kundenliste: List of all registered users (main view)
  fusspflege_kundenliste: getImagePath('fusspflege_kundenliste.png'),
  // teilen: Share action from list
  fusspflege_teilen: getImagePath('fusspflege_teilen.png'),
  // registrierung: New customer registration form
  fusspflege_registrierung: getImagePath('fusspflege_registrierung.png'),

  // Long COVID App
  // masterarbeit: Presentation sheet showing app capabilities
  masterarbeit_longcovidapp: getImagePath('masterarbeit_longcovidapp.png'),

  // NTGL Event Site
  // eventseite: Full site with flyer, preview, and registration
  ntgl_eventseite: getImagePath('ntgl_eventseite.png'),

  // Da Hoam (Nest-Haus)
  // landingpage: Main showcase image (large, prominent)
  da_hoam_landingpage: getImagePath('da-hoam_landingpage.png'),
  // konfigurator: Interactive configurator (own section)
  da_hoam_konfigurator: getImagePath('da-hoam_konfigurator.png'),
  // konzeptcheck: Supporting image
  da_hoam_konzeptcheck: getImagePath('da-hoam_konzeptcheck.png'),
  // warumwir: Supporting image
  da_hoam_warumwir: getImagePath('da-hoam_warumwir.png'),
  // kontakt: Supporting image
  da_hoam_kontakt: getImagePath('da-hoam_kontakt.png'),
};

// Helper function to get image URL
export function getImageUrl(imageKey: keyof typeof projectImages): string {
  return projectImages[imageKey];
}
