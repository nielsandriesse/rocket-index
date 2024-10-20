import { FunctionComponent } from 'react';

import VehicleView from './VehicleView';

import { vehicles } from '@/data/Vehicles';

type Props = {
  selectedProviders: string[];
  selectedStatuses: string[];
  selectedPayloadCapacities: string[];
  selectedReusabilityLevels: string[];
}

const DataView: FunctionComponent<Props> = ({ selectedProviders, selectedStatuses, selectedPayloadCapacities, selectedReusabilityLevels }) => {

  const filteredVehicles = vehicles.filter((vehicle) => {
    return selectedProviders.includes(vehicle.provider)
      && selectedStatuses.includes(vehicle.status)
      && selectedPayloadCapacities.includes(vehicle.payloadCapacity)
      && selectedReusabilityLevels.includes(vehicle.reusabilityLevel);
  });

  return (
    <div className='flex flex-row flex-wrap'>
      { filteredVehicles.map((vehicle) => <VehicleView key={vehicle.id} vehicle={vehicle} />) }
    </div>
  );
}

export default DataView;
