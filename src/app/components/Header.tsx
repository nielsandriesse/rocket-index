import useOutsideClick from '@rooks/use-outside-click'

import { FunctionComponent, useRef, useState } from 'react';
import { CheckSquare, Menu, Square } from 'iconoir-react';

import DropdownMenu, { DropdownMenuItem } from './DropdownMenu';
import FilterButton from './FilterButton';

import { allPayloadCapacities } from '@/data/PayloadCapacities';
import { allRegions } from '@/data/Regions';
import { allReusabilityLevels } from '@/data/ReusabilityLevels';
import { allStatuses } from '@/data/Statuses';
import { providers } from '@/data/Providers';

type Props = {
  isMenuExpanded: boolean;
  setIsMenuExpanded: (isMenuExpanded: boolean) => void;
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
  isMenuExpanded,
  setIsMenuExpanded,
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
    <div className='relative h-[48px] z-10 flex flex-row items-center justify-between border-b border-b-white20 px-4 lg:px-8 gap-4 lg:gap-8'>
      <div className='hidden lg:flex flex-row items-center gap-8 h-full'>
        <DesktopFilterView label='Provider' items={providers.map((provider) => ({ label: provider.name, value: provider.id }))} selectedItems={selectedProviders} setSelectedItems={setSelectedProviders} />
        <DesktopFilterView label='Status' items={allStatuses} selectedItems={selectedStatuses} setSelectedItems={setSelectedStatuses} />
        <DesktopFilterView label='Payload Capacity' items={allPayloadCapacities} selectedItems={selectedPayloadCapacities} setSelectedItems={setSelectedPayloadCapacities} />
        <DesktopFilterView label='Reusability Level' items={allReusabilityLevels} selectedItems={selectedReusabilityLevels} setSelectedItems={setSelectedReusabilityLevels} />
        <DesktopFilterView label='Region' items={allRegions} selectedItems={selectedRegions} setSelectedItems={setSelectedRegions} />
      </div>
      <Menu color='var(--foreground)' width='20px' height='20px' className='lg:hidden cursor-pointer' onClick={() => setIsMenuExpanded(!isMenuExpanded)} />
      <span className='text-xs font-bold select-none'>ROCKET INDEX</span>
      <div className={`absolute lg:hidden top-full left-0 w-full h-[calc(100dvh-48px)] bg-background transition-transform duration-300 px-[18px] py-2 flex flex-col ${ isMenuExpanded ? 'translate-x-0' : '-translate-x-full' }`}>
        <MobileFilterView label='Provider' items={providers.map((provider) => ({ label: provider.name, value: provider.id }))} selectedItems={selectedProviders} setSelectedItems={setSelectedProviders} />
        <MobileFilterView label='Status' items={allStatuses} selectedItems={selectedStatuses} setSelectedItems={setSelectedStatuses} />
        <MobileFilterView label='Payload Capacity' items={allPayloadCapacities} selectedItems={selectedPayloadCapacities} setSelectedItems={setSelectedPayloadCapacities} />
        <MobileFilterView label='Reusability Level' items={allReusabilityLevels} selectedItems={selectedReusabilityLevels} setSelectedItems={setSelectedReusabilityLevels} />
        <MobileFilterView label='Region' items={allRegions} selectedItems={selectedRegions} setSelectedItems={setSelectedRegions} />
      </div>
    </div>
  );
}

// Desktop Filter View

type DesktopFilterViewProps = {
  label: string;
  items: DropdownMenuItem[];
  selectedItems: string[];
  setSelectedItems: (items: string[]) => void;
}

const DesktopFilterView: FunctionComponent<DesktopFilterViewProps> = ({ label, items, selectedItems, setSelectedItems }) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  // @ts-expect-error `useOutsideClick` complains about `ref.current` potentially being null, but this doesn't happen in practice
  useOutsideClick(ref, () => { setIsMenuExpanded(false) });
  return (
    <div ref={ref} className='relative h-full flex flex-row items-center'>
      <FilterButton label={label} isMenuExpanded={isMenuExpanded} onClick={() => {
        console.log('click');
        setIsMenuExpanded(!isMenuExpanded);
      }} />
      <DropdownMenu
        className={`w-[200px] absolute top-[47px] left-[-18px] ${ isMenuExpanded ? 'visible' : 'hidden' }`}
        items={ items.map((item) => ({ label: item.label, value: item.value })) }
        selectedItems={selectedItems}
        onItemsSelected={setSelectedItems}
      />
    </div>
  )
}

// Mobile Filter View

type MobileFilterViewProps = {
  label: string;
  items: DropdownMenuItem[];
  selectedItems: string[];
  setSelectedItems: (items: string[]) => void;
}

const MobileFilterView: FunctionComponent<MobileFilterViewProps> = ({ label, items, selectedItems, setSelectedItems }) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  return (
    <div className={`flex flex-col ${ isMenuExpanded ? '' : 'mb-4' }`}>
      <FilterButton label={label} isMenuExpanded={isMenuExpanded} onClick={() => setIsMenuExpanded(!isMenuExpanded)} />
      { isMenuExpanded ? (
        <div className='flex flex-col py-2'>
          { items.map((item) => {
            const isSelected = selectedItems.includes(item.value);
            return (
              <div
                key={item.value}
                className='px-4 py-2 cursor-pointer select-none flex flex-row gap-2'
                onClick={() => {
                  const newSelectedItems = isSelected ? selectedItems.filter((selectedItem) => selectedItem !== item.value) : [ ...selectedItems, item.value ];
                  setSelectedItems(newSelectedItems);
                }}
              >
                { isSelected ? (
                  <CheckSquare color='var(--foreground)' width='16px' height='16px' className='shrink-0' />
                ) : (
                  <Square color='var(--foreground)' width='16px' height='16px' className='shrink-0' />
                ) }
                <span className='text-xs'>{ item.label.toUpperCase() }</span>
              </div>
            )
          }) }
        </div>
      ) : null }
    </div>
  )
}

export default Header;
