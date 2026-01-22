export type GalleryCategory = 'party' | 'ballermann' | 'funny' | 'action';

export interface GalleryImage {
  id: string;
  src: string;
  category: GalleryCategory;
  caption: string;
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  // PARTY SCENES
  {
    id: 'party-01',
    src: '/gallery/party-crowd.jpeg',
    category: 'party',
    caption: 'Massenschlägerei am Bierstrand! 🍻',
    alt: 'Beton Benny inmitten jubelnder Menschenmenge'
  },
  {
    id: 'party-02',
    src: '/gallery/party-hug.jpeg',
    category: 'party',
    caption: 'Gruppenumarmung nach 17 Bier 🤗',
    alt: 'Gruppenfoto mit Fans'
  },
  {
    id: 'party-03',
    src: '/gallery/party-pyramid.jpeg',
    category: 'party',
    caption: 'Menschenpyramide - Statik? Egal! 🏗️',
    alt: 'Menschenpyramide am Strand'
  },
  {
    id: 'party-04',
    src: '/gallery/party-parade.jpeg',
    category: 'party',
    caption: 'Polonaise durch die Schinkenstraße 🎉',
    alt: 'Straßenparade mit Beton Benny'
  },
  {
    id: 'party-05',
    src: '/gallery/party-hats.jpeg',
    category: 'party',
    caption: 'Strohhut-Gang versammelt sich! 🤠',
    alt: 'Menschenmenge mit Strohhüten'
  },
  {
    id: 'party-06',
    src: '/gallery/party-polonaise.png',
    category: 'party',
    caption: 'Polonaise-Leader in Action! 🐍',
    alt: 'Polonaise anführen'
  },
  {
    id: 'party-07',
    src: '/gallery/party-shirt.jpeg',
    category: 'party',
    caption: 'Shirt-Waving beim Auftritt! 👕',
    alt: 'T-Shirt schwenken'
  },
  {
    id: 'party-08',
    src: '/gallery/party-matching.png',
    category: 'party',
    caption: 'Matching Outfits mit der Crew! 👔',
    alt: 'Gruppenfoto mit gleichen Shirts'
  },
  // BALLERMANN VIBES
  {
    id: 'ballermann-01',
    src: '/gallery/ballermann-entrance.jpeg',
    category: 'ballermann',
    caption: 'Mega-Park Eingang - Hier geht die Post ab! 🎪',
    alt: 'Eingang zum Mega-Park'
  },
  {
    id: 'ballermann-02',
    src: '/gallery/ballermann-promenade.jpeg',
    category: 'ballermann',
    caption: 'Promenade Walk of Fame 🌴',
    alt: 'Spaziergang auf der Promenade'
  },
  {
    id: 'ballermann-03',
    src: '/gallery/ballermann-beach.png',
    category: 'ballermann',
    caption: 'Chillen am Strand nach 8h Feiern 😴',
    alt: 'Entspannen am Strand'
  },
  {
    id: 'ballermann-04',
    src: '/gallery/ballermann-balcony.png',
    category: 'ballermann',
    caption: 'Balkon-Serenade für die Fans! 🎤',
    alt: 'Balkon-Auftritt'
  },
  {
    id: 'ballermann-05',
    src: '/gallery/ballermann-cheers.png',
    category: 'ballermann',
    caption: 'Cheers zum Meer! 🌊',
    alt: 'Anstoßen am Strand'
  },
  {
    id: 'ballermann-06',
    src: '/gallery/ballermann-bratwurst.jpeg',
    category: 'ballermann',
    caption: 'Bratwurst-Stand - deutsche Tradition! 🌭',
    alt: 'An der Bratwurst-Bude'
  },
  {
    id: 'ballermann-07',
    src: '/gallery/ballermann-vendor.jpeg',
    category: 'ballermann',
    caption: 'Vendor Interaction - immer freundlich! 🤝',
    alt: 'Gespräch mit Verkäufer'
  },
  {
    id: 'ballermann-08',
    src: '/gallery/ballermann-kiosk.jpeg',
    category: 'ballermann',
    caption: 'Kiosk-Stop für Nachschub! 🏪',
    alt: 'Am Kiosk'
  },

