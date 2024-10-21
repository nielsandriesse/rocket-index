import useOutsideClick from '@rooks/use-outside-click'

import { FunctionComponent, useRef, useState } from 'react';
import { Menu } from 'iconoir-react';

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

const Header: FunctionComponent<Props> = ({
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
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  return (
    <div className='relative h-[48px] z-10 flex flex-row items-center justify-between border-b border-b-[#FFFFFF33] px-4 lg:px-8 gap-4 lg:gap-8'>
      <div className='hidden lg:flex flex-row items-center gap-8'>
        <FilterView label='Provider' items={providers.map((provider) => ({ label: provider.name, value: provider.id }))} selectedItems={selectedProviders} setSelectedItems={setSelectedProviders} />
        <FilterView label='Status' items={allStatuses} selectedItems={selectedStatuses} setSelectedItems={setSelectedStatuses} />
        <FilterView label='Payload Capacity' items={allPayloadCapacities} selectedItems={selectedPayloadCapacities} setSelectedItems={setSelectedPayloadCapacities} />
        <FilterView label='Reusability Level' items={allReusabilityLevels} selectedItems={selectedReusabilityLevels} setSelectedItems={setSelectedReusabilityLevels} />
        <FilterView label='Region' items={allRegions} selectedItems={selectedRegions} setSelectedItems={setSelectedRegions} />
      </div>
      <Menu color='var(--foreground)' width='20px' height='20px' className='lg:hidden cursor-pointer' onClick={() => setIsMenuExpanded(!isMenuExpanded)} />
      <span className='text-xs font-bold select-none'>ROCKET INDEX</span>
      <div className={`absolute lg:hidden top-full left-0 w-full h-[calc(100dvh-48px)] bg-background transition-transform duration-300 px-[18px] py-2 flex flex-col gap-4 ${ isMenuExpanded ? '-translate-x-full' : 'translate-x-0' }`}>
        <span>Provider</span>
        <span>Status</span>
        <span>Payload Capacity</span>
        <span>Reusability Level</span>
        <span>Region</span>
      </div>
    </div>
  );
}

// Filter View

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
        className={`w-[200px] absolute top-[50px] -left-4 ${ isMenuExpanded ? 'visible' : 'hidden' }`}
        items={ items.map((item) => ({ label: item.label, value: item.value })) }
        selectedItems={selectedItems}
        onItemsSelected={setSelectedItems}
      />
    </div>
  )
}

export default Header;
