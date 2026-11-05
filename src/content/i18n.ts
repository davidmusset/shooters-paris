import { fr, type Dict } from './fr';
import { en } from './en';
import type { Lang } from './routes';

export const dicts: Record<Lang, Dict> = { fr, en };

export function t(lang: Lang): Dict {
  return dicts[lang];
}

export const LOCALE_TAG: Record<Lang, string> = { fr: 'fr-FR', en: 'en' };
export const OG_LOCALE: Record<Lang, string> = { fr: 'fr_FR', en: 'en_GB' };
