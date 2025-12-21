// Vercel Blob Storage configuration
// Images are stored in Vercel Blob Storage under the 'images' folder
const VERCEL_BLOB_BASE_URL = 'https://1mkowktdsbm6ra0z.public.blob.vercel-storage.com';

// Generate blob URL for Vercel Blob Storage
export function getBlobUrl(blobName: string): string {
  // Vercel Blob URLs are typically: https://<token>.public.blob.vercel-storage.com/<path>
  return `${VERCEL_BLOB_BASE_URL}/${blobName}`;
}

// Project image mappings
export const projectImages = {
  // SSC Railtec Database
  produktdatenbank_signing: getBlobUrl('produktdatenbank_signing.png'),
  produktdatenbank_produkt: getBlobUrl('produktdatenbank_produkt.png'),
  produktdatenbank_konfigurationen: getBlobUrl('produktdatenbank_konfigurationen.png'),
  produktdatenbank_verwaltung: getBlobUrl('produktdatenbank_verwaltung.png'),

  // Fusspflege App
  fusspflege_kundenliste: getBlobUrl('fusspflege_kundenliste.png'),
  fusspflege_teilen: getBlobUrl('fusspflege_teilen.png'),
  fusspflege_registrierung: getBlobUrl('fusspflege_registrierung.png'),

  // Long COVID App
  masterarbeit_longcovidapp: getBlobUrl('masterarbeit_longcovidapp.png'),

  // NTGL Event Site
  ntgl_eventseite: getBlobUrl('ntgl_eventseite.png'),

  // Da Hoam (Nest-Haus) Project
  da_hoam_landingpage: getBlobUrl('da-hoam_landingpage.png'),
  da_hoam_konzeptcheck: getBlobUrl('da-hoam_konzeptcheck.png'),
  da_hoam_warumwir: getBlobUrl('da-hoam_warumwir.png'),
  da_hoam_kontakt: getBlobUrl('da-hoam_kontakt.png'),
  da_hoam_konfigurator: getBlobUrl('da-hoam_konfigurator.png'),
};

// Helper function to get all images for a project
export function getProjectImages(projectId: string): string[] {
  switch (projectId) {
    case 'nest-haus':
      return [
        projectImages.da_hoam_landingpage,
        projectImages.da_hoam_konzeptcheck,
        projectImages.da_hoam_warumwir,
        projectImages.da_hoam_kontakt,
        projectImages.da_hoam_konfigurator,
      ];
    case 'ks-database':
      return [
        projectImages.produktdatenbank_produkt,
        projectImages.produktdatenbank_konfigurationen,
        projectImages.produktdatenbank_verwaltung,
        projectImages.produktdatenbank_signing,
      ];
    case 'fusspflege-app':
      return [
        projectImages.fusspflege_kundenliste,
        projectImages.fusspflege_teilen,
        projectImages.fusspflege_registrierung,
      ];
    case 'longcovid-app':
      return [projectImages.masterarbeit_longcovidapp];
    case 'ntgl-events':
      return [projectImages.ntgl_eventseite];
    default:
      return [];
  }
}

// Check if blob exists (for public containers)
export async function checkBlobExists(blobName: string): Promise<boolean> {
  try {
    const url = getBlobUrl(blobName);
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.error(`Error checking blob ${blobName}:`, error);
    return false;
  }
}
