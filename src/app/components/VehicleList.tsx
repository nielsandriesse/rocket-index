'use client';

import { FunctionComponent, useEffect, useState } from 'react';

import VehicleView from './VehicleView';

import { providers as _providers } from '@/data/Providers';
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
      const providers = _providers.filter((provider) => vehicle.providers.includes(provider.id));
      return selectedProviders.some((provider) => providers.map((p) => p.id).includes(provider))
        && selectedStatuses.includes(vehicle.status)
        && selectedPayloadCapacities.includes(vehicle.payloadCapacity)
        && selectedReusabilityLevels.includes(vehicle.reusabilityLevel)
        && providers.map((p) => p.regions).flat().some((region) => selectedRegions.includes(region));
    });
    if (selectedSortModes.includes('alphabetical')) {
      setFilteredVehicles(_filteredVehicles.sort((a, b) => a.name.localeCompare(b.name)));
    } else if (selectedSortModes.includes('shuffle')) {
      setFilteredVehicles(_filteredVehicles.sort(() => Math.random() - 0.5));
    } else {
      setFilteredVehicles(_filteredVehicles);
    }
  }, [ selectedProviders, selectedStatuses, selectedPayloadCapacities, selectedReusabilityLevels, selectedRegions, selectedSortModes ]);

  return (
    <div className='flex flex-row flex-wrap grow'>
      { filteredVehicles.map((vehicle, index) => <VehicleView key={vehicle.id} vehicle={vehicle} hasPriority={index < 4} />) }
    </div>
  );
}

export default VehicleList;
