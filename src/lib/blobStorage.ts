import { list } from '@vercel/blob';

// Vercel Blob Storage configuration
// Your blob store: janp-portfolio-blob
// Images are stored under: images/ folder with randomized suffixes

// Note: In production, Vercel Blob URLs are automatically available
// Format: https://<token>.public.blob.vercel-storage.com/<filename>

// You can also fetch the actual blob URL dynamically
export async function getBlobUrl(filename: string): Promise<string> {
  // In production with BLOB_READ_WRITE_TOKEN, Vercel provides direct URLs
  // For now, we'll construct the URL (update after uploading to Vercel)
  
  // Your Vercel Blob store will provide URLs in this format:
  return `https://1mkowktdsbm6ra0z.public.blob.vercel-storage.com/images/${filename}`;
}

// Static image mappings for your projects
// These will need to be updated with actual filenames after upload
export const projectImages = {
  // SSC Railtec Database - Update these filenames after upload
  // produkt: Full screenshot with menu bar (main showcase)
  produktdatenbank_produkt: 'produktdatenbank_produkt.png',
  // konfigurationen: Configuration panel (excerpt, no menu bar)
  produktdatenbank_konfigurationen: 'produktdatenbank_konfigurationen.png',
  // verwaltung: Admin panel (excerpt, no menu bar)
  produktdatenbank_verwaltung: 'produktdatenbank_verwaltung.png',
  // signing: Authentication screen
  produktdatenbank_signing: 'produktdatenbank_signing.png',

  // Fusspflege App - Update these filenames after upload
  // kundenliste: List of all registered users (main view)
  fusspflege_kundenliste: 'fusspflege_kundenliste.png',
  // teilen: Share action from list
  fusspflege_teilen: 'fusspflege_teilen.png',
  // registrierung: New customer registration form
  fusspflege_registrierung: 'fusspflege_registrierung.png',

  // Long COVID App - Update filename after upload
  // masterarbeit: Presentation sheet showing app capabilities
  masterarbeit_longcovidapp: 'masterarbeit_longcovidapp.png',

  // NTGL Event Site - Update filename after upload
  // eventseite: Full site with flyer, preview, and registration
  ntgl_eventseite: 'ntgl_eventseite.png',

  // Da Hoam (Nest-Haus) - Update these filenames after upload
  // landingpage: Main showcase image (large, prominent)
  da_hoam_landingpage: 'da-hoam_landingpage.png',
  // konfigurator: Interactive configurator (own section)
  da_hoam_konfigurator: 'da-hoam_konfigurator.png',
  // konzeptcheck: Supporting image
  da_hoam_konzeptcheck: 'da-hoam_konzeptcheck.png',
  // warumwir: Supporting image
  da_hoam_warumwir: 'da-hoam_warumwir.png',
  // kontakt: Supporting image
  da_hoam_kontakt: 'da-hoam_kontakt.png',
};

// Helper function to get full URLs
export function getImageUrl(imageKey: keyof typeof projectImages): string {
  const filename = projectImages[imageKey];
  return `https://1mkowktdsbm6ra0z.public.blob.vercel-storage.com/images/${filename}`;
}

// Get all images for a project with proper presentation hints
export function getProjectImages(projectId: string): Array<{
  url: string;
  alt: string;
  featured?: boolean;
  type?: 'full' | 'excerpt'; // full = with menu bar, excerpt = window only
}> {
  switch (projectId) {
    case 'nest-haus':
      return [
        {
          url: getImageUrl('da_hoam_landingpage'),
          alt: 'Da Hoam Landing Page',
          featured: true,
          type: 'full',
        },
        {
          url: getImageUrl('da_hoam_konfigurator'),
          alt: 'Interactive House Configurator',
          featured: true,
          type: 'full',
        },
        {
          url: getImageUrl('da_hoam_konzeptcheck'),
          alt: 'Concept Check',
          featured: false,
          type: 'full',
        },
        {
          url: getImageUrl('da_hoam_warumwir'),
          alt: 'Why Choose Us',
          featured: false,
          type: 'full',
        },
        {
          url: getImageUrl('da_hoam_kontakt'),
          alt: 'Contact Section',
          featured: false,
          type: 'full',
        },
      ];
      
    case 'ks-database':
      return [
        {
          url: getImageUrl('produktdatenbank_produkt'),
          alt: 'Product Registration Form with Menu Bar',
          featured: true,
          type: 'full', // Has menu bar
        },
        {
          url: getImageUrl('produktdatenbank_konfigurationen'),
          alt: 'Configuration Management Panel',
          featured: false,
          type: 'excerpt', // Window only, no menu bar
        },
        {
          url: getImageUrl('produktdatenbank_verwaltung'),
          alt: 'Administration Panel',
          featured: false,
          type: 'excerpt', // Window only, no menu bar
        },
        {
          url: getImageUrl('produktdatenbank_signing'),
          alt: 'Authentication Screen',
          featured: false,
          type: 'full',
        },
      ];
      
    case 'fusspflege-app':
      return [
        {
          url: getImageUrl('fusspflege_kundenliste'),
          alt: 'Customer List - Patient Management',
          featured: true,
          type: 'full',
        },
        {
          url: getImageUrl('fusspflege_teilen'),
          alt: 'Share Patient Data',
          featured: false,
          type: 'full',
        },
        {
          url: getImageUrl('fusspflege_registrierung'),
          alt: 'Patient Registration Form',
          featured: false,
          type: 'full',
        },
      ];
      
    case 'longcovid-app':
      return [
        {
          url: getImageUrl('masterarbeit_longcovidapp'),
          alt: 'Long COVID App - Master Thesis Presentation',
          featured: true,
          type: 'full',
        },
      ];
      
    case 'ntgl-events':
      return [
        {
          url: getImageUrl('ntgl_eventseite'),
          alt: 'NTGL Event Registration Website',
          featured: true,
          type: 'full',
        },
      ];
      
    default:
      return [];
  }
}

// List all images from Vercel Blob (requires BLOB_READ_WRITE_TOKEN in production)
export async function listAllImages() {
  try {
    const { blobs } = await list({
      prefix: 'images/',
    });
    return blobs.map(blob => ({
      url: blob.url,
      pathname: blob.pathname,
      size: blob.size,
      uploadedAt: blob.uploadedAt,
    }));
  } catch (error) {
    console.error('Error listing images:', error);
    return [];
  }
}
