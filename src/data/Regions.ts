import { DropdownMenuItem } from "@/app/components/DropdownMenu";

export const allRegions = [
  { label: 'China', value: 'china' },
  { label: 'European Union', value: 'european-union' },
  { label: 'Japan', value: 'japan' },
  { label: 'New Zealand', value: 'new-zealand' },
  { label: 'United States', value: 'united-states' },
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
}