  // FUNNY MOMENTS
  {
    id: 'funny-01',
    src: '/gallery/funny-bucket.png',
    category: 'funny',
    caption: 'Eimer-Drinking: Hydration Level 9000! 🪣',
    alt: 'Trinken aus einem Eimer'
  },
  {
    id: 'funny-02',
    src: '/gallery/funny-beer-shower.png',
    category: 'funny',
    caption: 'Bier-Dusche - besser als Duschen! 🚿',
    alt: 'Bier-Dusche Aktion'
  },
  {
    id: 'funny-03',
    src: '/gallery/funny-kebab.jpeg',
    category: 'funny',
    caption: 'Döner-Time! Wichtigste Mahlzeit! 🌯',
    alt: 'Döner Kebab essen'
  },
  {
    id: 'funny-04',
    src: '/gallery/funny-morning-beer.jpeg',
    category: 'funny',
    caption: 'Frühschoppen um 9 Uhr - Tradition! ☀️',
    alt: 'Morgen-Bier trinken'
  },
  {
    id: 'funny-05',
    src: '/gallery/funny-sangria.jpeg',
    category: 'funny',
    caption: 'Sangria-Fleck? Egal! 🍷',
    alt: 'Sangria-verschmiertes Shirt'
  },
  {
    id: 'funny-06',
    src: '/gallery/funny-shoe.jpeg',
    category: 'funny',
    caption: 'Schuhbier - die härteste Challenge! 👞',
    alt: 'Aus dem Schuh trinken'
  },
  {
    id: 'funny-07',
    src: '/gallery/funny-autograph.png',
    category: 'funny',
    caption: 'Autogramm auf Bauch - forever! ✍️',
    alt: 'Bauch-Autogramm geben'
  },
  {
    id: 'funny-08',
    src: '/gallery/funny-security.jpeg',
    category: 'funny',
    caption: 'Security-Handshake 🤜🤛',
    alt: 'Mit Security Guard'
  },
  {
    id: 'funny-09',
    src: '/gallery/funny-taxi.png',
    category: 'funny',
    caption: 'Taxi-Ride nach 12h Party! 🚕',
    alt: 'Im Taxi'
  },
  {
    id: 'funny-10',
    src: '/gallery/funny-morning-walk.jpeg',
    category: 'funny',
    caption: 'Morning Walk of Shame... oder Glory? 🌅',
    alt: 'Morgendlicher Spaziergang'
  },

  // ACTION SHOTS
  {
    id: 'action-01',
    src: '/gallery/action-neon.jpeg',
    category: 'action',
    caption: 'Neon-Nacht Performance 🌈',
    alt: 'Neon-beleuchtete Performance'
  },
  {
    id: 'action-02',
    src: '/gallery/action-flag.jpeg',
    category: 'action',
    caption: 'Deutschland-Fahne als Cape! 🇩🇪',
    alt: 'Mit deutscher Flagge als Umhang'
  },
  {
    id: 'action-03',
    src: '/gallery/action-tattoo.png',
    category: 'action',
    caption: 'Tattoo-Reveal auf der Bühne! 💪',
    alt: 'Tattoo zeigen'
  },
  {
    id: 'action-04',
    src: '/gallery/action-arena.png',
    category: 'action',
    caption: 'Arena King - die Massen im Griff! 👑',
    alt: 'In der Arena'
  }
];

export const categoryLabels: Record<GalleryCategory, string> = {
  party: 'Party Chaos',
  ballermann: 'Ballermann Vibes',
  funny: 'Funny Moments',
  action: 'Action Shots'
};
