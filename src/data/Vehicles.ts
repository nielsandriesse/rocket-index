
export type Vehicle = {
  id: string;
  name: string;
  provider: string;
  image: string;
  photoCredit: string;
  status: 'operational' | 'in-development';
  payloadCapacity: 'small-lift' | 'medium-lift' | 'heavy-lift' | 'super-heavy-lift';
  reusabilityLevel: 'non-reusable' | 'partially-reusable' | 'fully-reusable';
  website: string;
}

export const vehicles: Vehicle[] = [
  {
    id: 'falcon-9',
    name: 'Falcon 9',
    provider: 'spacex',
    image: '/images/falcon-9.webp',
    photoCredit: 'SpaceX',
    status: 'operational',
    payloadCapacity: 'medium-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'https://www.spacex.com/vehicles/falcon-9/',
  },
  {
    id: 'falcon-heavy',
    name: 'Falcon Heavy',
    provider: 'spacex',
    image: '/images/falcon-heavy.webp',
    photoCredit: 'SpaceX',
    status: 'operational',
    payloadCapacity: 'heavy-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'https://www.spacex.com/vehicles/falcon-heavy/',
  },
  {
    id: 'starship',
    name: 'Starship',
    provider: 'spacex',
    image: '/images/starship.webp',
    photoCredit: 'SpaceX',
    status: 'operational',
    payloadCapacity: 'super-heavy-lift',
    reusabilityLevel: 'fully-reusable',
    website: 'https://www.spacex.com/vehicles/starship/',
  },
  {
    id: 'new-glenn',
    name: 'New Glenn',
    provider: 'blue-origin',
    image: '/images/new-glenn.webp',
    photoCredit: 'Blue Origin',
    status: 'in-development',
    payloadCapacity: 'heavy-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'https://www.blueorigin.com/new-glenn',
  },
  {
    id: 'electron',
    name: 'Electron',
    provider: 'rocket-lab',
    image: '/images/electron.webp',
    photoCredit: 'Rocket Lab',
    status: 'operational',
    payloadCapacity: 'small-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'https://www.rocketlabusa.com/launch/electron/',
  },
  {
    id: 'neutron',
    name: 'Neutron',
    provider: 'rocket-lab',
    image: '/images/neutron.webp',
    photoCredit: 'Rocket Lab',
    status: 'in-development',
    payloadCapacity: 'medium-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'https://www.rocketlabusa.com/launch/neutron/',
  },
  { 
    id: 'miura-1',
    name: 'Miura 1',
    provider: 'pld-space',
    image: '/images/miura-1.webp',
    photoCredit: 'PLD Space',
    status: 'operational',
    payloadCapacity: 'small-lift',
    reusabilityLevel: 'non-reusable',
    website: 'https://pldspace.com/en/miura-1',
  },
  {
    id: 'miura-5',
    name: 'Miura 5',
    provider: 'pld-space',
    image: '/images/miura-5.webp',
    photoCredit: 'PLD Space',
    status: 'in-development',
    payloadCapacity: 'small-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'https://pldspace.com/en/miura-5',
  },
  {
    id: 'miura-next',
    name: 'Miura Next',
    provider: 'pld-space',
    image: '/images/miura-next.webp',
    photoCredit: 'PLD Space',
    status: 'in-development',
    payloadCapacity: 'medium-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'https://pldspace.com/en/miura-next',
  },
  {
    id: 'miura-next-heavy',
    name: 'Miura Next Heavy',
    provider: 'pld-space',
    image: '/images/miura-next-heavy.webp',
    photoCredit: 'PLD Space',
    status: 'in-development',
    payloadCapacity: 'heavy-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'https://pldspace.com/en/miura-next-heavy',
  },
  {
    id: 'miura-next-super-heavy',
    name: 'Miura Next Super Heavy',
    provider: 'pld-space',
    image: '/images/miura-next-super-heavy.webp',
    photoCredit: 'PLD Space',
    status: 'in-development',
    payloadCapacity: 'super-heavy-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'https://pldspace.com/en/miura-next-superheavy',
  },
  {
    id: 'rfa-one',
    name: 'RFA One',
    provider: 'rocket-factory-augsburg',
    image: '/images/rfa-one.webp',
    photoCredit: 'RFA',
    status: 'in-development',
    payloadCapacity: 'small-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'https://www.rfa.space/rfa-one/',
  },
  {
    id: 'ariane-6',
    name: 'Ariane 6',
    provider: 'arianespace',
    image: '/images/ariane-6.webp',
    photoCredit: 'arianespace',
    status: 'operational',
    payloadCapacity: 'heavy-lift', // 21,500 kg to LEO in A64 configuration
    reusabilityLevel: 'non-reusable',
    website: 'https://www.arianespace.com/ariane-6/',
  },
  {
    id: 'ariane-next',
    name: 'Ariane Next',
    provider: 'arianespace',
    image: '',
    photoCredit: '',
    status: 'in-development',
    payloadCapacity: 'heavy-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'https://en.wikipedia.org/wiki/Ariane_Next',
  },
  {
    id: 'kairos',
    name: 'Kairos',
    provider: 'space-one',
    image: '/images/kairos.webp',
    photoCredit: 'Kyodo',
    status: 'in-development',
    payloadCapacity: 'small-lift',
    reusabilityLevel: 'non-reusable',
    website: 'https://www.space-one.co.jp/vehicle/index_e.html',
  },
  {
    id: 'h3',
    name: 'H3',
    provider: 'japan-aerospace-exploration-agency',
    image: '/images/h3.webp',
    photoCredit: 'JAXA',
    status: 'operational',
    payloadCapacity: 'medium-lift',
    reusabilityLevel: 'non-reusable',
    website: 'https://global.jaxa.jp/projects/rockets/h3/',
  },
  {
    id: 'long-march-2',
    name: 'Long March 2',
    provider: 'china-national-space-administration',
    image: '/images/long-march-2.webp',
    photoCredit: 'Xinhua',
    status: 'operational',
    payloadCapacity: 'medium-lift', // 8,800 kg to LEO in 2F configuration
    reusabilityLevel: 'non-reusable',
    website: 'https://en.wikipedia.org/wiki/Long_March_2F',
  },
  {
    id: 'long-march-3',
    name: 'Long March 3',
    provider: 'china-national-space-administration',
    image: '/images/long-march-3.webp',
    photoCredit: 'Qin Yingjian',
    status: 'operational',
    payloadCapacity: 'medium-lift', // 9,100 kg to LEO in 3C/E configuration
    reusabilityLevel: 'non-reusable',
    website: 'https://en.wikipedia.org/wiki/Long_March_3',
  },
  {
    id: 'long-march-4',
    name: 'Long March 4',
    provider: 'china-national-space-administration',
    image: '/images/long-march-4.webp',
    photoCredit: 'Xinhua',
    status: 'operational',
    payloadCapacity: 'medium-lift', // 4,200 kg to LEO in 4C configuration
    reusabilityLevel: 'non-reusable',
    website: 'https://en.wikipedia.org/wiki/Long_March_4C',
  },
  {
    id: 'long-march-5',
    name: 'Long March 5',
    provider: 'china-national-space-administration',
    image: '/images/long-march-5.webp',
    photoCredit: 'Wikipedia',
    status: 'operational',
    payloadCapacity: 'heavy-lift', // 25,000 kg to LEO
    reusabilityLevel: 'non-reusable',
    website: 'https://en.wikipedia.org/wiki/Long_March_5',
  },
  {
    id: 'long-march-6',
    name: 'Long March 6',
    provider: 'china-national-space-administration',
    image: '/images/long-march-6.webp',
    photoCredit: 'CASC',
    status: 'operational',
    payloadCapacity: 'medium-lift', // 4,500 kg to LEO in 6C configuration
    reusabilityLevel: 'non-reusable',
    website: 'https://en.wikipedia.org/wiki/Long_March_6',
  },
  {
    id: 'long-march-7',
    name: 'Long March 7',
    provider: 'china-national-space-administration',
    image: '/images/long-march-7.webp',
    photoCredit: 'Xinhua',
    status: 'operational',
    payloadCapacity: 'medium-lift', // 14,000 kg to LEO
    reusabilityLevel: 'non-reusable',
    website: 'https://en.wikipedia.org/wiki/Long_March_7',
  },
  {
    id: 'long-march-8',
    name: 'Long March 8',
    provider: 'china-national-space-administration',
    image: '/images/long-march-8.webp',
    photoCredit: 'Ourspace/CNSA',
    status: 'operational',
    payloadCapacity: 'medium-lift', // 8,100 kg to LEO
    reusabilityLevel: 'non-reusable', // Plans for partial reusability in the future
    website: 'https://en.wikipedia.org/wiki/Long_March_8',
  },
  {
    id: 'long-march-9',
    name: 'Long March 9',
    provider: 'china-national-space-administration',
    image: '',
    photoCredit: '',
    status: 'in-development',
    payloadCapacity: 'super-heavy-lift', // 150,000 kg to LEO
    reusabilityLevel: 'partially-reusable', // Plans for full reusability in the future
    website: 'https://en.wikipedia.org/wiki/Long_March_9',
  },
  {
    id: 'long-march-10',
    name: 'Long March 10',
    provider: 'china-national-space-administration',
    image: '',
    photoCredit: '',
    status: 'in-development',
    payloadCapacity: 'heavy-lift', // 70,000 kg to LEO
    reusabilityLevel: 'partially-reusable',
    website: 'https://en.wikipedia.org/wiki/Long_March_10',
  },
  {
    id: 'long-march-11',
    name: 'Long March 11',
    provider: 'china-national-space-administration',
    image: '/images/long-march-11.webp',
    photoCredit: 'Xinhua',
    status: 'operational',
    payloadCapacity: 'small-lift', // 700 kg to LEO
    reusabilityLevel: 'non-reusable',
    website: 'https://en.wikipedia.org/wiki/Long_March_11',
  },
  {
    id: 'long-march-12',
    name: 'Long March 12',
    provider: 'china-national-space-administration',
    image: '',
    photoCredit: '',
    status: 'in-development',
    payloadCapacity: 'medium-lift', // 10,000 kg to LEO
    reusabilityLevel: 'non-reusable',
    website: 'https://en.wikipedia.org/wiki/Long_March_12',
  },
  {
    id: 'ceres-1',
    name: 'Ceres 1',
    provider: 'galactic-energy',
    image: '/images/ceres-1.webp',
    photoCredit: 'nasaspaceflight.com',
    status: 'operational',
    payloadCapacity: 'small-lift',
    reusabilityLevel: 'non-reusable',
    website: 'https://www.galactic-energy.cn/index.php/En/List/cid/14',
  },
  {
    id: 'pallas-1',
    name: 'Pallas 1',
    provider: 'galactic-energy',
    image: '',
    photoCredit: '',
    status: 'in-development',
    payloadCapacity: 'medium-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'https://www.galactic-energy.cn/index.php/En/List/cid/15',
  }
];
