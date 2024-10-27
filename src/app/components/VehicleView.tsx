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
  let payloadCapacityIconPath: string;
  switch (payloadCapacity.value) {
    case 'small-lift': payloadCapacityIconPath = '/icons/small-lift.svg'; break;
    case 'medium-lift': payloadCapacityIconPath = '/icons/medium-lift.svg'; break;
    case 'heavy-lift': payloadCapacityIconPath = '/icons/heavy-lift.svg'; break;
    default: payloadCapacityIconPath = '/icons/super-heavy-lift.svg'; break;
  }
  const reusabilityLevel = allReusabilityLevels.find((reusabilityLevel) => reusabilityLevel.value === vehicle.reusabilityLevel)!;
  let reusabilityLevelColor: string;
  switch (reusabilityLevel.value) {
    case 'non-reusable': reusabilityLevelColor = 'var(--lightRed)'; break;
    case 'partially-reusable': reusabilityLevelColor = 'var(--lightBlue)'; break;
    case 'fully-reusable': reusabilityLevelColor = 'var(--lightGreen)'; break;
    default: reusabilityLevelColor = '#FFFFFF'; break; // Should never occur
  }
  const imageURL = vehicle.image ? vehicle.image : '/images/placeholder.webp';
  const imageAlt = vehicle.image ? vehicle.name : 'No Image';
  const photoCredit = vehicle.image ? vehicle.photoCredit : 'Gregoire Jeanneau';

  return (
    <div className='relative w-full xl:w-1/2 h-[calc((100dvh-48px)/2)] cursor-pointer bg-[#202020]' onClick={() => window.open(vehicle.website, '_blank')}>
      {/* Background Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imageURL} alt={imageAlt} className='absolute top-0 left-0 w-full h-full object-cover select-none' draggable="false" />
      { vehicle.image ? null : (
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
          <span className='text-xs font-bold'>NO IMAGE</span>
        </div>
      ) }
      {/* Top Content */}
      <div className='absolute top-0 left-0 w-full flex flex-row items-center p-4 lg:px-8 lg:py-6 text-white'>
        <span className='select-none' style={{ fontSize: '10px' }}>PHOTO CREDIT: { photoCredit.toUpperCase() }</span>
      </div>
      {/* Bottom Content */}
      <div className='absolute bottom-0 left-0 w-full h-1/4 flex flex-col justify-center px-4 lg:px-8 bg-gradient-to-b from-[#00000000] to-[#000000CC] text-white'>
        <span className='text-xl font-extrabold select-none'>{ vehicle.name.toUpperCase() }</span>
        <span className='text-xs select-none truncate'>{ provider.name.toUpperCase() }</span>
        <div className='flex flex-row items-center justify-between gap-4 lg:gap-8 mt-2'>
          <div className='flex flex-row items-center flex-wrap' style={{ gap: '4px 16px' }}>
            <Badge label={status.label.toUpperCase()} color={statusColor} />
            <div className={`text-xs flex flex-row items-center gap-2 shrink-0`}>
              <div className='w-[24px] h-[24px]'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={payloadCapacityIconPath} alt={payloadCapacity.label} width='24px' height='24px' className='select-none shrink-0 translate-y-[-5px]' />
              </div>
              <span className='select-none'>{ payloadCapacity.label.toUpperCase() }</span>
            </div>
            <Badge label={reusabilityLevel.label.toUpperCase()} color={reusabilityLevelColor} />
          </div>
          <div className='flex flex-row items-center gap-2 shrink-0'>
            { provider.regions.map((region) => {
              const data = _regionImageData[region]!;
              // eslint-disable-next-line @next/next/no-img-element
              return <img key={region} src={data.url} alt={region} width='36px' height={`${36 * data.aspectRatio}px`} className='select-none shrink-0 mt-[2px]' />
            }) }
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleView;
