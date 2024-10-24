
export type Vehicle = {
  id: string;
  name: string;
  provider: 'spacex' | 'blue-origin' | 'rocket-lab' | 'pld-space' | 'rocket-factory-augsburg' | 'arianespace' | 'china-national-space-administration' | 'space-one';
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
    id: 'electron',
    name: 'Electron',
    provider: 'rocket-lab',
    image: 'https://i0.wp.com/spacenews.com/wp-content/uploads/2024/06/electron50.jpg?w=2000&ssl=1',
    status: 'operational',
    payloadCapacity: 'small-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'https://www.rocketlabusa.com/launch/electron/',
  },
  {
    id: 'neutron',
    name: 'Neutron',
    provider: 'rocket-lab',
    image: 'https://i0.wp.com/spacenews.com/wp-content/uploads/2024/10/53194639182_f787a64a4e_o.jpg?w=1715&ssl=1',
    status: 'in-development',
    payloadCapacity: 'medium-lift',
    reusabilityLevel: 'partially-reusable',
    website: 'https://www.rocketlabusa.com/launch/neutron/',
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
    id: 'kairos',
    name: 'Kairos',
    provider: 'space-one',
    image: 'https://www.reuters.com/resizer/v2/I7DECXJBXFNBJPBSJZWVBS6UW4.jpg?auth=93a88623dd9e8b7fcf94d247222cb14efc14c1eaa5059e0730c2d27ebe0f7bac&width=1200&quality=80',
    status: 'in-development',
    payloadCapacity: 'small-lift',
    reusabilityLevel: 'non-reusable',
    website: 'https://www.space-one.co.jp/vehicle/index_e.html',
  },
  {
    id: 'long-march-2',
    name: 'Long March 2',
    provider: 'china-national-space-administration',
    image: 'https://everydayastronaut.com/wp-content/uploads/2020/12/cz-3be-1536x854.jpg',
    status: 'operational',
    payloadCapacity: 'medium-lift', // 8,800 kg to LEO in 2F configuration
    reusabilityLevel: 'non-reusable',
    website: 'https://en.wikipedia.org/wiki/Long_March_2F',
  },
  {
    id: 'long-march-3',
    name: 'Long March 3',
    provider: 'china-national-space-administration',
    image: 'https://everydayastronaut.com/wp-content/uploads/2023/01/CZ-3BE-SY1002-001-1536x1034.jpg',
    status: 'operational',
    payloadCapacity: 'medium-lift', // 9,100 kg to LEO in 3C/E configuration
    reusabilityLevel: 'non-reusable',
    website: 'https://en.wikipedia.org/wiki/Long_March_3',
  },
  {
    id: 'long-march-4',
    name: 'Long March 4',
    provider: 'china-national-space-administration',
    image: 'https://everydayastronaut.com/wp-content/uploads/Prelaunch-Preview/CNSA/CZ-4C_2012-1536x922.jpg',
    status: 'operational',
    payloadCapacity: 'medium-lift', // 4,200 kg to LEO in 4C configuration
    reusabilityLevel: 'non-reusable',
    website: 'https://en.wikipedia.org/wiki/Long_March_4C',
  },
  {
    id: 'long-march-5',
    name: 'Long March 5',
    provider: 'china-national-space-administration',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Mengtian_launch.jpg',
    status: 'operational',
    payloadCapacity: 'heavy-lift', // 25,000 kg to LEO
    reusabilityLevel: 'non-reusable',
    website: 'https://en.wikipedia.org/wiki/Long_March_5',
  },
  {
    id: 'long-march-6',
    name: 'Long March 6',
    provider: 'china-national-space-administration',
    image: 'https://www.cgwic.com/images/20210427/20210427-1.jpg',
    status: 'operational',
    payloadCapacity: 'medium-lift', // 4,500 kg to LEO in 6C configuration
    reusabilityLevel: 'non-reusable',
    website: 'https://en.wikipedia.org/wiki/Long_March_6',
  },
  {
    id: 'long-march-7',
    name: 'Long March 7',
    provider: 'china-national-space-administration',
    image: 'https://everydayastronaut.com/wp-content/uploads/2021/05/Long-March-7.jpg',
    status: 'operational',
    payloadCapacity: 'medium-lift', // 14,000 kg to LEO
    reusabilityLevel: 'non-reusable',
    website: 'https://en.wikipedia.org/wiki/Long_March_7',
  },
  {
    id: 'long-march-8',
    name: 'Long March 8',
    provider: 'china-national-space-administration',
    image: 'https://i0.wp.com/spacenews.com/wp-content/uploads/2022/02/long-march-8-y2-wenchang-27feb2022-ourspace.jpg?w=2156&ssl=1',
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
    status: 'in-development',
    payloadCapacity: 'heavy-lift', // 70,000 kg to LEO
    reusabilityLevel: 'partially-reusable',
    website: 'https://en.wikipedia.org/wiki/Long_March_10',
  },
  {
    id: 'long-march-11',
    name: 'Long March 11',
    provider: 'china-national-space-administration',
    image: 'https://everydayastronaut.com/wp-content/uploads/2022/04/long-march-11-cover-.jpeg',
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
    status: 'in-development',
    payloadCapacity: 'medium-lift', // 10,000 kg to LEO
    reusabilityLevel: 'non-reusable',
    website: 'https://en.wikipedia.org/wiki/Long_March_12',
  },
];
