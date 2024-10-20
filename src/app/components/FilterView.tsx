import useOutsideClick from '@rooks/use-outside-click'

import { FunctionComponent, useRef, useState } from 'react';

import DropdownMenu from './DropdownMenu';
import FilterButton from './FilterButton';

import { allPayloadCapacities } from '@/data/PayloadCapacities';
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
}

const FilterView: FunctionComponent<Props> = ({
  selectedProviders,
  setSelectedProviders,
  selectedStatuses,
  setSelectedStatuses,
  selectedPayloadCapacities,
  setSelectedPayloadCapacities,
  selectedReusabilityLevels,
  setSelectedReusabilityLevels
}) => {
  return (
    <div className='h-[48px] flex flex-row items-center border-b border-b-[#FFFFFF33] pl-8 pr-2 gap-8'>
      <ProviderFilterView selectedProviders={selectedProviders} setSelectedProviders={setSelectedProviders} />
      <StatusFilterView selectedStatuses={selectedStatuses} setSelectedStatuses={setSelectedStatuses} />
      <PayloadCapacityFilterView selectedPayloadCapacities={selectedPayloadCapacities} setSelectedPayloadCapacities={setSelectedPayloadCapacities} />
      <ReusabilityLevelFilterView selectedReusabilityLevels={selectedReusabilityLevels} setSelectedReusabilityLevels={setSelectedReusabilityLevels} />
    </div>
  );
}

type ProviderFilterViewProps = {
  selectedProviders: string[];
  setSelectedProviders: (providers: string[]) => void;
}

const ProviderFilterView: FunctionComponent<ProviderFilterViewProps> = ({ selectedProviders, setSelectedProviders }) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => { setIsMenuExpanded(false) });
  return (
    <div ref={ref} className='relative h-full flex flex-row items-center'>
      <FilterButton label='Provider' isMenuExpanded={isMenuExpanded} onClick={() => setIsMenuExpanded(!isMenuExpanded)} />
      <DropdownMenu
        className={`w-[200px] absolute top-[56px] -left-2 ${ isMenuExpanded ? 'visible' : 'hidden' }`}
        items={ providers.map((provider) => ({ label: provider.name, value: provider.id })) }
        selectedItems={selectedProviders}
        onItemsSelected={setSelectedProviders}
      />
    </div>
  )
}

type StatusFilterViewProps = {
  selectedStatuses: string[];
  setSelectedStatuses: (statuses: string[]) => void;
}

const StatusFilterView: FunctionComponent<StatusFilterViewProps> = ({ selectedStatuses, setSelectedStatuses }) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => { setIsMenuExpanded(false) });
  return (
    <div ref={ref} className='relative h-full flex flex-row items-center'>
      <FilterButton label='Status' isMenuExpanded={isMenuExpanded} onClick={() => setIsMenuExpanded(!isMenuExpanded)} />
      <DropdownMenu
        className={`w-[200px] absolute top-[56px] -left-2 ${ isMenuExpanded ? 'visible' : 'hidden' }`}
        items={allStatuses}
        selectedItems={selectedStatuses}
        onItemsSelected={setSelectedStatuses}
      />
    </div>
  )
}

type PayloadCapacityFilterViewProps = {
  selectedPayloadCapacities: string[];
  setSelectedPayloadCapacities: (payloadCapacities: string[]) => void;
}

const PayloadCapacityFilterView: FunctionComponent<PayloadCapacityFilterViewProps> = ({ selectedPayloadCapacities, setSelectedPayloadCapacities }) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => { setIsMenuExpanded(false) });
  return (
    <div ref={ref} className='relative h-full flex flex-row items-center'>
      <FilterButton label='Payload Capacity' isMenuExpanded={isMenuExpanded} onClick={() => setIsMenuExpanded(!isMenuExpanded)} />
      <DropdownMenu
        className={`w-[200px] absolute top-[56px] -left-2 ${ isMenuExpanded ? 'visible' : 'hidden' }`}
        items={allPayloadCapacities}
        selectedItems={selectedPayloadCapacities}
        onItemsSelected={setSelectedPayloadCapacities}
      />
    </div>
  )
}

type ReusabilityLevelFilterViewProps = {
  selectedReusabilityLevels: string[];
  setSelectedReusabilityLevels: (reusabilityLevels: string[]) => void;
}

const ReusabilityLevelFilterView: FunctionComponent<ReusabilityLevelFilterViewProps> = ({ selectedReusabilityLevels, setSelectedReusabilityLevels }) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => { setIsMenuExpanded(false) });
  return (
    <div ref={ref} className='relative h-full flex flex-row items-center'>
      <FilterButton label='Reusability Level' isMenuExpanded={isMenuExpanded} onClick={() => setIsMenuExpanded(!isMenuExpanded)} />
      <DropdownMenu
        className={`w-[200px] absolute top-[56px] -left-2 ${ isMenuExpanded ? 'visible' : 'hidden' }`}
        items={allReusabilityLevels}
        selectedItems={selectedReusabilityLevels}
        onItemsSelected={setSelectedReusabilityLevels}
      />
    </div>
  )
}

export default FilterView;
