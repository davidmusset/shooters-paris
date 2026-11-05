export type Lang = 'fr' | 'en';

/** Clés de page → chemin par langue. Sert à la navigation, au footer et aux liens hreflang. */
export const ROUTES = {
  home: { fr: '/', en: '/en' },
  concept: { fr: '/concept', en: '/en/concept' },
  pricing: { fr: '/tarifs', en: '/en/pricing' },
  menu: { fr: '/menu', en: '/en/menu' },
  venue: { fr: '/lieu', en: '/en/venue' },
  faq: { fr: '/faq', en: '/en/faq' },
  contact: { fr: '/contact', en: '/en/contact' },
  book: { fr: '/reserver', en: '/en/book' },
  occasions: { fr: '/occasions', en: '/en/occasions' },
  teamBuilding: { fr: '/occasions/team-building', en: '/en/occasions/team-building' },
  birthday: { fr: '/occasions/anniversaire', en: '/en/occasions/birthday' },
  bachelor: { fr: '/occasions/evg-evjf', en: '/en/occasions/bachelor-party' },
  afterwork: { fr: '/occasions/afterwork', en: '/en/occasions/afterwork' },
  duo: { fr: '/occasions/duo', en: '/en/occasions/duo' },
  friends: { fr: '/occasions/entre-amis', en: '/en/occasions/with-friends' },
  legal: { fr: '/mentions-legales', en: '/en/legal' },
  privacy: { fr: '/confidentialite', en: '/en/privacy' },
  terms: { fr: '/cgv', en: '/en/terms' },
} as const;

export type RouteKey = keyof typeof ROUTES;

export const OCCASION_KEYS = ['teamBuilding', 'birthday', 'bachelor', 'afterwork', 'duo', 'friends'] as const;
export type OccasionKey = (typeof OCCASION_KEYS)[number];

/** Slug d'URL (dernier segment) par occasion et langue, pour getStaticPaths. */
export const OCCASION_SLUGS: Record<Lang, Record<string, OccasionKey>> = {
  fr: {
    'team-building': 'teamBuilding',
    anniversaire: 'birthday',
    'evg-evjf': 'bachelor',
    afterwork: 'afterwork',
    duo: 'duo',
    'entre-amis': 'friends',
  },
  en: {
    'team-building': 'teamBuilding',
    birthday: 'birthday',
    'bachelor-party': 'bachelor',
    afterwork: 'afterwork',
    duo: 'duo',
    'with-friends': 'friends',
  },
};

export function path(key: RouteKey, lang: Lang): string {
  return ROUTES[key][lang];
}

/** Retrouve la clé de route à partir d'un chemin (pour le sélecteur de langue). */
export function routeKeyFromPath(pathname: string): RouteKey | null {
  const clean = pathname.replace(/\/$/, '') || '/';
  for (const [key, value] of Object.entries(ROUTES)) {
    if (value.fr === clean || value.en === clean) return key as RouteKey;
  }
  return null;
}

/** Chemin équivalent dans l'autre langue (sélecteur de langue). */
export function alternatePath(pathname: string, target: Lang): string {
  const clean = pathname.replace(/\/$/, '') || '/';
  const key = routeKeyFromPath(clean);
  if (key) return ROUTES[key][target];
  // pages occasions dynamiques : /occasions/<slug> ou /en/occasions/<slug>
  const m = clean.match(/^(?:\/en)?\/occasions\/([^/]+)$/);
  if (m) {
    const from: Lang = clean.startsWith('/en/') ? 'en' : 'fr';
    const occ = OCCASION_SLUGS[from][m[1]];
    if (occ) return ROUTES[occ][target];
  }
  return ROUTES.home[target];
}
