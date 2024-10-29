'use client';

import { FunctionComponent, useEffect, useState } from 'react';

import VehicleView from './VehicleView';

import { providers } from '@/data/Providers';
import { Vehicle, vehicles } from '@/data/Vehicles';

type Props = {
  selectedProviders: string[];
  selectedStatuses: string[];
  selectedPayloadCapacities: string[];
  selectedReusabilityLevels: string[];
  selectedRegions: string[];
  selectedSortModes: string[];
}

const VehicleList: FunctionComponent<Props> = ({
  selectedProviders,
  selectedStatuses,
  selectedPayloadCapacities,
  selectedReusabilityLevels,
  selectedRegions,
  selectedSortModes,
}) => {

  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>(vehicles);

  useEffect(() => {
    const _filteredVehicles = vehicles.filter((vehicle) => {
      const provider = providers.find((provider) => provider.id === vehicle.provider)!;
      return selectedProviders.includes(vehicle.provider)
        && selectedStatuses.includes(vehicle.status)
        && selectedPayloadCapacities.includes(vehicle.payloadCapacity)
        && selectedReusabilityLevels.includes(vehicle.reusabilityLevel)
        && provider.regions.some((region) => selectedRegions.includes(region));
    });
    if (selectedSortModes.includes('shuffle')) {
      setFilteredVehicles(_filteredVehicles.sort(() => Math.random() - 0.5));
    } else {
      setFilteredVehicles(_filteredVehicles);
    }
  }, [ selectedProviders, selectedStatuses, selectedPayloadCapacities, selectedReusabilityLevels, selectedRegions, selectedSortModes ]);

  return (
    <div className='flex flex-row flex-wrap'>
      { filteredVehicles.map((vehicle, index) => <VehicleView key={vehicle.id} vehicle={vehicle} hasPriority={index < 4} />) }
    </div>
  );
}

export default VehicleList;
