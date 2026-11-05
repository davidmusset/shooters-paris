import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.jpg', { eager: true });

/** Retourne les métadonnées d'une photo de /src/assets/photos par son nom (sans extension). */
export function photo(name: string): ImageMetadata {
  const key = Object.keys(files).find((k) => k.endsWith(`/${name}.jpg`));
  if (!key) throw new Error(`Photo introuvable : ${name}`);
  return files[key].default;
}

/** Légendes alt par photo et par langue (accessibilité + SEO images). */
export const ALT: Record<string, { fr: string; en: string }> = {
  'hero-lane-woman': { fr: 'Une joueuse vise une cible sur écran géant dans une piste Shooters', en: 'A player aims at a giant-screen target in a Shooters lane' },
  'hero-lane-woman-2': { fr: 'Joueuse en position de tir sur une piste Shooters', en: 'Player in shooting position on a Shooters lane' },
  'ambiance-candles': { fr: 'Piste de tir Shooters éclairée à la bougie, joueuse en action', en: 'Candle-lit Shooters lane, player in action' },
  'ambiance-duel': { fr: 'Duel sur une piste Shooters', en: 'Duel on a Shooters lane' },
  'ambiance-lane-dark': { fr: 'Ambiance feutrée d’une piste Shooters', en: 'Moody atmosphere of a Shooters lane' },
  'ambiance-barman': { fr: 'Le barman de Shooters derrière le comptoir', en: 'The Shooters bartender behind the counter' },
  'gc-tray-decanter': { fr: 'Plateau avec carafe, cocktail et réplique de pistolet', en: 'Tray with decanter, cocktail and pistol replica' },
  'gc-tray-decanter-2': { fr: 'Carafe en cristal, cocktail et réplique sur plateau doré', en: 'Crystal decanter, cocktail and replica on a golden tray' },
  'gc-red-cocktail-rifle': { fr: 'Cocktail rouge posé à côté d’une réplique de fusil', en: 'Red cocktail next to a rifle replica' },
  'gc-rifle-table': { fr: 'Réplique de fusil et cocktail sur la table d’une piste', en: 'Rifle replica and cocktail on a lane table' },
  'gc-rifle-table-2': { fr: 'Réplique et cocktail sur une table en bois', en: 'Replica and cocktail on a wooden table' },
  'gc-green-cocktail-rifle': { fr: 'Cocktail vert et réplique de fusil', en: 'Green cocktail and rifle replica' },
  'gc-duel-light': { fr: 'Deux joueurs en duel dans la lumière', en: 'Two players duelling in the light' },
  'gc-heel-olives': { fr: 'Verre de vin, olives et réplique de pistolet', en: 'Glass of wine, olives and pistol replica' },
  'gc-tray-waiter': { fr: 'Serveur présentant un plateau cocktail chez Shooters', en: 'Waiter presenting a cocktail tray at Shooters' },
  'gc-tray-candles': { fr: 'Plateau cocktail à la lueur des bougies', en: 'Cocktail tray by candlelight' },
  'gc-column-rifle': { fr: 'Colonne antique, réplique de fusil et cocktail rose', en: 'Antique column, rifle replica and pink cocktail' },
  'food-table-rifle': { fr: 'Table garnie de planches, cocktails et réplique', en: 'Table laid with boards, cocktails and a replica' },
  'food-green-cocktail': { fr: 'Cocktail vert, carafe et amuse-bouches', en: 'Green cocktail, decanter and bites' },
  'food-table-top': { fr: 'Planches à partager vues de dessus', en: 'Sharing boards seen from above' },
  'food-table-top-2': { fr: 'Table ronde avec planches et cocktails', en: 'Round table with boards and cocktails' },
  'food-charcuterie': { fr: 'Planche de charcuterie et verre de vin', en: 'Charcuterie board and glass of wine' },
  'food-cheese': { fr: 'Planche de fromages et cocktail', en: 'Cheese board and cocktail' },
  'cocktail-orange': { fr: 'Cocktail à l’orange sur glace', en: 'Orange cocktail on ice' },
  'cocktail-green': { fr: 'Cocktail vert au basilic', en: 'Green basil cocktail' },
  'cocktail-tonic': { fr: 'Gin tonic au citron déshydraté', en: 'Gin and tonic with dried lemon' },
  'cocktail-hands': { fr: 'Cocktails servis au bar Shooters', en: 'Cocktails served at the Shooters bar' },
  'player-lane-109': { fr: 'Joueur épaulant une réplique sur une piste Shooters', en: 'Player shouldering a replica on a Shooters lane' },
  'player-lane-112': { fr: 'Deux joueurs devant l’écran géant d’une piste', en: 'Two players in front of a lane’s giant screen' },
  'player-lane-116': { fr: 'Joueuse prenant une réplique en main', en: 'Player picking up a replica' },
  'player-lane-118': { fr: 'Joueur visant une cible', en: 'Player aiming at a target' },
  'player-trio-136': { fr: 'Trois amis posant avec une réplique', en: 'Three friends posing with a replica' },
  'player-duo-60': { fr: 'Un duo posant avec des répliques', en: 'A duo posing with replicas' },
  'player-table-64': { fr: 'Groupe d’amis attablés au bar', en: 'Group of friends at a bar table' },
  'player-group-159': { fr: 'Groupe d’amis réunis chez Shooters', en: 'Group of friends gathered at Shooters' },
  'player-group-79': { fr: 'Groupe d’amis trinquant chez Shooters', en: 'Group of friends toasting at Shooters' },
  'player-group-80': { fr: 'Soirée entre amis chez Shooters', en: 'Night out with friends at Shooters' },
  'player-group-86': { fr: 'Amis souriants en soirée', en: 'Smiling friends on a night out' },
  'player-bar-125': { fr: 'Clients au bar avec un cocktail', en: 'Guests at the bar with a cocktail' },
  'player-bar-141': { fr: 'Discussion au bar Shooters', en: 'Conversation at the Shooters bar' },
  'player-tablet-143': { fr: 'Tablette de lancement des scénarios', en: 'Tablet used to launch scenarios' },
  'player-entrance-56': { fr: 'Entrée d’une piste Shooters', en: 'Entrance of a Shooters lane' },
  'player-screen-75': { fr: 'Joueurs devant l’écran d’accueil d’une piste', en: 'Players in front of a lane welcome screen' },
  'player-152': { fr: 'Clients en soirée chez Shooters', en: 'Guests at Shooters in the evening' },
  'player-145': { fr: 'Collègues en afterwork chez Shooters', en: 'Colleagues at an afterwork at Shooters' },
  'player-couple-73': { fr: 'Couple au bar Shooters', en: 'Couple at the Shooters bar' },
  'player-lane-52': { fr: 'Joueur en tenue sombre sur une piste', en: 'Player in dark outfit on a lane' },
  'game-duck': { fr: 'Scénario Le Terrain de jeu : canards sauvages', en: 'Playground scenario: wild ducks' },
  'game-clay': { fr: 'Scénario Le Terrain de jeu : ball-trap', en: 'Playground scenario: clay pigeons' },
  'game-targets': { fr: 'Scénario Le Stand : cibles de précision', en: 'Range scenario: precision targets' },
  'game-cards': { fr: 'Scénario Le Bar : cartes à jouer', en: 'Bar scenario: playing cards' },
  'game-bottles': { fr: 'Scénario Le Bar : bouteilles', en: 'Bar scenario: bottles' },
};

export function alt(name: string, lang: 'fr' | 'en'): string {
  return ALT[name]?.[lang] ?? '';
}

/** Photo de vignette par occasion. */
export const OCCASION_PHOTO: Record<string, string> = {
  teamBuilding: 'player-group-79',
  birthday: 'player-group-86',
  bachelor: 'player-duo-60',
  afterwork: 'player-145',
  duo: 'player-couple-73',
  friends: 'player-trio-136',
};

/** Photo de hero par occasion (format paysage). */
export const OCCASION_HERO: Record<string, string> = {
  teamBuilding: 'player-group-159',
  birthday: 'player-group-80',
  bachelor: 'ambiance-duel',
  afterwork: 'player-lane-112',
  duo: 'ambiance-candles',
  friends: 'hero-lane-woman-2',
};
