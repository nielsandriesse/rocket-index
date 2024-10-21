import { FunctionComponent } from 'react';

import VehicleView from './VehicleView';

import { providers } from '@/data/Providers';
import { vehicles } from '@/data/Vehicles';

type Props = {
  isMenuExpanded: boolean;
  selectedProviders: string[];
  selectedStatuses: string[];
  selectedPayloadCapacities: string[];
  selectedReusabilityLevels: string[];
  selectedRegions: string[];
}

const VehicleList: FunctionComponent<Props> = ({
  isMenuExpanded,
  selectedProviders,
  selectedStatuses,
  selectedPayloadCapacities,
  selectedReusabilityLevels,
  selectedRegions,
}) => {

  const filteredVehicles = vehicles.filter((vehicle) => {
    const provider = providers.find((provider) => provider.id === vehicle.provider)!;
    return selectedProviders.includes(vehicle.provider)
      && selectedStatuses.includes(vehicle.status)
      && selectedPayloadCapacities.includes(vehicle.payloadCapacity)
      && selectedReusabilityLevels.includes(vehicle.reusabilityLevel)
      && provider.regions.some((region) => selectedRegions.includes(region));
  });

  return (
    <div className={`flex flex-row flex-wrap ${ isMenuExpanded ? 'h-[calc(100dvh-48px-96px)] overflow-hidden' : 'h-auto overflow-auto' }`}>
      { filteredVehicles.map((vehicle) => <VehicleView key={vehicle.id} vehicle={vehicle} />) }
    </div>
  );
}

export default VehicleList;
