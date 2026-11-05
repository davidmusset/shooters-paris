import type { Dict, PackContent, OccasionPage } from './fr';
import type { OccasionKey } from './routes';

export const en: Dict = {
  langName: 'English',
  switchTo: 'Français',
  skip: 'Skip to content',

  nav: {
    concept: 'The concept',
    occasions: 'Occasions',
    pricing: 'Pricing',
    menu: 'Menu',
    venue: 'Find us',
    faq: 'FAQ',
    contact: 'Contact',
    book: 'Book now',
    menuButton: 'Menu',
    close: 'Close',
  },

  meta: {
    home: {
      title: 'Shooters Paris: airsoft shooting bar & cocktails near République (Paris 10e)',
      description:
        "France's first airsoft shooting bar. 8 private lanes, 1:1 airsoft replicas, 20+ game scenarios and a cocktail bar, 3 minutes from République. From €35 per person, ages 16+.",
    },
    concept: {
      title: 'The Shooters concept: a shooting range hidden behind a cocktail bar',
      description:
        'Realistic airsoft replicas, biodegradable 5 mm BBs, real-time impact detection and three game worlds. Discover how Shooters Paris works.',
    },
    pricing: {
      title: 'Shooters Paris pricing: Standard pack €35 and Premium pack €45',
      description:
        '1 hour of shooting on a private lane, full equipment, welcome drink and amuse-bouches from €35 per person. Premium pack with tournament and signature cocktail at €45.',
    },
    menu: {
      title: 'Shooters Paris menu: signature cocktails, sharing boards and bites',
      description:
        'The Shooters Paris bar menu: signature cocktails, beers, wines, soft drinks and sharing boards, served before, during or after your shooting session.',
    },
    venue: {
      title: 'Find Shooters Paris: 27 boulevard de Magenta, métro République',
      description:
        'Address, opening hours, métro access and practical information for Shooters, 27 boulevard de Magenta, Paris 10e, 3 minutes from place de la République.',
    },
    faq: {
      title: 'Shooters Paris FAQ: minimum age, safety, booking, groups',
      description:
        'Everything about the Shooters Paris airsoft shooting bar: minimum age 16, airsoft replica safety, booking, lateness, groups and private hire.',
    },
    contact: {
      title: 'Contact & quotes: Shooters Paris',
      description: 'A question, a group of 12+ or a private event? Write to us, we reply within one business day.',
    },
    book: {
      title: 'Book a lane at Shooters Paris',
      description: 'Book your shooting session at Shooters Paris: pick your date, time slot and pack. Instant confirmation.',
    },
    occasions: {
      title: 'Occasions: team building, birthday, bachelor party, afterwork, duo',
      description:
        'Every occasion has its own format at Shooters Paris: team building, birthdays, bachelor and bachelorette parties, afterwork, a night out for two or with friends.',
    },
    legal: { title: 'Legal notice', description: 'Legal notice for the Shooters Paris website.' },
    privacy: { title: 'Privacy policy', description: 'Privacy and cookie policy for the Shooters Paris website.' },
    terms: { title: 'Terms and conditions', description: 'Shooters Paris terms of sale.' },
    notFound: { title: 'Page not found', description: 'This page does not exist.' },
  },

  hero: {
    title: "France's first airsoft shooting bar",
    lead:
      'Realistic replicas, game scenarios on giant screens and signature cocktails, all in a safe venue 3 minutes from République.',
    ctaBook: 'Book a lane',
    ctaHow: 'How does it work?',
    opening: 'Opening 26 November 2026 · 27 boulevard de Magenta, Paris 10e',
  },

  facts: [
    { value: '8', label: 'private lanes' },
    { value: 'From €35', label: 'per person, drink included' },
    { value: '1 h', label: 'sessions, 2 to 32 players' },
    { value: '16+', label: 'minimum age, 100% safe' },
  ],

  steps: {
    title: 'How does it work?',
    items: [
      {
        title: 'Book your lane',
        text: 'Pick your time slot online in two minutes. Your private lane is waiting, for 2 to 32 players.',
      },
      {
        title: 'Shoot, challenge, replay',
        text: 'Two authentic airsoft rifles per lane, 20+ game scenarios and live scoring. Beginner or seasoned shooter, there is something for everyone!',
      },
      {
        title: 'Raise a glass before, during or after',
        text: 'Welcome drink, signature cocktails and sharing boards, served at the bar or straight to your lane.',
      },
    ],
  },

  concept: {
    title: 'A shooting range hidden behind a cocktail bar',
    text: [
      'At Shooters you handle real 1:1 airsoft replicas with genuine recoil, firing biodegradable 5 mm BBs at giant screens. A detection system tracks every impact and shows your performance live.',
      'Between rounds, you put the replica down and pick your glass up. It is the only address in Paris where a precision duel and a cocktail happen in the same room.',
    ],
    cta: 'Discover the concept',
  },

  games: {
    title: 'Three worlds, 20+ scenarios',
    lead: 'Every lane gives access to all the games. Start with precision, finish with the tournament.',
    items: [
      {
        name: 'The Range',
        text: 'Pure precision. You against the target: speed, distance, difficulty. Every shot is a challenge and your aim sharpens with each round.',
      },
      {
        name: 'The Playground',
        text: 'Clay pigeons, wild ducks, moving targets: childhood meets adulthood, recreated outdoors on a giant screen. Casual, competitive, nostalgic.',
      },
      {
        name: 'The Bar',
        text: 'Shoot bottles, blast cards, challenge your friends in duels, teams or free-for-all. Unlock levels; the leaderboard never lies.',
      },
    ],
  },

  bar: {
    title: 'Signature cocktails, boards to share',
    text: [
      'Shooters is a bar first. Signature cocktails, beers, selected wines and homemade boards, enjoyed at the counter or on your lane during the session.',
      'No need to shoot to come for a drink: the bar is open to everyone during opening hours.',
    ],
    cta: 'See the menu',
  },

  occasions: {
    title: 'Every occasion, its own format',
    lead: 'A birthday, a team building or simply the urge to meet somewhere other than a counter: we adapt the format, the packs and the bar.',
    more: 'See the format',
    note: {
      title: 'Just here for a drink?',
      text: 'The bar is open to everyone, no booking needed, during opening hours. You can still grab a lane on the spot if one is free.',
    },
  },

  packs: {
    title: 'Two packs, one price per person',
    lead: 'Everything is included: the private lane for 1 hour, full equipment, ammunition, a drink and amuse-bouches.',
    perPerson: 'per person',
    standard: {
      name: 'Standard pack',
      price: '€35',
      per: 'per person',
      intro: 'Perfect to discover the activity.',
      items: [
        '1 hour of shooting on a private lane',
        'Full equipment included',
        '1 welcome drink per person',
        'Amuse-bouche buffet',
        '2 replicas, 20+ game scenarios',
      ],
      from: 'From 2 players',
      cta: 'Book Standard',
    } as PackContent,
    premium: {
      name: 'Premium pack',
      price: '€45',
      per: 'per person',
      intro: 'For groups who want a real tournament.',
      items: [
        '1 hour of shooting on private lanes',
        '1 welcome drink + 1 signature cocktail per person',
        'Premium amuse-bouche buffet',
        '2 replicas, full equipment, unlimited ammunition',
        'Tournament with live scoring, best shooter prize',
        'Team trophy and group photo',
      ],
      from: 'From 4 players',
      cta: 'Book Premium',
    } as PackContent,
    custom: {
      name: 'Tailor-made',
      price: 'On quote',
      per: '',
      intro: 'A private room for your group, or the whole venue.',
      items: ['Private room of 80 m² with 3 lanes, up to 12 people', 'Full private hire: 8 lanes, up to 32 players', 'Custom catering and open bar', 'Tournament hosted by our team'],
      from: 'Reply within one business day',
      cta: 'Request a quote',
    } as PackContent,
    footnote: 'Prices include VAT. The pack is chosen for the whole group when booking.',
  },

  safety: {
    title: 'Real guns, real fun, real safe',
    items: [
      {
        title: 'Real replicas',
        text: '1:1 replicas with authentic mechanics, real recoil and 5 mm BBs fired at 110 m/s. Every shot is built for precision.',
      },
      {
        title: 'Real play',
        text: 'Thrilling scenarios, live scores and gameplay that makes you want to go again. You laugh, you challenge, you celebrate.',
      },
      {
        title: 'Real safety',
        text: 'Non-lethal biodegradable BBs, enclosed lanes, protective glasses provided and staff present at all times. As safe as a funfair stand.',
      },
    ],
  },

  faq: {
    title: 'Everything you need to know',
    more: 'See the full FAQ',
    items: [
      {
        q: 'What is Shooters?',
        a: 'A cocktail bar with an airsoft shooting range hidden behind it: 8 private lanes where you shoot realistic replicas at scenarios projected on giant screens, live scoring included. The first of its kind in France, after Brussels.',
      },
      {
        q: 'Are the replicas real weapons?',
        a: 'No. They are 1:1 airsoft replicas firing biodegradable 5 mm BBs at 110 m/s. They are non-lethal, used in enclosed lanes, with protective glasses provided.',
      },
      {
        q: 'Do I need to know how to shoot?',
        a: 'Not at all. Our team briefs you on arrival and the first scenarios are designed to learn while playing. Live scores do the rest.',
      },
      {
        q: 'What is the minimum age?',
        a: 'Shooting is open from age 16. The bar is open to everyone, but alcohol is for adults only.',
      },
      {
        q: 'Does my group get its own lane?',
        a: 'Yes, always. Every booking gets a private lane for 1 hour, with two replicas. Large groups are spread across adjacent lanes.',
      },
      {
        q: 'How many people per lane?',
        a: '2 to 4 players per lane so everyone shoots enough. Beyond that we assign several lanes, up to 32 players at once. Even more? Ask for a private hire quote.',
      },
      {
        q: 'Can I come without shooting?',
        a: 'Yes. The bar is open to everyone during opening hours, no booking needed. Companions can also stay by the lane to cheer.',
      },
      {
        q: 'Do I need to book?',
        a: 'Online booking is strongly recommended, especially at weekends. Without a booking, we give you a lane if one is available.',
      },
      {
        q: 'What if I am late?',
        a: 'Let us know. The next slot may be booked by another group: we will do our best to shift, otherwise your session will be shortened.',
      },
      {
        q: 'Can I drink alcohol before shooting?',
        a: 'In moderation. Our team may refuse lane access to anyone visibly intoxicated, without refund.',
      },
      {
        q: 'Is there a dress code?',
        a: 'No. Just wear something comfortable to shoulder a replica. Protective glasses are provided.',
      },
      {
        q: 'Do you host private events?',
        a: 'Yes: team buildings, birthdays, bachelor and bachelorette parties and corporate evenings. A private room of 80 m² with 3 lanes hosts up to 12 people, and the whole venue can be hired (8 lanes, 32 players). Write to us with the date and headcount, we reply within one business day.',
      },
    ],
  },

  venue: {
    title: 'Find Shooters',
    addressLine: '27 boulevard de Magenta, 75010 Paris',
    nearby: 'Right by métro Jacques Bonsergent, 3 minutes from République',
    metroTitle: 'Métro',
    metro: [
      { name: 'Jacques Bonsergent', lines: ['5'], walk: 'at the door' },
      { name: 'République', lines: ['3', '5', '8', '9', '11'], walk: '3 min' },
      { name: "Gare de l'Est", lines: ['4', '5', '7'], walk: '8 min' },
    ],
    hoursTitle: 'Opening hours',
    closed: 'Closed',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    hoursSummary: ['Tuesday to Saturday: 3 pm to midnight', 'Sunday: 3 pm to 10 pm', 'Closed on Monday'],
    practicalTitle: 'Practical info',
    practical: ['Shooting from age 16', 'Protective glasses provided', 'Wheelchair accessible', 'Bar open to everyone, no booking needed'],
    mapCta: 'Open in Google Maps',
    cta: 'Book a lane',
  },

  ctaBand: {
    title: 'Ready to take the lane?',
    text: 'Book your slot online, or write to us for a group or a private event.',
    book: 'Book now',
    contact: 'Request a quote',
  },

  footer: {
    tagline: 'Airsoft shooting bar & cocktails',
    hoursTitle: 'Opening hours',
    navTitle: 'Navigation',
    infoTitle: 'Info',
    legal: 'Legal notice',
    privacy: 'Privacy',
    terms: 'Terms',
    rights: 'All rights reserved',
    instagram: 'Instagram',
  },

  conceptPage: {
    title: 'The concept',
    lead: 'Italian statues, English woodwork and lush greenery: behind the bar, eight shooting lanes are waiting.',
    sections: [
      {
        title: 'Airsoft, reinvented for a bar',
        text: [
          'Airsoft is a leisure activity using replica guns that fire small plastic BBs. Unlike paintball, it is all about realism: authentic replicas, real recoil, safe BBs designed for play.',
          'At Shooters, the activity is brought into an enclosed, comfortable and supervised setting: a private lane, a giant screen and a detection system tracking every impact to the millimetre.',
        ],
      },
      {
        title: 'One lane, one screen, one score',
        text: [
          'Each lane has two replicas, a giant screen and a tablet to launch scenarios. You pick the game, the level, the mode (solo, duel, team) and the score shows live.',
          '20+ scenarios are available from day one, from the classic range to wild ducks and bottle shooting. Levels unlock as your accuracy improves.',
        ],
      },
      {
        title: 'A bar, for real',
        text: [
          'The bar is not an afterthought: signature cocktails, beers, wines and sharing boards make up a menu designed to last the whole evening, long after the last target.',
          'You can come just for a drink, or order straight to your lane during the session.',
        ],
      },
    ],
    cta: 'See pricing',
  },

  pricingPage: {
    title: 'Pricing',
    lead: 'One price per person, all inclusive. Choose the pack for the whole group when you book.',
    includedTitle: 'In every pack',
    included: [
      'A private lane for 1 hour',
      'Two replicas and full equipment',
      'Protective glasses',
      'Safety briefing and help from our team',
      '20+ game scenarios and live scores',
    ],
    giftTitle: 'Give Shooters',
    giftText: 'A gift card valid for one year, for a session for two or the whole gang. Online soon, available now at the venue.',
  },

  menuPage: {
    title: 'The menu',
    lead: 'Cocktails, mocktails, draught beers, wines by the glass and sharing boards. The menu is served at the bar and on the lanes.',
    download: 'Download the menu (PDF)',
    sections: [
      {
        title: 'Cocktails and mocktails',
        text: 'The classics done right: Basil Smash, Pornstar Martini, Espresso Martini, Moscow Mule, Strawberry Daiquiri, Aperol Spritz, Passion Sunrise (€12). Four house mocktails at €8, including the Virgin Ginger Mule and the Virgin Passion Sunrise.',
      },
      {
        title: 'Beers, wines and champagnes',
        text: 'LBF Pale Ale and IPA on draught, Monaco, Picon beer, cider and alcohol-free beer. Organic wines by the glass from €6 (Rhône, Pays d’Oc, Corsica), fine bottles up to a Châteauneuf-du-Pape magnum, EPC Brut and Blanc de Blancs champagnes.',
      },
      {
        title: 'Boards and bites',
        text: 'Homemade guacamole and hummus (€8), truffle stracciatella (€12), Italian charcuterie or aged cheese boards (€24) and the mixed board (€25), to share between rounds.',
      },
    ],
    note: 'Prices include VAT, menu subject to change. Please drink responsibly.',
  },

  privateSpace: {
    title: 'The private room: 80 m², 3 lanes, up to 12 people',
    text: 'A room just for your group, with its three shooting lanes, its table and dedicated service. Ideal for a birthday, a team afterwork or a bachelor party, without hiring the whole venue. Beyond 12 people, the entire bar can be hired with its 8 lanes.',
    cta: 'Request a quote',
  },

  contactPage: {
    title: 'Contact & quotes',
    lead: 'For a group, a private event or a simple question. We reply within one business day.',
    form: {
      name: 'Full name',
      email: 'Email',
      phone: 'Phone (optional)',
      company: 'Company (optional)',
      occasion: 'Occasion',
      occasions: ['With friends', 'Birthday', 'Bachelor / bachelorette', 'Team building', 'Afterwork / corporate evening', 'Private hire', 'Other'],
      date: 'Preferred date',
      people: 'Number of people',
      message: 'Your message',
      consent: 'I agree that my data is used to process my request.',
      submit: 'Send request',
      sending: 'Sending…',
      success: 'Request sent. We will get back to you within one business day.',
      error: 'Sending failed. Email us directly at',
    },
    directTitle: 'Email us directly',
    directText: 'Prefer email? Send the date, headcount and occasion, we handle the rest.',
  },

  bookPage: {
    title: 'Book a lane',
    lead: 'Pick your date, time slot and pack. Instant confirmation by email.',
    placeholder: 'Booking module',
    placeholderText: 'The online booking module will be embedded here.',
    altTitle: 'In the meantime',
    altText: 'Book by email with the date, preferred time, number of players and chosen pack.',
    altCta: 'Book by email',
    groupsTitle: 'More than 12 people?',
    groupsText: 'For large groups and private hire, use the quote form.',
    groupsCta: 'Request a quote',
  },

  faqPage: {
    title: 'Frequently asked questions',
    lead: 'Everything you need to know before coming. Missing an answer? Write to us.',
  },

  occasionsPage: {
    title: 'Every occasion, its own format',
    lead: 'Pick your occasion: we show you the format, the recommended pack and what we add for the event.',
  },

  occasionCommon: {
    packsTitle: 'Packs for this occasion',
    whyTitle: 'Why Shooters for this occasion',
    faqTitle: 'Frequently asked questions',
    standardAdds: 'Included in the Standard pack',
    premiumAdds: 'Added in the Premium pack',
    ctaBook: 'Book now',
    ctaQuote: 'Request a quote',
    otherTitle: 'Other occasions',
  },

  occasionPages: {
    teamBuilding: {
      name: 'Team building',
      badge: '4 to 32 people · 1 to 2 h',
      short: 'Turn colleagues into teammates, or rivals. Team tournament with live ranking, cocktails and sharing boards.',
      metaTitle: 'Team building in Paris: shooting tournament and cocktails at Shooters (République)',
      metaDescription:
        'An original team building in Paris 10e: shooting tournament on private lanes with live scores, cocktails and amuse-bouches. 4 to 32 people, from €35 per person, private hire available.',
      title: 'A team building that puts everyone on the same line',
      lead: 'The shooting range flattens hierarchies: you do not win because you are the manager, you win because you are accurate. Team tournament, live scores, prize-giving at the bar.',
      why: [
        { title: 'A format that always works', text: 'No need to be sporty or a gamer. The briefing takes five minutes, the first scenario gets everyone laughing, the tournament does the rest.' },
        { title: 'Mixed teams', text: 'We build the teams with you to break silos. Each round is short: everyone shoots, everyone counts.' },
        { title: 'A real bar moment', text: 'Prizes are handed out at the counter, trophy in hand, over cocktails and boards. That is where conversations carry on.' },
        { title: 'Easy to organise', text: 'One contact, a quote within one business day, one invoice. 3 minutes from République, reachable from all of Île-de-France.' },
      ],
      premiumExtra: ['Team tournament hosted by our staff', 'Teams built with you to mix departments', 'Company quote and invoice'],
      premiumNote: 'For groups of 12+, we recommend the Premium pack or a private hire.',
      faq: [
        { q: 'How long should we plan?', a: 'Count 1 hour of shooting per lane. For 20 to 32 people, plan 2 hours on site with welcome, tournament and prize-giving.' },
        { q: 'Can you invoice the company?', a: 'Yes. Quote, invoice and payment by transfer or card. A 30% deposit confirms the booking.' },
        { q: 'Can we add food?', a: 'Yes: board buffet, cocktail dinner formulas or open bar on quote.' },
      ],
    },
    birthday: {
      name: 'Birthday',
      badge: '2 to 32 people · ages 16+',
      short: 'A lane in your name, scores to settle and drinks between every round. Cake and decorations on request.',
      metaTitle: 'Birthday in Paris: celebrate at the Shooters airsoft shooting bar (République)',
      metaDescription:
        'Celebrate your birthday at Shooters Paris: private shooting lane, live scores, cocktails and amuse-bouches. 2 to 32 people from age 16, 3 minutes from République.',
      title: 'A birthday you will not celebrate twice',
      lead: 'Forget the reserved table in a packed bar. At Shooters, the gang gets its lane, its leaderboard and a bar two metres away.',
      why: [
        { title: 'The gang gets its lane', text: 'Your group has one or more private lanes for 1 hour, with two replicas and every scenario.' },
        { title: 'A personal touch', text: 'The birthday name on the leaderboard, a welcome cocktail and, if you like, your cake served at the bar.' },
        { title: 'It carries on at the bar', text: 'The session naturally extends over cocktails and boards. No need to change address afterwards.' },
      ],
      premiumExtra: ['"Whole gang" tournament with final ranking', 'The birthday name on the leaderboard', 'Your cake kept cool and served at the bar'],
      faq: [
        { q: 'Can we bring a cake?', a: 'Yes, let us know when booking. We keep it cool and serve it at the bar.' },
        { q: 'Can my 16-year-old friends shoot?', a: 'Yes, shooting is open from age 16. Alcohol is for adults only.' },
        { q: 'Can we decorate?', a: 'Light decoration on your lane is possible on request. With a private hire, anything goes.' },
      ],
    },
    bachelor: {
      name: 'Bachelor / bachelorette',
      badge: '4 to 20 people · 1 h or 1.5 h',
      short: 'You arrive, the lane is in your name, the round of shots is waiting. The bride or groom-to-be is the target all session long.',
      metaTitle: 'Bachelor & bachelorette party in Paris: shooting range and cocktails at Shooters',
      metaDescription:
        'Bachelor or bachelorette party at Shooters Paris: shooting tournament on a private lane, round of shots, costume for the lucky one, cocktails. 4 to 20 people, from €35.',
      title: 'One party, one target',
      lead: 'An hour of duels between friends, scores displayed large and a round of shots to settle it. The bride or groom-to-be shoots last, under pressure.',
      why: [
        { title: 'A highlight, not another bar', text: 'Competition makes the memories: dares are settled at the target and the leaderboard keeps the record.' },
        { title: 'A ritual for the lucky one', text: 'Costume provided in the Premium pack, a round of shots for the whole gang and a solo final round in front of everyone.' },
        { title: 'Easy to fit in the day', text: '3 minutes from République, next to the bars of canal Saint-Martin and the 11e. Ideal early evening.' },
      ],
      premiumExtra: ['Round of shots for the whole gang', 'Costume for the lucky one', 'Solo final round for the lucky one'],
      faq: [
        { q: 'Can we come as a group of 20?', a: 'Yes, on several adjacent lanes. Beyond that, ask for a quote.' },
        { q: 'Are dares allowed?', a: 'As long as they respect safety rules and other guests, yes. Our team has a few ideas.' },
        { q: 'And after the session?', a: 'The bar welcomes you with no time limit, and we can reserve a table.' },
      ],
    },
    afterwork: {
      name: 'Afterwork / corporate',
      badge: '4 to 32 people · from 6 pm',
      short: 'Six o’clock, the day is done. A lane for the team, a board to share, and the week is already forgotten.',
      metaTitle: 'Afterwork in Paris 10e: shooting range and cocktails with colleagues at Shooters',
      metaDescription:
        'An original afterwork near République: private shooting lane for the team, cocktails and sharing boards. 4 to 32 people, from €35 per person. Corporate evenings on quote.',
      title: 'The afterwork that hits the mark',
      lead: 'A one-hour slot after the office, a lane for the team and the bar for what comes next. Easy to organise, impossible to forget.',
      why: [
        { title: 'Short and effective', text: 'One hour is enough for a full session. Arrive at 6.30 pm, raise a glass at 7.45 pm.' },
        { title: 'For every team', text: 'No skill level required, no special outfit. The game puts everyone at ease, newcomers included.' },
        { title: 'A convenient address', text: '3 minutes from République, served by 5 métro lines. Your colleagues get home easily.' },
      ],
      premiumExtra: ['Mini inter-team tournament with ranking', 'Adjacent lanes reserved for the whole team', 'Company quote and invoice'],
      premiumNote: 'Corporate evenings, launches and private hire: write to us for a quote.',
      faq: [
        { q: 'Can we book several lanes?', a: 'Yes, up to 8 lanes at once, i.e. 32 players. Beyond that, we go private.' },
        { q: 'Do you invoice companies?', a: 'Yes, quote and invoice on request.' },
      ],
    },
    duo: {
      name: 'For two',
      badge: '2 people · 1 h',
      short: 'A lane for two, a duel to settle and two cocktails to celebrate the win or soften the loss.',
      metaTitle: 'A night out for two in Paris: a shooting lane for two at Shooters (République)',
      metaDescription:
        'A date idea in Paris: a private shooting lane for a one-hour duel, signature cocktails and amuse-bouches. From €35 per person, 3 minutes from République.',
      title: 'For two, a replica each',
      lead: 'A date, a couple challenge or a night out with a friend: the lane is yours for an hour, with the bar right next door for the debrief.',
      why: [
        { title: 'The right pace for two', text: 'Two replicas, short rounds and a score displayed large: you alternate, you tease, you replay.' },
        { title: 'A complete night out', text: 'Session, then cocktails and a board to share at the bar. No need to book anywhere else afterwards.' },
        { title: 'A gift idea', text: 'The Shooters gift card is valid for one year for a session for two, Standard or Premium pack.' },
      ],
      premiumExtra: ['Final duel in tournament mode', 'A table reserved at the bar after the session'],
      faq: [
        { q: 'Can two of us come without booking?', a: 'Yes if a lane is free, but online booking guarantees your slot.' },
        { q: 'Is there a gift card?', a: 'Yes, valid for one year, available at the venue and online soon.' },
      ],
    },
    friends: {
      name: 'With friends',
      badge: '2 to 12 people · 1 h',
      short: 'No particular occasion, just the urge to meet somewhere other than leaning on a counter. A lane of your own, a replica each, a score to defend.',
      metaTitle: 'A night out with friends in Paris: Shooters airsoft shooting bar, République',
      metaDescription:
        'A different night out with friends in Paris 10e: a private shooting lane for your group, 20+ scenarios, live scores, cocktails and amuse-bouches from €35 per person.',
      title: 'With friends, the lane is yours',
      lead: 'Evenings and weekends, an hour of play on your private lane then the bar to carry on. 2 to 12 people, online booking.',
      why: [
        { title: 'Everyone plays', text: 'Two replicas per lane, short rounds: nobody watches the others play.' },
        { title: 'From beginner to marksman', text: 'Levels unlock with accuracy. The final ranking settles every argument.' },
        { title: 'The bar for afterwards', text: 'Signature cocktails and sharing boards, on site, until midnight Tuesday to Saturday.' },
      ],
      premiumExtra: ['The gang’s final ranking displayed large', 'A table reserved at the bar after the session'],
      faq: [
        { q: 'From how many people?', a: 'From 2 people with the Standard pack, from 4 with the Premium pack.' },
        { q: 'Can we stay for a drink afterwards?', a: 'Of course, the bar is open to everyone during opening hours.' },
      ],
    },
  } as Record<OccasionKey, OccasionPage>,

  legalPage: {
    title: 'Legal notice',
    sections: [
      { title: 'Publisher', text: ['Shooters Paris, registered at 27 boulevard de Magenta, 75010 Paris, France. RCS Paris 106 922 511.', 'Publication director: the president of Shooters Paris.', 'Contact: paris@theshootingbar.com'] },
      { title: 'Hosting', text: ['Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.'] },
      { title: 'Intellectual property', text: ['The Shooters brand, logo, illustrations and photographs are protected. Any reproduction without permission is prohibited.'] },
    ],
  },
  privacyPage: {
    title: 'Privacy policy',
    sections: [
      { title: 'Data collected', text: ['The contact form collects the data needed to process your request (name, email, phone, message). It is kept for 12 months then deleted.'] },
      { title: 'Cookies', text: ['The site uses no advertising cookies. Anonymised audience measurement may be enabled; no personal data is passed to third parties.'] },
      { title: 'Your rights', text: ['You can request access to, correction or deletion of your data by writing to paris@theshootingbar.com.'] },
    ],
  },
  termsPage: {
    title: 'Terms and conditions',
    sections: [
      { title: 'Booking', text: ['A lane booking is confirmed after online payment or deposit. The pack is chosen for the whole group.'] },
      { title: 'Cancellation and changes', text: ['Any change of date or headcount must be requested at least 48 hours before the session. No-shows are not refunded.'] },
      { title: 'Safety', text: ['Shooting is reserved for people aged 16 and over. Protective glasses are mandatory. Staff may refuse access to anyone not following instructions or visibly intoxicated, without refund.'] },
    ],
  },
  notFound: {
    title: 'You missed your shot',
    text: 'This page does not exist or has moved.',
    cta: 'Back to home',
  },
};
