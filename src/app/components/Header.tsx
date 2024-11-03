'use client';

import Image from 'next/image';
import useOutsideClick from '@rooks/use-outside-click'

import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { Check, Menu } from 'iconoir-react';

import DropdownMenu, { DropdownMenuItem } from './DropdownMenu';
import HeaderButton from './HeaderButton';

import { allPayloadCapacities } from '@/data/PayloadCapacities';
import { allRegions } from '@/data/Regions';
import { allReusabilityLevels } from '@/data/ReusabilityLevels';
import { allSortModes } from '@/data/SortModes';
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
  selectedSortModes: string[];
  setSelectedSortModes: (sortModes: string[]) => void;
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
  selectedSortModes,
  setSelectedSortModes,
}) => {

  const [isLgScreen, setIsLgScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => { setIsLgScreen(window.innerWidth >= 1024) };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isLgScreen) {
    return (
      <div className='relative h-[48px] z-10 flex flex-row items-center justify-between pl-8 pr-5 gap-8 shrink-0'>
        <div className='flex flex-row items-center gap-8 h-full'>
          <DesktopFilterView label='Provider' items={providers.map((provider) => ({ label: provider.name, value: provider.id }))} mode='multiple' selectedItems={selectedProviders} setSelectedItems={setSelectedProviders} />
          <DesktopFilterView label='Status' items={allStatuses} mode='multiple' selectedItems={selectedStatuses} setSelectedItems={setSelectedStatuses} />
          <DesktopFilterView label='Payload Capacity' items={allPayloadCapacities} mode='multiple' selectedItems={selectedPayloadCapacities} setSelectedItems={setSelectedPayloadCapacities} />
          <DesktopFilterView label='Reusability Level' items={allReusabilityLevels} mode='multiple' selectedItems={selectedReusabilityLevels} setSelectedItems={setSelectedReusabilityLevels} />
          <DesktopFilterView label='Region' items={allRegions} mode='multiple' selectedItems={selectedRegions} setSelectedItems={setSelectedRegions} />
          <DesktopFilterView label='Sort Mode' items={allSortModes} mode='single' selectedItems={selectedSortModes} setSelectedItems={setSelectedSortModes} />
        </div>
        <Image src='/images/logo.svg' alt='Rocket Index' width={36} height={36} draggable={false} />
      </div>
    );
  } else {
    return (
      <div className='relative h-[48px] z-10 flex flex-row items-center justify-between pl-4 pr-3 gap-4 shrink-0'>
        <Menu color='var(--foreground)' width='20px' height='20px' className='cursor-pointer' onClick={() => setIsMenuExpanded(!isMenuExpanded)} />
        <Image src='/images/logo.svg' alt='Rocket Index' width={28} height={28} draggable={false} />
        <div className={`absolute top-full left-0 w-full h-[calc(100dvh-48px)] overflow-y-scroll bg-background transition-transform duration-300 px-[18px] py-2 flex flex-col ${ isMenuExpanded ? 'translate-x-0' : '-translate-x-full' }`}>
          <MobileFilterView label='Provider' items={providers.map((provider) => ({ label: provider.name, value: provider.id }))} mode='multiple' selectedItems={selectedProviders} setSelectedItems={setSelectedProviders} />
          <MobileFilterView label='Status' items={allStatuses} mode='multiple' selectedItems={selectedStatuses} setSelectedItems={setSelectedStatuses} />
          <MobileFilterView label='Payload Capacity' items={allPayloadCapacities} mode='multiple' selectedItems={selectedPayloadCapacities} setSelectedItems={setSelectedPayloadCapacities} />
          <MobileFilterView label='Reusability Level' items={allReusabilityLevels} mode='multiple' selectedItems={selectedReusabilityLevels} setSelectedItems={setSelectedReusabilityLevels} />
          <MobileFilterView label='Region' items={allRegions} mode='multiple' selectedItems={selectedRegions} setSelectedItems={setSelectedRegions} />
          <MobileFilterView label='Sort Mode' items={allSortModes} mode='single' selectedItems={selectedSortModes} setSelectedItems={setSelectedSortModes} />
        </div>
      </div>
    );
  }
}

// Desktop Filter View

type DesktopFilterViewProps = {
  label: string;
  items: DropdownMenuItem[];
  mode: 'single' | 'multiple';
  selectedItems: string[];
  setSelectedItems: (items: string[]) => void;
}

const DesktopFilterView: FunctionComponent<DesktopFilterViewProps> = ({ label, items, mode, selectedItems, setSelectedItems }) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  // @ts-expect-error `useOutsideClick` complains about `ref.current` potentially being null, but this doesn't happen in practice
  useOutsideClick(ref, () => { setIsMenuExpanded(false) });
  return (
    <div ref={ref} className='relative h-full flex flex-row items-center'>
      <HeaderButton label={label} onClick={() => { setIsMenuExpanded(!isMenuExpanded) }} />
      <DropdownMenu
        className={`w-[200px] absolute top-[48px] left-[-18px] ${ isMenuExpanded ? 'visible' : 'hidden' }`}
        items={items.map((item) => ({ label: item.label, value: item.value }))}
        mode={mode}
        selectedItems={selectedItems}
        onSelectItems={(items) => {
          setSelectedItems(items);
          if (mode === 'single') { setIsMenuExpanded(false); }
        }}
      />
    </div>
  )
}

// Mobile Filter View

type MobileFilterViewProps = {
  label: string;
  items: DropdownMenuItem[];
  mode: 'single' | 'multiple';
  selectedItems: string[];
  setSelectedItems: (items: string[]) => void;
}

const MobileFilterView: FunctionComponent<MobileFilterViewProps> = ({ label, items, mode, selectedItems, setSelectedItems }) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  return (
    <div className={`flex flex-col ${ isMenuExpanded ? '' : 'mb-4' }`}>
      <HeaderButton label={label} onClick={() => setIsMenuExpanded(!isMenuExpanded)} />
      { isMenuExpanded ? (
        <div className='flex flex-col py-2'>
          { items.map((item) => {
            const isSelected = selectedItems.includes(item.value);
            return (
              <div
                key={item.value}
                className='px-4 py-2 cursor-pointer select-none flex flex-row justify-between gap-2'
                onClick={() => {
                  if (mode === 'single') {
                    if (isSelected) { return; }
                    setSelectedItems([ item.value ]);
                  } else {
                    const newSelectedItems = isSelected ? selectedItems.filter((selectedItem) => selectedItem !== item.value) : [ ...selectedItems, item.value ];
                    setSelectedItems(newSelectedItems);
                  }
                }}
              >
                <span className='text-xs'>{ item.label.toUpperCase() }</span>
                { isSelected ? (
                  <Check color='var(--foreground)' width='16px' height='16px' className='shrink-0' />
                ) : null }
              </div>
            )
          }) }
        </div>
      ) : null }
    </div>
  )
}

export default Header;
