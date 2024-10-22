
export type Provider = {
  id: string;
  name: string;
  website: string;
  regions: ('european-union' | 'united-states' | 'china')[];
}

export const providers = [
  {
    id: 'spacex',
    name: 'SpaceX',
    website: 'https://www.spacex.com/',
    regions: [ 'united-states' ],
  },
  {
    id: 'blue-origin',
    name: 'Blue Origin',
    website: 'https://www.blueorigin.com/',
    regions: [ 'united-states' ],
  },
  {
    id: 'pld-space',
    name: 'PLD Space',
    website: 'https://www.pldspace.com/',
    regions: [ 'european-union' ],
  },
  {
    id: 'rocket-factory-augsburg',
    name: 'Rocket Factory Augsburg',
    website: 'https://www.rfa.space/',
    regions: [ 'european-union' ],
  },
  {
    id: 'arianespace',
    name: 'Arianespace',
    website: 'https://www.arianespace.com/',
    regions: [ 'european-union' ],
  },
  {
    id: 'china-national-space-administration',
    name: 'China National Space Administration',
    website: 'https://en.wikipedia.org/wiki/China_National_Space_Administration',
    regions: [ 'china' ],
  },
].sort((a, b) => a.name.localeCompare(b.name)) as Provider[];
