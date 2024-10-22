import { FunctionComponent } from 'react';

import Badge from './Badge';

import { allPayloadCapacities } from '@/data/PayloadCapacities';
import { allReusabilityLevels } from '@/data/ReusabilityLevels';
import { allStatuses } from '@/data/Statuses';
import { providers } from '@/data/Providers';
import { regionImageData as _regionImageData } from '@/data/Regions';
import { Vehicle } from '@/data/Vehicles';

type Props = {
  vehicle: Vehicle;
}

const VehicleView: FunctionComponent<Props> = ({ vehicle }) => {

  const provider = providers.find((provider) => provider.id === vehicle.provider)!;
  const status = allStatuses.find((status) => status.value === vehicle.status)!;
  const statusColor = (status.value == 'operational') ? 'var(--lightGreen)' : 'var(--lightBlue)';
  const payloadCapacity = allPayloadCapacities.find((payloadCapacity) => payloadCapacity.value === vehicle.payloadCapacity)!;
  const reusabilityLevel = allReusabilityLevels.find((reusabilityLevel) => reusabilityLevel.value === vehicle.reusabilityLevel)!;
  let reusabilityLevelColor: string;
  switch (reusabilityLevel.value) {
    case 'non-reusable': reusabilityLevelColor = 'var(--lightRed)'; break;
    case 'partially-reusable': reusabilityLevelColor = 'var(--lightBlue)'; break;
    case 'fully-reusable': reusabilityLevelColor = 'var(--lightGreen)'; break;
    default: reusabilityLevelColor = '#FFFFFF'; break; // Should never occur
  }

  return (
    <div className='relative w-full lg:w-1/2 h-[calc((100dvh-48px)/2)] cursor-pointer bg-[#202020]' onClick={() => window.open(vehicle.website, '_blank')}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      { vehicle.image && <img src={vehicle.image} alt={vehicle.name} className='absolute top-0 left-0 w-full h-full object-cover select-none' draggable="false" /> }
      <div className='absolute bottom-0 left-0 w-full h-1/4 flex flex-col justify-center p-4 lg:p-8 bg-[#00000080] text-white'>
        <div className='flex flex-row items-center justify-between gap-8'>
          <span className='h-[24px] text-base font-extrabold select-none'>{ vehicle.name.toUpperCase() }</span>
          <Badge label={status.label.toUpperCase()} color={statusColor} />
        </div>
        <div className='flex flex-row items-center justify-between gap-8'>
          <span className='h-[24px] text-xs select-none truncate'>{ provider.name.toUpperCase() }</span>
          <Badge label={payloadCapacity.label.toUpperCase()} color='#09bc62' />
        </div>
        <div className='flex flex-row items-center justify-between gap-8'>
          <div className='h-[24px] flex flex-row items-center gap-2'>
            { provider.regions.map((region) => {
              const data = _regionImageData[region]!;
              // eslint-disable-next-line @next/next/no-img-element
              return <img key={region} src={data.url} alt={region} width='36px' height={`${36 * data.aspectRatio}px`} className='select-none shrink-0 mt-[2px]' />
            }) }
          </div>
          <Badge label={reusabilityLevel.label.toUpperCase()} color={reusabilityLevelColor} />
        </div>
      </div>
    </div>
  );
}

export default VehicleView;
