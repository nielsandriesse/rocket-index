import { DropdownMenuItem } from "@/app/components/DropdownMenu";

export const allPayloadCapacities: DropdownMenuItem[] = [
  { label: 'Small Lift', value: 'small-lift' }, // Up to 2,000 kg
  { label: 'Medium Lift', value: 'medium-lift' }, // 2,000 to 20,000 kg
  { label: 'Heavy Lift', value: 'heavy-lift' }, // 20,000 to 50,000 kg
  { label: 'Super Heavy Lift', value: 'super-heavy-lift' }, // 50,000 kg and above
];