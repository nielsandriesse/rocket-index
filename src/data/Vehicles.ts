
export type Vehicle = {
  id: string;
  name: string;
  provider: 'spacex' | 'blue-origin' | 'pld-space' | 'rocket-factory-augsburg' | 'arianespace' | 'china-national-space-administration';
  image: string;
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
    image: 'https://www.spacex.com/static/images/falcon-9/refresh/F9_DM2_LAUNCH_3840x2560.jpg',
    status: 'operational',
    payloadCapacity: 'medium-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'https://www.spacex.com/vehicles/falcon-9/',
  },
  {
    id: 'falcon-heavy',
    name: 'Falcon Heavy',
    provider: 'spacex',
    image: 'https://www.spacex.com/static/images/backgrounds/fh_feature.jpg',
    status: 'operational',
    payloadCapacity: 'heavy-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'https://www.spacex.com/vehicles/falcon-heavy/',
  },
  {
    id: 'starship',
    name: 'Starship',
    provider: 'spacex',
    image: 'https://www.spacex.com/vehicles/starship/assets/images/Starhip_website-crop20230126_dji_0199_01.jpg',
    status: 'operational',
    payloadCapacity: 'super-heavy-lift',
    reusabilityLevel: 'fully-reusable',
    website: 'https://www.spacex.com/vehicles/starship/',
  },
  {
    id: 'new-glenn',
    name: 'New Glenn',
    provider: 'blue-origin',
    image: 'https://d3ezn0y6hdgq62.cloudfront.net/itt_newglenn_home-hero.png',
    status: 'in-development',
    payloadCapacity: 'heavy-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'https://www.blueorigin.com/new-glenn',
  },
  { 
    id: 'miura-1',
    name: 'Miura 1',
    provider: 'pld-space',
    image: 'https://www.pldspace.com/templates/yootheme/cache/pld_miura_flight_r_copia-380c6ba2.webp',
    status: 'operational',
    payloadCapacity: 'small-lift',
    reusabilityLevel: 'non-reusable',
    website: 'https://pldspace.com/en/miura-1',
  },
  {
    id: 'miura-5',
    name: 'Miura 5',
    provider: 'pld-space',
    image: 'https://www.pldspace.com/images/MIURA_5/m5_render01.jpg',
    status: 'in-development',
    payloadCapacity: 'small-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'https://pldspace.com/en/miura-5',
  },
  {
    id: 'miura-next',
    name: 'Miura Next',
    provider: 'pld-space',
    image: 'https://pldspace.com/images/vehiculos/next/vuelo.jpg',
    status: 'in-development',
    payloadCapacity: 'medium-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'https://pldspace.com/en/miura-next',
  },
  {
    id: 'miura-next-heavy',
    name: 'Miura Next Heavy',
    provider: 'pld-space',
    image: 'https://pldspace.com/images/vehiculos/heavy/banner.jpg',
    status: 'in-development',
    payloadCapacity: 'heavy-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'https://pldspace.com/en/miura-next-heavy',
  },
  {
    id: 'miura-next-super-heavy',
    name: 'Miura Next Super Heavy',
    provider: 'pld-space',
    image: 'https://pldspace.com/images/vehiculos/superheavy/banner.jpg',
    status: 'in-development',
    payloadCapacity: 'super-heavy-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'https://pldspace.com/en/miura-next-superheavy',
  },
  {
    id: 'rfa-one',
    name: 'RFA One',
    provider: 'rocket-factory-augsburg',
    image: 'https://www.rfa.space/wp-content/uploads/42-2.png',
    status: 'in-development',
    payloadCapacity: 'small-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'https://www.rfa.space/rfa-one/',
  },
  {
    id: 'ariane-6',
    name: 'Ariane 6',
    provider: 'arianespace',
    image: 'https://ariane.group/app/uploads/sites/4/2024/09/D‚collage-VA262-AG-cover.jpg.webp',
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
    status: 'in-development',
    payloadCapacity: 'heavy-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'https://en.wikipedia.org/wiki/Ariane_Next',
  },
  {
    id: 'long-march-5',
    name: 'Long March 5',
    provider: 'china-national-space-administration',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Mengtian_launch.jpg',
    status: 'operational',
    payloadCapacity: 'heavy-lift',
    reusabilityLevel: 'non-reusable',
    website: 'https://en.wikipedia.org/wiki/Long_March_5',
  }
];
