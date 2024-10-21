import { DropdownMenuItem } from "@/app/components/DropdownMenu";

export const allRegions: DropdownMenuItem[] = [
  { label: 'Europe', value: 'europe' },
  { label: 'United States', value: 'united-states' },
  { label: 'China', value: 'china' },
];

export type RegionImageData = {
  url: string;
  aspectRatio: number;
}

export const regionImageData: Record<string, RegionImageData> = {
  'europe': { url: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg', aspectRatio: 2/3 },
  'united-states': { url: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg', aspectRatio: 650/1235 },
  'china': { url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg', aspectRatio: 2/3 },
}