import { DropdownMenuItem } from "@/app/components/DropdownMenu";

export const allRegions = [
  { label: 'China', value: 'china' },
  { label: 'European Union', value: 'european-union' },
  { label: 'Japan', value: 'japan' },
  { label: 'New Zealand', value: 'new-zealand' },
  { label: 'United States', value: 'united-states' },
  { label: 'Spain', value: 'spain' },
  { label: 'France', value: 'france' },
  { label: 'Germany', value: 'germany' },
  { label: 'Russia', value: 'russia' },
  { label: 'Italy', value: 'italy' },
  { label: 'United Kingdom', value: 'united-kingdom' },
  { label: 'Australia', value: 'australia' },
  { label: 'South Korea', value: 'south-korea' },
  { label: 'Brazil', value: 'brazil' },
  { label: 'Argentina', value: 'argentina' },
  { label: 'Israel', value: 'israel' },
  { label: 'Ukraine', value: 'ukraine' },
  { label: 'India', value: 'india' },
  { label: 'Canada', value: 'canada' },
].sort((a, b) => a.label.localeCompare(b.label)) as DropdownMenuItem[];

export type RegionImageData = {
  url: string;
  aspectRatio: number;
}

export const regionImageData: Record<string, RegionImageData> = {
  'china': { url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg', aspectRatio: 2/3 },
  'european-union': { url: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg', aspectRatio: 2/3 },
  'japan': { url: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg', aspectRatio: 2/3 },
  'new-zealand': { url: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg', aspectRatio: 0.5 },
  'united-states': { url: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg', aspectRatio: 650/1235 },
  'spain': { url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg', aspectRatio: 2/3 },
  'france': { url: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg', aspectRatio: 2/3 },
  'germany': { url: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg', aspectRatio: 480/800 },
  'russia': { url: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg', aspectRatio: 2/3 },
  'italy': { url: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg', aspectRatio: 2/3 },
  'united-kingdom': { url: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg', aspectRatio: 1/2 },
  'australia': { url: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg', aspectRatio: 1/2 },
  'south-korea': { url: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg', aspectRatio: 533/800 },
  'brazil': { url: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg', aspectRatio: 560/800 },
  'argentina': { url: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg', aspectRatio: 500/800 },
  'israel': { url: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg', aspectRatio: 582/800 },
  'ukraine': { url: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg', aspectRatio: 533/800 },
  'india': { url: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg', aspectRatio: 533/800 },
  'canada': { url: 'https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg', aspectRatio: 400/800 },
}
