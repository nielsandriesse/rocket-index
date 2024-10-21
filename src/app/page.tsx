'use client';

import { FunctionComponent, useState } from 'react';

import VehicleList from './components/VehicleList';
import TopBar from './components/TopBar';

import { allPayloadCapacities } from '@/data/PayloadCapacities';
import { allRegions } from '@/data/Regions';
import { allReusabilityLevels } from '@/data/ReusabilityLevels';
import { allStatuses } from '@/data/Statuses';
import { providers } from '@/data/Providers';

const App: FunctionComponent = () => {

  const [selectedProviders, setSelectedProviders] = useState<string[]>(providers.map((provider) => provider.id));
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>(allStatuses.map((status) => status.value));
  const [selectedPayloadCapacities, setSelectedPayloadCapacities] = useState<string[]>(allPayloadCapacities.map((payloadCapacity) => payloadCapacity.value));
  const [selectedReusabilityLevels, setSelectedReusabilityLevels] = useState<string[]>(allReusabilityLevels.map((reusabilityLevel) => reusabilityLevel.value));
  const [selectedRegions, setSelectedRegions] = useState<string[]>(allRegions.map((region) => region.value));

  return (
    <div className='flex flex-col w-full h-full'>
      <TopBar
        selectedProviders={selectedProviders}
        setSelectedProviders={setSelectedProviders}
        selectedStatuses={selectedStatuses}
        setSelectedStatuses={setSelectedStatuses}
        selectedPayloadCapacities={selectedPayloadCapacities}
        setSelectedPayloadCapacities={setSelectedPayloadCapacities}
        selectedReusabilityLevels={selectedReusabilityLevels}
        setSelectedReusabilityLevels={setSelectedReusabilityLevels}
        selectedRegions={selectedRegions}
        setSelectedRegions={setSelectedRegions}
      />
      <VehicleList
        selectedProviders={selectedProviders}
        selectedStatuses={selectedStatuses}
        selectedPayloadCapacities={selectedPayloadCapacities}
        selectedReusabilityLevels={selectedReusabilityLevels}
        selectedRegions={selectedRegions}
      />
    </div>
  );
}

export default App;
