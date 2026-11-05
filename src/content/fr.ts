import type { OccasionKey } from './routes';

export interface PackContent {
  name: string;
  price: string;
  per: string;
  intro: string;
  items: string[];
  from: string;
  cta: string;
}

export interface OccasionPage {
  name: string;
  badge: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  why: { title: string; text: string }[];
  standardExtra?: string[];
  premiumExtra: string[];
  premiumNote?: string;
  faq: { q: string; a: string }[];
}

export const fr = {
  langName: 'Français',
  switchTo: 'English',
  skip: 'Aller au contenu',

  nav: {
    concept: 'Le concept',
    occasions: 'Occasions',
    pricing: 'Tarifs',
    menu: 'Menu',
    venue: 'Venir',
    faq: 'FAQ',
    contact: 'Contact',
    book: 'Réserver',
    menuButton: 'Menu',
    close: 'Fermer',
  },

  meta: {
    home: {
      title: 'Shooters Paris : bar stand de tir & cocktails, République (Paris 10e)',
      description:
        "Le premier bar stand de tir de France. 8 pistes privées, répliques airsoft 1:1, plus de 10 scénarios de jeu et un bar à cocktails, à 2 minutes de République. Dès 35 € par personne, à partir de 16 ans.",
    },
    concept: {
      title: 'Le concept Shooters : un stand de tir caché derrière un bar à cocktails',
      description:
        'Répliques airsoft réalistes, billes biodégradables de 5 mm, détection des impacts en temps réel et trois univers de jeu. Découvrez comment fonctionne Shooters Paris.',
    },
    pricing: {
      title: 'Tarifs Shooters Paris : pack Standard 35 € et pack Premium 45 €',
      description:
        "1 h de tir sur piste privée, équipement complet, boisson de bienvenue et amuse-bouches dès 35 € par personne. Pack Premium avec tournoi et cocktail signature à 45 €.",
    },
    menu: {
      title: 'Menu Shooters Paris : cocktails signature, planches et amuse-bouches',
      description:
        'La carte du bar Shooters Paris : cocktails signature, bières, vins, softs et planches à partager, servis avant, pendant ou après votre session de tir.',
    },
    venue: {
      title: 'Venir chez Shooters Paris : 27 boulevard de Magenta, métro République',
      description:
        'Adresse, horaires, accès en métro et infos pratiques pour venir chez Shooters, 27 boulevard de Magenta, Paris 10e, à 2 minutes de la place de la République.',
    },
    faq: {
      title: 'FAQ Shooters Paris : âge minimum, sécurité, réservation, groupes',
      description:
        'Toutes les réponses sur le bar stand de tir Shooters Paris : âge minimum 16 ans, sécurité des répliques airsoft, réservation, retard, groupes et privatisation.',
    },
    contact: {
      title: 'Contact & devis : Shooters Paris',
      description:
        'Une question, un groupe de plus de 12 personnes ou une privatisation ? Écrivez-nous, nous répondons sous 24 h ouvrées.',
    },
    book: {
      title: 'Réserver une piste chez Shooters Paris',
      description:
        'Réservez votre session de tir chez Shooters Paris : choisissez votre date, votre créneau et votre pack. Confirmation immédiate.',
    },
    occasions: {
      title: 'Occasions : team building, anniversaire, EVG/EVJF, afterwork, duo',
      description:
        'Chaque occasion a son déroulé chez Shooters Paris : team building, anniversaire, enterrement de vie de célibataire, afterwork, sortie en duo ou entre amis.',
    },
    legal: { title: 'Mentions légales', description: 'Mentions légales du site Shooters Paris.' },
    privacy: {
      title: 'Politique de confidentialité',
      description: 'Politique de confidentialité et cookies du site Shooters Paris.',
    },
    terms: { title: 'Conditions générales de vente', description: 'CGV de Shooters Paris.' },
    notFound: { title: 'Page introuvable', description: 'Cette page n’existe pas.' },
  },

  hero: {
    title: 'Le premier bar stand de tir de France',
    lead:
      'Des répliques réalistes, des scénarios de jeu sur écran géant et des cocktails signature, le tout dans un cadre sécurisé à 2 minutes de République.',
    ctaBook: 'Réserver une piste',
    ctaHow: 'Comment ça marche ?',
    opening: 'Ouverture novembre 2026 · 27 boulevard de Magenta, Paris 10e',
  },

  facts: [
    { value: '8', label: 'pistes privées' },
    { value: 'Dès 35 €', label: 'par personne, boisson incluse' },
    { value: '1 h', label: 'de session, 2 à 32 joueurs' },
    { value: '16 ans', label: 'âge minimum, 100 % sécurisé' },
  ],

  steps: {
    title: 'Comment ça marche ?',
    items: [
      {
        title: 'Réservez votre piste',
        text: 'Choisissez votre créneau en ligne en deux minutes. Votre piste privée vous attend, de 2 à 32 joueurs. Au-delà, on privatise.',
      },
      {
        title: 'Tirez, défiez, rejouez',
        text: 'Deux répliques par piste, plus de 10 scénarios de jeu et un score en temps réel. Débutant ou tireur confirmé, la cible ne ment pas.',
      },
      {
        title: 'Trinquez avant, pendant ou après',
        text: 'Boisson de bienvenue, cocktails signature et planches à partager, servis au bar ou directement sur votre piste.',
      },
    ],
  },

  concept: {
    title: 'Un stand de tir caché derrière un bar à cocktails',
    text: [
      'Chez Shooters, vous maniez de véritables répliques airsoft 1:1, avec un vrai recul, qui tirent des billes biodégradables de 5 mm sur des écrans géants. Un système de détection suit chaque impact et affiche vos performances en direct.',
      'Entre deux manches, on repose la réplique et on reprend un verre. C’est la seule adresse de Paris où l’on enchaîne un duel de précision et un cocktail sans changer de pièce.',
    ],
    cta: 'Découvrir le concept',
  },

  games: {
    title: 'Trois univers, plus de 10 scénarios',
    lead: 'Chaque piste donne accès à tous les jeux. On commence par la précision, on finit par le tournoi.',
    items: [
      {
        name: 'Le Stand',
        text: 'De la pure précision. Vous contre la cible : vitesse, distance, difficulté. Chaque tir est un défi et votre adresse s’affine à chaque manche.',
      },
      {
        name: 'Le Terrain de jeu',
        text: 'Ball-trap, canards sauvages, cibles mouvantes : l’enfance qui rencontre l’âge adulte, recréée en plein air sur écran géant. Casual, compétitif, nostalgique.',
      },
      {
        name: 'Le Bar',
        text: 'Tirez sur des bouteilles, explosez des cartes, défiez vos amis en duel, en équipe ou tous contre tous. Débloquez des niveaux, le tableau des scores ne ment jamais.',
      },
    ],
  },

  bar: {
    title: 'Des cocktails signature, des planches à partager',
    text: [
      'Shooters, c’est d’abord un bar. Cocktails signature, bières, vins choisis et planches préparées maison, à déguster au comptoir ou sur votre piste pendant la session.',
      'Pas besoin de tirer pour venir prendre un verre : le bar est ouvert à tous aux horaires d’ouverture.',
    ],
    cta: 'Voir le menu',
  },

  occasions: {
    title: 'Chaque occasion, son déroulé',
    lead: 'Un anniversaire, un team building ou simplement l’envie de se voir ailleurs qu’autour d’un comptoir : on adapte le format, les packs et le bar.',
    more: 'Voir le déroulé',
    note: {
      title: 'Juste pour un verre ?',
      text: 'Le bar est ouvert à tous, sans réservation, pendant les horaires d’ouverture. Vous pourrez toujours prendre une piste sur place s’il en reste une.',
    },
  },

  packs: {
    title: 'Deux packs, un tarif par personne',
    lead: 'Tout est inclus : la piste privée pendant 1 h, l’équipement complet, les munitions, la boisson et les amuse-bouches.',
    perPerson: 'par personne',
    standard: {
      name: 'Pack Standard',
      price: '35 €',
      per: 'par personne',
      intro: 'Parfait pour découvrir l’activité.',
      items: [
        '1 h de tir sur une piste privée',
        'Équipement complet inclus',
        '1 boisson de bienvenue par personne',
        'Buffet d’amuse-bouches',
        '2 répliques, plus de 10 scénarios de jeu',
      ],
      from: 'Dès 2 joueurs',
      cta: 'Réserver en Standard',
    } as PackContent,
    premium: {
      name: 'Pack Premium',
      price: '45 €',
      per: 'par personne',
      intro: 'Pour les groupes qui veulent un vrai tournoi.',
      items: [
        '1 h de tir sur pistes privées',
        '1 boisson de bienvenue + 1 cocktail signature par personne',
        'Buffet d’amuse-bouches premium',
        '2 répliques, équipement complet, munitions illimitées',
        'Tournoi avec scores en temps réel, prix du meilleur tireur',
        'Trophée d’équipe et photo de groupe',
      ],
      from: 'Dès 4 joueurs',
      cta: 'Réserver en Premium',
    } as PackContent,
    custom: {
      name: 'Sur mesure',
      price: 'Sur devis',
      per: '',
      intro: 'Groupes de plus de 12 personnes, privatisation totale ou partielle, formats sur mesure.',
      items: [
        'Jusqu’à 8 pistes en simultané',
        'Privatisation du bar',
        'Restauration et open bar sur mesure',
        'Animation du tournoi par notre équipe',
      ],
      from: 'Réponse sous 24 h ouvrées',
      cta: 'Demander un devis',
    } as PackContent,
    footnote: 'Tarifs TTC. Le pack est choisi pour l’ensemble du groupe au moment de la réservation.',
  },

  safety: {
    title: 'Real guns, real fun, real safe',
    items: [
      {
        title: 'De vraies répliques',
        text: 'Répliques 1:1 aux mécaniques authentiques, avec un recul réel et des billes de 5 mm propulsées à 110 m/s. Chaque tir est pensé pour la précision.',
      },
      {
        title: 'Du vrai jeu',
        text: 'Des scénarios palpitants, des scores en direct et un gameplay qui donne envie de rejouer. On rit, on se défie, on célèbre.',
      },
      {
        title: 'Une vraie sécurité',
        text: 'Billes biodégradables non létales, pistes fermées, lunettes de protection fournies et équipe présente en permanence. Aussi sûr qu’un stand de fête foraine.',
      },
    ],
  },

  faq: {
    title: 'Tout ce qu’il faut savoir',
    more: 'Voir toute la FAQ',
    items: [
      {
        q: 'Shooters, qu’est-ce que c’est ?',
        a: 'Un bar à cocktails avec un stand de tir airsoft caché derrière : 8 pistes privées où l’on tire avec des répliques réalistes sur des scénarios projetés sur écran géant, scores en temps réel inclus. Le premier du genre en France, après Bruxelles.',
      },
      {
        q: 'Les répliques sont-elles de vraies armes ?',
        a: 'Non. Ce sont des répliques airsoft 1:1 qui tirent des billes biodégradables de 5 mm à 110 m/s. Elles sont non létales, utilisées dans des pistes fermées, avec des lunettes de protection fournies.',
      },
      {
        q: 'Faut-il savoir tirer ?',
        a: 'Pas du tout. Notre équipe vous briefe à l’arrivée et les premiers scénarios sont pensés pour apprendre en jouant. Les scores en direct font le reste.',
      },
      {
        q: 'Quel est l’âge minimum ?',
        a: 'L’activité de tir est accessible à partir de 16 ans. Le bar est ouvert à tous, mais l’alcool est réservé aux majeurs.',
      },
      {
        q: 'Mon groupe a-t-il sa propre piste ?',
        a: 'Oui, toujours. Chaque réservation dispose d’une piste privée pour 1 h, avec deux répliques. Les grands groupes sont répartis sur plusieurs pistes côte à côte.',
      },
      {
        q: 'Combien de personnes par piste ?',
        a: 'De 2 à 4 joueurs par piste pour que tout le monde tire suffisamment. Au-delà, on vous attribue plusieurs pistes, jusqu’à 32 joueurs en simultané. Plus nombreux ? Demandez un devis de privatisation.',
      },
      {
        q: 'Peut-on venir sans tirer ?',
        a: 'Oui. Le bar est ouvert à tous aux horaires d’ouverture, sans réservation. Les accompagnants peuvent aussi rester près de la piste pour encourager.',
      },
      {
        q: 'Faut-il réserver ?',
        a: 'La réservation en ligne est fortement conseillée, surtout le week-end. Sans réservation, nous vous donnons une piste si une est disponible.',
      },
      {
        q: 'Que se passe-t-il en cas de retard ?',
        a: 'Prévenez-nous. Le créneau suivant est peut-être réservé par un autre groupe : nous ferons le maximum pour décaler, sinon votre session sera raccourcie.',
      },
      {
        q: 'Peut-on boire de l’alcool avant de tirer ?',
        a: 'Avec modération. Notre équipe peut refuser l’accès à la piste à toute personne manifestement en état d’ébriété, sans remboursement.',
      },
      {
        q: 'Y a-t-il un dress code ?',
        a: 'Non. Prévoyez simplement une tenue dans laquelle vous êtes à l’aise pour épauler. Les lunettes de protection sont fournies.',
      },
      {
        q: 'Organisez-vous des événements privés ?',
        a: 'Oui : team building, anniversaires, EVG/EVJF, soirées d’entreprise et privatisations totales. Écrivez-nous avec la date et le nombre de personnes, nous répondons sous 24 h ouvrées.',
      },
    ],
  },

  venue: {
    title: 'Venir chez Shooters',
    addressLine: '27 boulevard de Magenta, 75010 Paris',
    nearby: 'À 2 minutes à pied de la place de la République',
    metroTitle: 'Métro',
    metro: [
      { name: 'République', lines: ['3', '5', '8', '9', '11'], walk: '3 min' },
      { name: 'Jacques Bonsergent', lines: ['5'], walk: '4 min' },
      { name: 'Gare de l’Est', lines: ['4', '5', '7'], walk: '8 min' },
    ],
    hoursTitle: 'Horaires',
    closed: 'Fermé',
    days: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    hoursSummary: ['Mardi à samedi : 15 h à minuit', 'Dimanche : 15 h à 22 h', 'Fermé le lundi'],
    practicalTitle: 'Infos pratiques',
    practical: [
      'Accès à partir de 16 ans pour le tir',
      'Lunettes de protection fournies',
      'Paiement par carte, espèces et tickets restaurant pour le bar',
    ],
    mapCta: 'Ouvrir dans Google Maps',
    cta: 'Réserver une piste',
  },

  ctaBand: {
    title: 'Prêt à prendre la piste ?',
    text: 'Réservez votre créneau en ligne, ou écrivez-nous pour un groupe ou une privatisation.',
    book: 'Réserver',
    contact: 'Demander un devis',
  },

  footer: {
    tagline: 'Bar stand de tir & cocktails',
    hoursTitle: 'Horaires',
    navTitle: 'Navigation',
    infoTitle: 'Infos',
    legal: 'Mentions légales',
    privacy: 'Confidentialité',
    terms: 'CGV',
    rights: 'Tous droits réservés',
    instagram: 'Instagram',
  },

  conceptPage: {
    title: 'Le concept',
    lead: 'Statues italiennes, boiseries anglaises et végétation luxuriante : derrière le bar, huit pistes de tir vous attendent.',
    sections: [
      {
        title: 'L’airsoft, réinventé pour un bar',
        text: [
          'L’airsoft est une activité de loisir où l’on utilise des répliques d’armes tirant de petites billes en plastique. Contrairement au paintball, il mise sur le réalisme : des répliques authentiques, un vrai recul, des billes sûres conçues pour le jeu.',
          'Chez Shooters, cette activité est ramenée dans un cadre fermé, confortable et encadré : une piste privée, un écran géant et un système de détection qui suit chaque impact avec une précision millimétrique.',
        ],
      },
      {
        title: 'Une piste, un écran, un score',
        text: [
          'Chaque piste est équipée de deux répliques, d’un écran géant et d’une tablette pour lancer les scénarios. Vous choisissez le jeu, le niveau, le mode (solo, duel, équipe) et le score s’affiche en direct.',
          'Plus de 10 scénarios sont disponibles dès le premier jour, du stand classique aux canards sauvages en passant par le tir sur bouteilles. Les niveaux se débloquent à mesure que votre précision progresse.',
        ],
      },
      {
        title: 'Un bar, vraiment',
        text: [
          'Le bar n’est pas un à-côté : cocktails signature, bières, vins et planches à partager composent une carte pensée pour durer toute la soirée, bien après la dernière cible.',
          'Vous pouvez venir uniquement pour boire un verre, ou commander directement sur votre piste pendant la session.',
        ],
      },
    ],
    cta: 'Voir les tarifs',
  },

  pricingPage: {
    title: 'Tarifs',
    lead: 'Un prix par personne, tout inclus. Choisissez le pack pour l’ensemble du groupe au moment de la réservation.',
    includedTitle: 'Dans tous les packs',
    included: [
      'Une piste privée pendant 1 h',
      'Deux répliques et l’équipement complet',
      'Les lunettes de protection',
      'Le briefing sécurité et l’aide de notre équipe',
      'Plus de 10 scénarios de jeu et les scores en direct',
    ],
    giftTitle: 'Offrir Shooters',
    giftText: 'Une carte cadeau valable un an, pour une session en duo ou pour toute la bande. Disponible bientôt en ligne, dès maintenant sur place.',
  },

  menuPage: {
    title: 'Le menu',
    lead: 'Cocktails, mocktails, bières pression, vins au verre et planches à partager. La carte est servie au bar et sur les pistes.',
    download: 'Télécharger le menu (PDF)',
    sections: [
      {
        title: 'Cocktails et mocktails',
        text: 'Les classiques exécutés comme il faut : Basil Smash, Pornstar Martini, Espresso Martini, Moscow Mule, Daiquiri fraise, Aperol Spritz, Passion Sunrise (12 €). Quatre mocktails maison à 8 €, dont le Virgin Ginger Mule et le Virgin Passion Sunrise.',
      },
      {
        title: 'Bières, vins et champagnes',
        text: 'Pression LBF Pale Ale et IPA, Monaco, Picon bière, cidre et bière sans alcool. Vins bio au verre dès 6 € (Rhône, Pays d’Oc, Corse), belles bouteilles jusqu’au Châteauneuf-du-Pape en magnum, champagnes EPC Brut et Blanc de Blancs.',
      },
      {
        title: 'Planches et amuse-bouches',
        text: 'Guacamole et houmous maison (8 €), stracciatella à la truffe (12 €), planches de charcuteries d’Italie ou de fromages affinés (24 €) et la planche mixte (25 €), à partager entre deux manches.',
      },
    ],
    note: 'Prix TTC, carte susceptible d’évoluer. L’abus d’alcool est dangereux pour la santé, à consommer avec modération.',
  },

  contactPage: {
    title: 'Contact & devis',
    lead: 'Pour un groupe, une privatisation ou une simple question. Nous répondons sous 24 h ouvrées.',
    form: {
      name: 'Nom et prénom',
      email: 'E-mail',
      phone: 'Téléphone (facultatif)',
      company: 'Entreprise (facultatif)',
      occasion: 'Occasion',
      occasions: ['Entre amis', 'Anniversaire', 'EVG / EVJF', 'Team building', 'Afterwork / soirée d’entreprise', 'Privatisation', 'Autre'],
      date: 'Date souhaitée',
      people: 'Nombre de personnes',
      message: 'Votre message',
      consent: 'J’accepte que mes données soient utilisées pour traiter ma demande.',
      submit: 'Envoyer la demande',
      sending: 'Envoi en cours…',
      success: 'Demande envoyée. Nous revenons vers vous sous 24 h ouvrées.',
      error: 'L’envoi a échoué. Écrivez-nous directement à',
    },
    directTitle: 'Nous écrire directement',
    directText: 'Vous préférez l’e-mail ? Envoyez la date, le nombre de personnes et l’occasion, on s’occupe du reste.',
  },

  bookPage: {
    title: 'Réserver une piste',
    lead: 'Choisissez votre date, votre créneau et votre pack. Confirmation immédiate par e-mail.',
    placeholder: 'Module de réservation',
    placeholderText: 'Le module de réservation en ligne sera intégré ici.',
    altTitle: 'En attendant',
    altText: 'Réservez par e-mail en indiquant la date, l’heure souhaitée, le nombre de joueurs et le pack choisi.',
    altCta: 'Réserver par e-mail',
    groupsTitle: 'Plus de 12 personnes ?',
    groupsText: 'Pour les grands groupes et les privatisations, passez par le formulaire de devis.',
    groupsCta: 'Demander un devis',
  },

  faqPage: {
    title: 'Questions fréquentes',
    lead: 'Tout ce qu’il faut savoir avant de venir. Il manque une réponse ? Écrivez-nous.',
  },

  occasionsPage: {
    title: 'Chaque occasion, son déroulé',
    lead: 'Choisissez votre occasion : on vous montre le format, le pack conseillé et ce que l’on ajoute pour l’événement.',
  },

  occasionCommon: {
    packsTitle: 'Les packs pour cette occasion',
    whyTitle: 'Pourquoi Shooters pour cette occasion',
    faqTitle: 'Questions fréquentes',
    standardAdds: 'Inclus dans le pack Standard',
    premiumAdds: 'En plus dans le pack Premium',
    ctaBook: 'Réserver',
    ctaQuote: 'Demander un devis',
    otherTitle: 'Les autres occasions',
  },

  occasionPages: {
    teamBuilding: {
      name: 'Team building',
      badge: '4 à 32 personnes · 1 h à 2 h',
      short: 'Transformez vos collègues en coéquipiers, ou en rivaux. Tournoi par équipes avec classement en direct, cocktails et planches à partager.',
      metaTitle: 'Team building à Paris : tournoi de tir et cocktails chez Shooters (République)',
      metaDescription:
        'Team building original à Paris 10e : tournoi de tir sur pistes privées avec scores en direct, cocktails et amuse-bouches. De 4 à 32 personnes, dès 35 € par personne, privatisation possible.',
      title: 'Un team building qui met tout le monde sur la même ligne',
      lead: 'Le stand de tir nivelle les hiérarchies : on ne gagne pas parce qu’on est manager, on gagne parce qu’on est précis. Tournoi par équipes, scores en direct, remise des prix au bar.',
      why: [
        { title: 'Un format qui marche à tous les coups', text: 'Pas besoin d’être sportif ni gamer. Le briefing prend cinq minutes, le premier scénario fait rire tout le monde, le tournoi fait le reste.' },
        { title: 'Des équipes mélangées', text: 'Nous composons les équipes avec vous pour casser les silos. Chaque manche est courte : tout le monde tire, tout le monde compte.' },
        { title: 'Un vrai moment de bar', text: 'La remise des prix se fait au comptoir, trophée en main, autour des cocktails et des planches. C’est là que les conversations continuent.' },
        { title: 'Simple à organiser', text: 'Un seul interlocuteur, un devis sous 24 h ouvrées, une facture. À 2 minutes de République, accessible de toute l’Île-de-France.' },
      ],
      premiumExtra: ['Tournoi par équipes animé par notre équipe', 'Composition des équipes avec vous pour mélanger les services', 'Devis et facture entreprise'],
      premiumNote: 'Pour les groupes de plus de 12 personnes, nous recommandons le pack Premium ou une privatisation.',
      faq: [
        { q: 'Combien de temps prévoir ?', a: 'Comptez 1 h de tir par piste. Pour un groupe de 20 à 32 personnes, prévoyez 2 h sur place avec l’accueil, le tournoi et la remise des prix.' },
        { q: 'Pouvez-vous facturer l’entreprise ?', a: 'Oui. Devis, facture et paiement par virement ou carte. Un acompte de 30 % confirme la réservation.' },
        { q: 'Peut-on ajouter un repas ?', a: 'Oui : buffet de planches, formules cocktail dînatoire ou open bar sur devis.' },
      ],
    },
    birthday: {
      name: 'Anniversaire',
      badge: '2 à 32 personnes · dès 16 ans',
      short: 'Une piste à votre nom, des scores à départager et de quoi trinquer entre chaque manche. Gâteau et décoration possibles sur demande.',
      metaTitle: 'Anniversaire à Paris : fêtez-le au bar stand de tir Shooters (République)',
      metaDescription:
        'Fêtez votre anniversaire chez Shooters Paris : piste de tir privée, scores en direct, cocktails et amuse-bouches. De 2 à 32 personnes dès 16 ans, à 2 minutes de République.',
      title: 'Un anniversaire qu’on ne fête pas deux fois',
      lead: 'Oubliez la table réservée dans un bar bondé. Chez Shooters, la bande a sa piste, son tableau des scores et son bar à deux mètres.',
      why: [
        { title: 'La bande a sa piste', text: 'Votre groupe dispose d’une ou plusieurs pistes privées pendant 1 h, avec deux répliques et tous les scénarios.' },
        { title: 'Une touche personnelle', text: 'Le nom de la personne fêtée sur le tableau des scores, un cocktail de bienvenue et, si vous le souhaitez, votre gâteau servi au bar.' },
        { title: 'On continue au bar', text: 'La session se prolonge naturellement autour des cocktails et des planches. Pas besoin de changer d’adresse pour la suite.' },
      ],
      premiumExtra: ['Tournoi « la grande bande » avec classement final', 'Nom de la personne fêtée sur le tableau des scores', 'Votre gâteau gardé au frais et servi au bar'],
      faq: [
        { q: 'Peut-on apporter un gâteau ?', a: 'Oui, prévenez-nous à la réservation. Nous le gardons au frais et le servons au bar.' },
        { q: 'Mes amis de 16 ans peuvent-ils tirer ?', a: 'Oui, l’activité est accessible dès 16 ans. L’alcool est réservé aux majeurs.' },
        { q: 'Peut-on décorer ?', a: 'Une décoration légère sur votre piste est possible sur demande. Pour une privatisation, tout est envisageable.' },
      ],
    },
    bachelor: {
      name: 'EVG / EVJF',
      badge: '4 à 20 personnes · 1 h ou 1 h 30',
      short: 'Vous arrivez, la piste est à votre nom, la tournée de shooters vous attend. Le futur marié ou la future mariée est en cible toute la session.',
      metaTitle: 'EVG / EVJF à Paris : stand de tir et cocktails chez Shooters (République)',
      metaDescription:
        'Enterrement de vie de garçon ou de jeune fille chez Shooters Paris : tournoi de tir sur piste privée, tournée de shooters, déguisement de l’heureux élu, cocktails. De 4 à 20 personnes, dès 35 €.',
      title: 'Un EVG, un EVJF, une cible',
      lead: 'Une heure de duels entre amis, des scores affichés en grand et la tournée de shooters pour départager. Le futur marié ou la future mariée tire en dernier, sous pression.',
      why: [
        { title: 'Un moment fort, pas un énième bar', text: 'La compétition crée les souvenirs : les gages se jouent à la cible et le tableau des scores garde la trace.' },
        { title: 'Un rituel pour l’heureux élu', text: 'Déguisement fourni dans le pack Premium, tournée de shooters pour toute la bande et manche finale en solo devant tout le monde.' },
        { title: 'Facile à caler dans la journée', text: 'À 2 minutes de République, à côté des bars du canal Saint-Martin et du 11e. Idéal en début de soirée.' },
      ],
      premiumExtra: ['Tournée de shooters pour toute la bande', 'Déguisement pour l’heureux élu', 'Manche finale en solo pour l’heureux élu'],
      faq: [
        { q: 'Peut-on venir en groupe de 20 ?', a: 'Oui, sur plusieurs pistes côte à côte. Au-delà, demandez un devis.' },
        { q: 'Les gages sont-ils autorisés ?', a: 'Tant qu’ils respectent les règles de sécurité et les autres clients, oui. Notre équipe a quelques idées.' },
        { q: 'Et après la session ?', a: 'Le bar vous accueille sans limite de temps, et nous pouvons réserver une table.' },
      ],
    },
    afterwork: {
      name: 'Afterwork / corporate',
      badge: '4 à 32 personnes · dès 18 h',
      short: 'Dix-huit heures, la journée est finie. Une piste pour l’équipe, une planche à partager, et la semaine est déjà oubliée.',
      metaTitle: 'Afterwork à Paris 10e : stand de tir et cocktails entre collègues chez Shooters',
      metaDescription:
        'Afterwork original près de République : piste de tir privée pour l’équipe, cocktails et planches à partager. De 4 à 32 personnes, dès 35 € par personne. Soirées d’entreprise sur devis.',
      title: 'L’afterwork qui vise juste',
      lead: 'Un créneau d’une heure après le bureau, une piste pour l’équipe et le bar pour la suite. Simple à organiser, impossible à oublier.',
      why: [
        { title: 'Court et efficace', text: 'Une heure suffit pour une session complète. On arrive à 18 h 30, on trinque à 19 h 45.' },
        { title: 'Pour toutes les équipes', text: 'Pas de niveau requis, pas de tenue spéciale. Le jeu met tout le monde à l’aise, y compris les nouveaux.' },
        { title: 'Une adresse pratique', text: 'À 2 minutes de République, desservi par 5 lignes de métro. Vos collègues rentrent facilement.' },
      ],
      premiumExtra: ['Mini-tournoi inter-équipes avec classement', 'Pistes réservées côte à côte pour toute l’équipe', 'Devis et facture entreprise'],
      premiumNote: 'Soirées d’entreprise, lancements et privatisations : écrivez-nous pour un devis.',
      faq: [
        { q: 'Peut-on réserver plusieurs pistes ?', a: 'Oui, jusqu’à 8 pistes en simultané, soit 32 joueurs. Au-delà, on privatise.' },
        { q: 'Facturez-vous l’entreprise ?', a: 'Oui, devis et facture sur simple demande.' },
      ],
    },
    duo: {
      name: 'En duo',
      badge: '2 personnes · 1 h',
      short: 'Une piste pour deux, un duel à départager et deux cocktails pour fêter la victoire ou consoler la défaite.',
      metaTitle: 'Sortie en duo à Paris : une piste de tir pour deux chez Shooters (République)',
      metaDescription:
        'Une idée de sortie à deux à Paris : une piste de tir privée pour un duel d’une heure, cocktails signature et amuse-bouches. Dès 35 € par personne, à 2 minutes de République.',
      title: 'À deux, chacun sa réplique',
      lead: 'Un rendez-vous, un défi de couple ou une sortie entre deux amis : la piste est à vous pendant une heure, et le bar juste à côté pour débriefer.',
      why: [
        { title: 'Le bon rythme pour deux', text: 'Deux répliques, des manches courtes et un score qui s’affiche en grand : on alterne, on se chambre, on rejoue.' },
        { title: 'Une sortie complète', text: 'Session puis cocktails et planche à partager au bar. Pas besoin de réserver ailleurs ensuite.' },
        { title: 'Une idée cadeau', text: 'La carte cadeau Shooters est valable un an pour une session en duo, pack Standard ou Premium.' },
      ],
      premiumExtra: ['Duel final en mode tournoi', 'Table réservée au bar après la session'],
      faq: [
        { q: 'Peut-on venir à deux sans réserver ?', a: 'Oui si une piste est libre, mais la réservation en ligne garantit votre créneau.' },
        { q: 'Existe-t-il une carte cadeau ?', a: 'Oui, valable un an, disponible sur place et bientôt en ligne.' },
      ],
    },
    friends: {
      name: 'Entre amis',
      badge: '2 à 12 personnes · 1 h',
      short: 'Pas d’occasion particulière, juste l’envie de se voir ailleurs qu’accoudés à un comptoir. Une piste à vous, une réplique chacun, un score à défendre.',
      metaTitle: 'Sortie entre amis à Paris : bar stand de tir Shooters, République',
      metaDescription:
        'Une sortie entre amis différente à Paris 10e : une piste de tir privée pour votre groupe, plus de 10 scénarios, scores en direct, cocktails et amuse-bouches dès 35 € par personne.',
      title: 'Entre amis, la piste est à vous',
      lead: 'En soirée comme en week-end, une heure de jeu sur votre piste privée puis le bar pour prolonger. De 2 à 12 personnes, réservation en ligne.',
      why: [
        { title: 'Tout le monde joue', text: 'Deux répliques par piste, des manches courtes : personne ne regarde les autres jouer.' },
        { title: 'Du débutant au tireur confirmé', text: 'Les niveaux se débloquent avec la précision. Le classement final met tout le monde d’accord.' },
        { title: 'Le bar pour la suite', text: 'Cocktails signature et planches à partager, sur place, jusqu’à minuit du mardi au samedi.' },
      ],
      premiumExtra: ['Classement final de la bande affiché en grand', 'Table réservée au bar après la session'],
      faq: [
        { q: 'À partir de combien de personnes ?', a: 'Dès 2 personnes en pack Standard, dès 4 en pack Premium.' },
        { q: 'Peut-on rester boire un verre après ?', a: 'Bien sûr, le bar est ouvert à tous aux horaires d’ouverture.' },
      ],
    },
  } as Record<OccasionKey, OccasionPage>,

  legalPage: {
    title: 'Mentions légales',
    sections: [
      { title: 'Éditeur du site', text: ['Shooters Paris, société domiciliée 27 boulevard de Magenta, 75010 Paris. RCS Paris 106 922 511.', 'Directeur de la publication : le président de Shooters Paris.', 'Contact : paris@theshootingbar.com'] },
      { title: 'Hébergement', text: ['Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.'] },
      { title: 'Propriété intellectuelle', text: ['La marque Shooters, le logo, les illustrations et les photographies sont protégés. Toute reproduction sans autorisation est interdite.'] },
    ],
  },
  privacyPage: {
    title: 'Politique de confidentialité',
    sections: [
      { title: 'Données collectées', text: ['Le formulaire de contact collecte les données nécessaires au traitement de votre demande (nom, e-mail, téléphone, message). Elles sont conservées 12 mois puis supprimées.'] },
      { title: 'Cookies', text: ['Le site n’utilise pas de cookies publicitaires. Des mesures d’audience anonymisées peuvent être activées ; aucune donnée personnelle n’est transmise à des tiers.'] },
      { title: 'Vos droits', text: ['Vous pouvez demander l’accès, la rectification ou la suppression de vos données en écrivant à paris@theshootingbar.com.'] },
    ],
  },
  termsPage: {
    title: 'Conditions générales de vente',
    sections: [
      { title: 'Réservation', text: ['La réservation d’une piste est confirmée après paiement en ligne ou acompte. Le pack est choisi pour l’ensemble du groupe.'] },
      { title: 'Annulation et modification', text: ['Toute modification de date ou de nombre de participants doit être demandée au plus tard 48 h avant la session. Les sessions non honorées ne sont pas remboursées.'] },
      { title: 'Sécurité', text: ['L’accès au tir est réservé aux personnes de 16 ans et plus. Le port des lunettes de protection est obligatoire. L’équipe peut refuser l’accès à toute personne ne respectant pas les consignes ou en état d’ébriété, sans remboursement.'] },
    ],
  },
  notFound: {
    title: 'Vous avez raté votre coup',
    text: 'Cette page n’existe pas ou a été déplacée.',
    cta: 'Retour à l’accueil',
  },
};

export type Dict = typeof fr;
