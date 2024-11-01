
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
    id: 'terran-r',
    name: 'Terran R',
    provider: 'relativity-space',
    image: '/images/terran-r.webp',
    photoCredit: 'Relativity Space',
    status: 'in-development',
    payloadCapacity: 'heavy-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'https://www.relativityspace.com/terran-r',
  },
  {
    id: 'rs1',
    name: 'RS1',
    provider: 'abl-space-systems',
    image: '/images/rs1.webp',
    photoCredit: 'ABL Space Systems',
    status: 'in-development',
    payloadCapacity: 'small-lift',
    reusabilityLevel: 'non-reusable',
    website: 'https://ablspacesystems.com/rs1/',
  },
  {
    id: 'nova',
    name: 'Nova',
    provider: 'stoke-space',
    image: '/images/nova.webp',
    photoCredit: 'Stoke Space',
    status: 'in-development',
    payloadCapacity: 'medium-lift',
    reusabilityLevel: 'fully-reusable',
    website: 'https://www.stokespace.com/rocket/',
  },
  {
    id: 'rocket-4',
    name: 'Rocket 4',
    provider: 'astra',
    image: '/images/rocket-4.webp',
    photoCredit: 'Astra',
    status: 'in-development',
    payloadCapacity: 'small-lift',
    reusabilityLevel: 'non-reusable',
    website: 'https://astra.com/launch-services/',
  },
  {
    id: 'alpha',
    name: 'Alpha',
    provider: 'firefly-aerospace',
    image: '/images/alpha.webp',
    photoCredit: 'Firefly Aerospace',
    status: 'operational',
    payloadCapacity: 'small-lift',
    reusabilityLevel: 'non-reusable',
    website: 'https://fireflyspace.com/alpha/',
  },
  {
    id: 'mlv',
    name: 'MLV',
    provider: 'firefly-aerospace',
    image: '/images/mlv.webp',
    photoCredit: 'Firefly Aerospace',
    status: 'operational',
    payloadCapacity: 'medium-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'https://fireflyspace.com/mlv/',
  },
  {
    id: 'vulcan',
    name: 'Vulcan',
    provider: 'united-launch-alliance',
    image: '/images/vulcan.webp',
    photoCredit: 'ULA',
    status: 'operational',
    payloadCapacity: 'heavy-lift',
    reusabilityLevel: 'non-reusable',
    website: 'https://www.ulalaunch.com/rockets/vulcan-centaur',
  },
  {
    id: 'atlas-5',
    name: 'Atlas V',
    provider: 'united-launch-alliance',
    image: '/images/atlas-v.webp',
    photoCredit: 'ULA',
    status: 'operational',
    payloadCapacity: 'medium-lift',
    reusabilityLevel: 'non-reusable',
    website: 'https://www.ulalaunch.com/rockets/atlas-v',
  },
  {
    id: 'delta-2',
    name: 'Delta II',
    provider: 'united-launch-alliance',
    image: '/images/delta-2.webp',
    photoCredit: 'ULA',
    status: 'operational',
    payloadCapacity: 'medium-lift',
    reusabilityLevel: 'non-reusable',
    website: 'https://www.ulalaunch.com/rockets/delta-ii',
  },
  {
    id: 'delta-4',
    name: 'Delta IV',
    provider: 'united-launch-alliance',
    image: '/images/delta-4.webp',
    photoCredit: 'ULA',
    status: 'operational',
    payloadCapacity: 'heavy-lift',
    reusabilityLevel: 'non-reusable',
    website: 'https://www.ulalaunch.com/rockets/delta-iv',
  },
  {
    id: 'sls',
    name: 'SLS',
    provider: 'nasa',
    image: '/images/sls.webp',
    photoCredit: 'Aerotime',
    status: 'operational',
    payloadCapacity: 'super-heavy-lift',
    reusabilityLevel: 'non-reusable',
    website: 'https://en.wikipedia.org/wiki/Space_Launch_System',
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
    id: 'vega-c',
    name: 'Vega C',
    provider: 'avio',
    image: '/images/vega-c.webp',
    photoCredit: 'ESA',
    status: 'operational',
    payloadCapacity: 'medium-lift',
    reusabilityLevel: 'non-reusable',
    website: 'https://www.avio.com/vega-c',
  },
  {
    id: 'spectrum',
    name: 'Spectrum',
    provider: 'isar-aerospace',
    image: '',
    photoCredit: '',
    status: 'in-development',
    payloadCapacity: 'small-lift',
    reusabilityLevel: 'non-reusable',
    website: 'https://www.isaraerospace.com/spectrum',
  },
  {
    id: 'maia',
    name: 'Maia',
    provider: 'maiaspace',
    image: '/images/maia.webp',
    photoCredit: 'maiaspace',
    status: 'in-development',
    payloadCapacity: 'small-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'https://www.maia-space.com/our-launcher/',
  },
  {
    id: 'sl-1',
    name: 'SL-1',
    provider: 'hy-impulse',
    image: '/images/sl-1.webp',
    photoCredit: 'HyImpulse',
    status: 'in-development',
    payloadCapacity: 'small-lift',
    reusabilityLevel: 'non-reusable',
    website: 'https://www.hyimpulse.de/en/products/5-project-3-mini-launcher',
  },
  {
    id: 'zephyr',
    name: 'Zephyr',
    provider: 'latitude',
    image: '/images/zephyr.webp',
    photoCredit: 'Latitude',
    status: 'in-development',
    payloadCapacity: 'small-lift',
    reusabilityLevel: 'non-reusable',
    website: 'https://www.latitude.eu/zephyr',
  },
  {
    id: 'sirius-1',
    name: 'Sirius 1',
    provider: 'sirius-space',
    image: '',
    photoCredit: '',
    status: 'in-development',
    payloadCapacity: 'small-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'https://www.sirius-space.com/siriusrangeoflaunchers',
  },
  {
    id: 'sirius-13',
    name: 'Sirius 13',
    provider: 'sirius-space',
    image: '',
    photoCredit: '',
    status: 'in-development',
    payloadCapacity: 'small-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'https://www.sirius-space.com/siriusrangeoflaunchers',
  },
  {
    id: 'sirius-15',
    name: 'Sirius 15',
    provider: 'sirius-space',
    image: '',
    photoCredit: '',
    status: 'in-development',
    payloadCapacity: 'small-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'https://www.sirius-space.com/siriusrangeoflaunchers',
  },
  {
    id: 'orbex-prime',
    name: 'Orbex Prime',
    provider: 'orbex',
    image: '/images/orbex-prime.webp',
    photoCredit: 'Orbex',
    status: 'in-development',
    payloadCapacity: 'small-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'https://orbex.space/launch-vehicle',
  },
  {
    id: 'skyrora-xl',
    name: 'Skyrora XL',
    provider: 'skyrora',
    image: '/images/skyrora-xl.webp',
    photoCredit: 'Skyrora',
    status: 'in-development',
    payloadCapacity: 'small-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'https://skyrora.com/product/skyrora-xl/',
  },
  {
    id: 'black-arrow-2',
    name: 'Black Arrow 2',
    provider: 'black-arrow',
    image: '',
    photoCredit: '',
    status: 'in-development',
    payloadCapacity: 'small-lift',
    reusabilityLevel: 'non-reusable',
    website: 'https://www.blackarrow.space/',
  },
  {
    id: 'soyuz-2',
    name: 'Soyuz 2',
    provider: 'roscosmos',
    image: '/images/soyuz-2.webp',
    photoCredit: 'Roscosmos',
    status: 'operational',
    payloadCapacity: 'medium-lift',
    reusabilityLevel: 'non-reusable',
    website: 'https://en.wikipedia.org/wiki/Soyuz-2',
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
    id: 'jielong-1',
    name: 'Jielong 1',
    provider: 'china-national-space-administration',
    image: '/images/jielong-1.webp',
    photoCredit: 'Xinhua',
    status: 'operational',
    payloadCapacity: 'small-lift',
    reusabilityLevel: 'non-reusable',
    website: 'https://en.wikipedia.org/wiki/Jielong_1',
  },
  {
    id: 'jielong-3',
    name: 'Jielong 3',
    provider: 'china-national-space-administration',
    image: '/images/jielong-3.webp',
    photoCredit: 'CNSA',
    status: 'operational',
    payloadCapacity: 'medium-lift',
    reusabilityLevel: 'non-reusable',
    website: 'https://en.wikipedia.org/wiki/Jielong_3',
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
  },
  {
    id: 'gravity-1',
    name: 'Gravity 1',
    provider: 'orienspace',
    image: '/images/gravity-1.webp',
    photoCredit: 'Orienspace',
    status: 'operational',
    payloadCapacity: 'medium-lift',
    reusabilityLevel: 'non-reusable',
    website: 'https://www.orienspace.com/productPage',
  },
  {
    id: 'gravity-2',
    name: 'Gravity 2',
    provider: 'orienspace',
    image: '',
    photoCredit: '',
    status: 'in-development',
    payloadCapacity: 'medium-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'https://www.orienspace.com/productPage',
  },
  {
    id: 'gravity-3',
    name: 'Gravity 3',
    provider: 'orienspace',
    image: '',
    photoCredit: '',
    status: 'in-development',
    payloadCapacity: 'heavy-lift',
    reusabilityLevel: 'fully-reusable',
    website: 'https://www.orienspace.com/productPage',
  },
  {
    id: 'hyperbola-1',
    name: 'Hyperbola 1',
    provider: 'i-space',
    image: '/images/hyperbola-1.webp',
    photoCredit: 'i-Space',
    status: 'operational',
    payloadCapacity: 'small-lift',
    reusabilityLevel: 'non-reusable',
    website: 'http://www.i-space.com.cn/index.php?m=content&c=index&a=lists&catid=4',
  },
  {
    id: 'hyperbola-2',
    name: 'Hyperbola 2',
    provider: 'i-space',
    image: '',
    photoCredit: '',
    status: 'in-development',
    payloadCapacity: 'small-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'http://www.i-space.com.cn/index.php?m=content&c=index&a=lists&catid=4',
  },
  {
    id: 'hyperbola-3',
    name: 'Hyperbola 3',
    provider: 'i-space',
    image: '',
    photoCredit: '',
    status: 'in-development',
    payloadCapacity: 'medium-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'http://www.i-space.com.cn/index.php?m=content&c=index&a=lists&catid=4',
  }
];
