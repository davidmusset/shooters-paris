// ---------------------------------------------------------------------------
// Configuration du site Shooters Paris : tout ce qui est "factuel" et partagé
// entre les deux langues vit ici (adresse, horaires, contacts, réseaux, SEO).
// Modifier ce fichier suffit pour mettre à jour toutes les pages.
// ---------------------------------------------------------------------------

/** URL publique du site (à remplacer par le domaine définitif avant la mise en ligne). */
export const SITE_URL = 'https://shooters-paris.fr';

export const BRAND = {
  name: 'Shooters Paris',
  legalName: 'Shooters Paris',
  tagline: {
    fr: 'Airsoft shooting bar & cocktails, Paris 10e',
    en: 'Airsoft shooting bar & cocktails, Paris 10e',
  },
};

export const CONTACT = {
  email: 'paris@theshootingbar.com',
  /** Numéro à renseigner quand la ligne sera ouverte (format international, ex. +33 1 23 45 67 89). */
  phone: '06 36 90 96 64',
  /** Même numéro au format international (liens tel: et données structurées). */
  phoneIntl: '+33636909664',
  address: {
    street: '27 boulevard de Magenta',
    postalCode: '75010',
    city: 'Paris',
    country: 'FR',
    /** Coordonnées GPS approximatives du 27 bd de Magenta (utilisées pour le JSON-LD et le lien Maps). */
    lat: 48.8713,
    lng: 2.3598,
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=27+boulevard+de+Magenta+75010+Paris',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=27+boulevard+de+Magenta,+75010+Paris&output=embed&z=16',
};

/** Horaires d'ouverture (hh:mm, 24 h). `null` = fermé. */
export const HOURS: { day: number; open: string | null; close: string | null }[] = [
  { day: 1, open: null, close: null }, // lundi
  { day: 2, open: '15:00', close: '00:00' },
  { day: 3, open: '15:00', close: '00:00' },
  { day: 4, open: '15:00', close: '00:00' },
  { day: 5, open: '15:00', close: '00:00' },
  { day: 6, open: '15:00', close: '00:00' },
  { day: 0, open: '15:00', close: '22:00' }, // dimanche
];

export const SOCIAL = {
  instagram: 'https://www.instagram.com/shooters.paris',
  tiktok: '',
  facebook: '',
  linkedin: '',
};

/** Chiffres clés affichés sur le site. */
export const FACTS = {
  lanes: 8,
  minAge: 16,
  minPlayers: 2,
  maxPlayers: 32,
  sessionMinutes: 60,
  bbDiameterMm: 5,
  bbSpeedMs: 110,
  priceFrom: 35,
  pricePremium: 45,
};

/**
 * Réservation : pour l'instant un emplacement vide est réservé sur la page
 * "Réserver" (le widget sera intégré plus tard). Si une URL externe est
 * renseignée ici, les boutons "Réserver" renverront vers elle à la place.
 */
export const BOOKING = {
  externalUrl: '',
};

/** Menu (PDF servi depuis /public/menu). */
export const MENU_PDF = '/menu/menu-shooters-paris.pdf';

/** Image OpenGraph par défaut (générée dans /public). */
export const OG_IMAGE = '/og/shooters-paris.jpg';
