# Site Shooters Paris

Site vitrine de Shooters Paris (bar stand de tir & cocktails, 27 boulevard de Magenta, Paris 10e).
Construit avec [Astro](https://astro.build) (site statique, FR + EN), hébergé sur Vercel.

## Démarrer en local

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # génère le site dans /dist
```

Node 22.12 ou plus récent.

## Où modifier quoi

| Je veux changer… | Fichier |
| --- | --- |
| Adresse, horaires, e-mail, téléphone, réseaux, chiffres clés, URL du site | `src/content/site.ts` |
| Tous les textes français (home, pages, FAQ, packs, occasions, SEO) | `src/content/fr.ts` |
| Tous les textes anglais | `src/content/en.ts` |
| Les URL des pages (FR/EN) | `src/content/routes.ts` |
| Les photos utilisées et leurs légendes | `src/assets/photos/` + `src/content/photos.ts` |
| Le menu PDF | `public/menu/menu-shooters-paris.pdf` |
| Les couleurs, typos, boutons | `src/styles/global.css` |
| Le module de réservation | `src/views/BookView.astro` (bloc `#booking-widget`) ou `BOOKING.externalUrl` dans `site.ts` |
| Le formulaire de contact (envoi e-mail) | `api/contact.ts` |

Chaque modification poussée sur la branche `main` est déployée automatiquement par Vercel en 1 à 2 minutes.

## Variables d'environnement (Vercel → Settings → Environment Variables)

| Variable | Rôle |
| --- | --- |
| `RESEND_API_KEY` | clé API [Resend](https://resend.com) pour l'envoi des demandes de contact |
| `CONTACT_TO` | adresse qui reçoit les demandes (défaut `paris@theshootingbar.com`) |
| `CONTACT_FROM` | expéditeur, domaine vérifié chez Resend (ex. `Shooters Paris <site@shooters-paris.fr>`) |

Sans `RESEND_API_KEY`, le formulaire affiche un message d'erreur avec l'adresse e-mail directe.

## Domaine définitif

1. Vercel → projet → Settings → Domains → ajouter le domaine, suivre les instructions DNS.
2. Mettre à jour `SITE_URL` dans `src/content/site.ts`, et l'URL du sitemap dans `public/robots.txt` et les liens dans `public/llms.txt`.

## Structure

```
src/
  content/      textes FR/EN, configuration, routes, photos
  components/   header, footer, packs, occasions, FAQ, accès, CTA…
  views/        une vue par type de page (partagée FR/EN)
  pages/        routes FR (racine) et EN (/en)
  layouts/      layout de base (SEO, hreflang, JSON-LD)
  styles/       design system
api/            fonction serverless Vercel (formulaire de contact)
public/         fichiers statiques (menu, favicons, robots.txt, llms.txt, image OpenGraph)
```
