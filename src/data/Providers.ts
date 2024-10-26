
export type Provider = {
  id: string;
  name: string;
  website: string;
  regions: ('european-union' | 'united-states' | 'china' | 'japan' | 'new-zealand')[];
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
    id: 'rocket-lab',
    name: 'Rocket Lab',
    website: 'https://www.rocketlabusa.com/',
    regions: [ 'new-zealand', 'united-states' ],
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
  {
    id: 'galactic-energy',
    name: 'Galactic Energy',
    website: 'https://www.galactic-energy.cn//index.php/En',
    regions: [ 'china' ],
  },
  {
    id: 'space-one',
    name: 'Space One',
    website: 'https://www.space-one.co.jp/index_e.html',
    regions: [ 'japan' ],
  },
  {
    id: 'japan-aerospace-exploration-agency',
    name: 'Japan Aerospace Exploration Agency',
    website: 'https://global.jaxa.jp/',
    regions: [ 'japan' ],
  }
].sort((a, b) => a.name.localeCompare(b.name)) as Provider[];
