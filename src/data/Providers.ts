
export type Provider = {
  id: string;
  name: string;
  website: string;
  region: 'europe' | 'united-states' | 'china';
}

export const providers: Provider[] = [
  {
    id: 'spacex',
    name: 'SpaceX',
    website: 'https://www.spacex.com/',
    region: 'united-states',
  },
  {
    id: 'pld-space',
    name: 'PLD Space',
    website: 'https://www.pldspace.com/',
    region: 'europe',
  },
  {
    id: 'rocket-factory-augsburg',
    name: 'Rocket Factory Augsburg',
    website: 'https://www.rfa.space/',
    region: 'europe',
  },
  {
    id: 'arianespace',
    name: 'Arianespace',
    website: 'https://www.arianespace.com/',
    region: 'europe',
  },
  {
    id: 'china-national-space-administration',
    name: 'China National Space Administration',
    website: 'https://en.wikipedia.org/wiki/China_National_Space_Administration',
    region: 'china',
  },
];
