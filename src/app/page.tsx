'use client';

import { FunctionComponent, useState } from 'react';

import DataView from './components/DataView';
import FilterView from './components/FilterView';

import { allPayloadCapacities } from '@/data/PayloadCapacities';
import { allReusabilityLevels } from '@/data/ReusabilityLevels';
import { allStatuses } from '@/data/Statuses';
import { providers } from '@/data/Providers';

const Home: FunctionComponent = () => {

  const [selectedProviders, setSelectedProviders] = useState<string[]>(providers.map((provider) => provider.id));
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>(allStatuses.map((status) => status.value));
  const [selectedPayloadCapacities, setSelectedPayloadCapacities] = useState<string[]>(allPayloadCapacities.map((payloadCapacity) => payloadCapacity.value));
  const [selectedReusabilityLevels, setSelectedReusabilityLevels] = useState<string[]>(allReusabilityLevels.map((reusabilityLevel) => reusabilityLevel.value));

  return (
    <div className='flex flex-col w-full h-full'>
      <FilterView
        selectedProviders={selectedProviders}
        setSelectedProviders={setSelectedProviders}
        selectedStatuses={selectedStatuses}
        setSelectedStatuses={setSelectedStatuses}
        selectedPayloadCapacities={selectedPayloadCapacities}
        setSelectedPayloadCapacities={setSelectedPayloadCapacities}
        selectedReusabilityLevels={selectedReusabilityLevels}
        setSelectedReusabilityLevels={setSelectedReusabilityLevels}
      />
      <DataView
        selectedProviders={selectedProviders}
        selectedStatuses={selectedStatuses}
        selectedPayloadCapacities={selectedPayloadCapacities}
        selectedReusabilityLevels={selectedReusabilityLevels}
      />
    </div>
  );
}

export default Home;
