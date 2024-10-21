import useOutsideClick from '@rooks/use-outside-click'

import { FunctionComponent, useRef, useState } from 'react';

import DropdownMenu, { DropdownMenuItem } from './DropdownMenu';
import FilterButton from './FilterButton';

import { allPayloadCapacities } from '@/data/PayloadCapacities';
import { allRegions } from '@/data/Regions';
import { allReusabilityLevels } from '@/data/ReusabilityLevels';
import { allStatuses } from '@/data/Statuses';
import { providers } from '@/data/Providers';

type Props = {
  selectedProviders: string[];
  setSelectedProviders: (providers: string[]) => void;
  selectedStatuses: string[];
  setSelectedStatuses: (statuses: string[]) => void;
  selectedPayloadCapacities: string[];
  setSelectedPayloadCapacities: (payloadCapacities: string[]) => void;
  selectedReusabilityLevels: string[];
  setSelectedReusabilityLevels: (reusabilityLevels: string[]) => void;
  selectedRegions: string[];
  setSelectedRegions: (regions: string[]) => void;
}

const TopBar: FunctionComponent<Props> = ({
  selectedProviders,
  setSelectedProviders,
  selectedStatuses,
  setSelectedStatuses,
  selectedPayloadCapacities,
  setSelectedPayloadCapacities,
  selectedReusabilityLevels,
  setSelectedReusabilityLevels,
  selectedRegions,
  setSelectedRegions,
}) => {
  return (
    <div className='h-[48px] flex flex-row items-center border-b border-b-[#FFFFFF33] pl-8 pr-2 gap-8'>
      <FilterView label='Provider' items={providers.map((provider) => ({ label: provider.name, value: provider.id }))} selectedItems={selectedProviders} setSelectedItems={setSelectedProviders} />
      <FilterView label='Status' items={allStatuses} selectedItems={selectedStatuses} setSelectedItems={setSelectedStatuses} />
      <FilterView label='Payload Capacity' items={allPayloadCapacities} selectedItems={selectedPayloadCapacities} setSelectedItems={setSelectedPayloadCapacities} />
      <FilterView label='Reusability Level' items={allReusabilityLevels} selectedItems={selectedReusabilityLevels} setSelectedItems={setSelectedReusabilityLevels} />
      <FilterView label='Region' items={allRegions} selectedItems={selectedRegions} setSelectedItems={setSelectedRegions} />
    </div>
  );
}

// Foo

type FilterViewProps = {
  label: string;
  items: DropdownMenuItem[];
  selectedItems: string[];
  setSelectedItems: (items: string[]) => void;
}

const FilterView: FunctionComponent<FilterViewProps> = ({ label, items, selectedItems, setSelectedItems }) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  // @ts-expect-error `useOutsideClick` complains about `ref.current` potentially being null, but this doesn't happen in practice
  useOutsideClick(ref, () => { setIsMenuExpanded(false) });
  return (
    <div ref={ref} className='relative h-full flex flex-row items-center'>
      <FilterButton label={label} isMenuExpanded={isMenuExpanded} onClick={() => setIsMenuExpanded(!isMenuExpanded)} />
      <DropdownMenu
        className={`w-[200px] absolute top-[56px] -left-4 ${ isMenuExpanded ? 'visible' : 'hidden' }`}
        items={ items.map((item) => ({ label: item.label, value: item.value })) }
        selectedItems={selectedItems}
        onItemsSelected={setSelectedItems}
      />
    </div>
  )
}

export default TopBar;
