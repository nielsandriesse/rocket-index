'use client';

import Image from 'next/image';

import { FunctionComponent, useEffect, useState } from 'react';

import Badge from './Badge';

import { allPayloadCapacities } from '@/data/PayloadCapacities';
import { allReusabilityLevels } from '@/data/ReusabilityLevels';
import { allStatuses } from '@/data/Statuses';
import { providers as _providers } from '@/data/Providers';
import { regionImageData as _regionImageData } from '@/data/Regions';
import { Vehicle } from '@/data/Vehicles';

type Props = {
  vehicle: Vehicle;
  hasPriority: boolean;
}

const VehicleView: FunctionComponent<Props> = ({ vehicle, hasPriority }) => {

  const [isMdScreen, setIsMdScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => { setIsMdScreen(window.innerWidth >= 768) };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const providers = _providers.filter((provider) => vehicle.providers.includes(provider.id));
  const status = allStatuses.find((status) => status.value === vehicle.status)!;
  const statusColor = (status.value == 'operational') ? 'var(--lightGreen)' : 'var(--lightBlue)';
  const payloadCapacity = allPayloadCapacities.find((payloadCapacity) => payloadCapacity.value === vehicle.payloadCapacity)!;
  let payloadCapacityIcon: React.ReactNode;
  switch (payloadCapacity.value) {
    case 'small-lift': payloadCapacityIcon = smallLiftIcon; break;
    case 'medium-lift': payloadCapacityIcon = mediumLiftIcon; break;
    case 'heavy-lift': payloadCapacityIcon = heavyLiftIcon; break;
    case 'super-heavy-lift': payloadCapacityIcon = superHeavyLiftIcon; break;
    default: payloadCapacityIcon = null; break; // Should never occur
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
    <div className='relative w-full xl:w-1/2 h-[calc((100vh-48px)/2)] cursor-pointer bg-[#202020]' onClick={() => window.open(vehicle.website, '_blank')}>
      {/* Background Image */}
      <Image 
        src={imageURL} 
        alt={imageAlt} 
        fill
        className='object-cover select-none opacity-0 transition-opacity duration-300'
        onLoad={(event) => event.currentTarget.classList.remove('opacity-0')}
        draggable={false}
        priority={hasPriority}
      />
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
      <div className='absolute bottom-0 left-0 w-full h-1/3 lg:h-1/4 flex flex-col justify-end px-4 pb-4 lg:px-8 lg:pb-8 bg-gradient-to-b from-[#00000000] to-[#000000CC] text-white'>
        <span className='text-xl font-extrabold select-none'>{ vehicle.name.toUpperCase() }</span>
        <span className='text-xs select-none truncate'>{ providers.map((provider) => provider.name.toUpperCase()).join(', ') }</span>
        <div className='flex flex-row items-center justify-between gap-4 lg:gap-8 mt-2'>
          <div className='flex flex-row items-center flex-wrap' style={{ gap: '4px 16px' }}>
            <Badge label={status.label.toUpperCase()} color={statusColor} />
            <div className={`text-xs flex flex-row items-center gap-2 shrink-0`}>
              <div className='w-[24px] h-[24px]'>
                { payloadCapacityIcon }
              </div>
              <span className='select-none'>{ payloadCapacity.label.toUpperCase() }</span>
            </div>
            <Badge label={reusabilityLevel.label.toUpperCase()} color={reusabilityLevelColor} className={ isMdScreen ? '' : 'w-full' } />
          </div>
          <div className='flex flex-col md:flex-row items-center gap-1 md:gap-2 shrink-0'>
            { Array.from(new Set(providers.map((provider) => provider.regions).flat())).map((region) => { // This takes advantage of the fact that JS sets are ordered
              const data = _regionImageData[region]!;
              // eslint-disable-next-line @next/next/no-img-element
              return <img key={region} src={data.url} alt={region} width='36px' height={`${ 36 * data.aspectRatio }px`} className='select-none shrink-0 mt-[2px]' />
            }) }
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleView;

const smallLiftIcon = <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='select-none shrink-0 translate-y-[-5px]'>
<path d="M13.5825 13.8008C13.5359 12.6784 13.6454 12.4148 14.5 11.5C15.3546 12.4148 15.4641 12.6784 15.4175 13.8008C15.3709 14.9231 15.3981 15.763 15.4175 16.6141L16 17.3997V18.5361H15.4175V19.5H14.5631H14.4369H13.5825V18.5361H13V17.3997L13.5825 16.6141C13.6019 15.763 13.6291 14.9231 13.5825 13.8008Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M7.34084 3.32179L7.34091 0.5L7.65909 0.500011L7.65902 3.32179H10.3636V3.69802H9.88636V5.57921H10.3636V5.95545H9.72727V15.3H14V15.7168H9.72727V17.3863L10.462 19.1238H11V19.5H4V19.1238H4.53804L5.27273 17.3863V5.95545H4.63636V5.57921H5.11364V3.69802H4.63636V3.32179H7.34084ZM5.43182 3.69802V5.57921H6.22727V3.69802H5.43182ZM6.86364 3.69802V5.57921H8.13636V3.69802H6.86364ZM8.77273 3.69802V5.57921H9.56818V3.69802H8.77273ZM8.45455 5.95545H6.54545V6.33169H8.45455V5.95545ZM6.54545 18.7475V19.1238H8.45455V18.7475H6.54545ZM5.27273 18.2276V19.1238H4.89378L5.27273 18.2276ZM6.92953 6.70792H8.45455V8.51119L6.92953 6.70792ZM9.72727 18.2276L10.1062 19.1238H9.72727V18.2276ZM6.54545 18.3713H8.07047L6.54545 16.568V18.3713ZM6.54545 8.58911V6.78585L8.07047 8.58911H6.54545ZM6.54545 8.96535V9.34159H8.45455V8.96535H6.54545ZM6.92953 9.71783H8.45455V11.5211L6.92953 9.71783ZM8.07047 11.599L6.54545 9.79575V11.599H8.07047ZM6.54545 12.3515V11.9753H8.45455V12.3515H6.54545ZM8.45455 12.7277H6.92953L8.45455 14.531V12.7277ZM6.54545 16.1139V14.9852H8.45455V16.1139H6.54545ZM6.54545 12.8056V14.6089H8.07047L6.54545 12.8056ZM6.92953 16.4901L8.45455 18.2934V16.4901H6.92953Z" fill="white" fillOpacity="0.4"/>
</svg>;

const mediumLiftIcon = <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='select-none shrink-0 translate-y-[-5px]'>
<path d="M13.2767 12.9512C13.2146 11.2677 13.3605 10.8722 14.5 9.5C15.6395 10.8722 15.7854 11.2677 15.7233 12.9512C15.6612 14.6346 15.6974 14.2234 15.7233 15.5L16.5 16.6784V18.383H15.7233V19.5H14.5841H14.4159H13.2767V18.383H12.5V16.6784L13.2767 15.5C13.3026 14.2234 13.3388 14.6346 13.2767 12.9512Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M6.84091 0.5L6.84084 3.32179H4.13636V3.69802H4.61364V5.57921H4.13636V5.95545H4.77273V17.3863L4.03804 19.1238H3.5V19.5H10.5V19.1238H9.96196L9.22727 17.3863V16.4668H13.5V16.05H9.22727V12.9968H13.5V12.58H9.22727V5.95545H9.86364V5.57921H9.38636V3.69802H9.86364V3.32179H7.15902L7.15909 0.500011L6.84091 0.5ZM4.93182 5.57921V3.69802H5.72727V5.57921H4.93182ZM6.36364 5.57921V3.69802H7.63636V5.57921H6.36364ZM8.27273 5.57921V3.69802H9.06818V5.57921H8.27273ZM6.04545 5.95545H7.95455V6.33169H6.04545V5.95545ZM6.04545 19.1238V18.7475H7.95455V19.1238H6.04545ZM4.77273 19.1238V18.2276L4.39378 19.1238H4.77273ZM7.95455 6.70792H6.42953L7.95455 8.51119V6.70792ZM9.60622 19.1238L9.22727 18.2276V19.1238H9.60622ZM7.57047 18.3713H6.04545V16.568L7.57047 18.3713ZM6.04545 6.78585V8.58911H7.57047L6.04545 6.78585ZM6.04545 9.34159V8.96535H7.95455V9.34159H6.04545ZM7.95455 9.71783H6.42953L7.95455 11.5211V9.71783ZM6.04545 9.79575L7.57047 11.599H6.04545V9.79575ZM6.04545 11.9753V12.3515H7.95455V11.9753H6.04545ZM6.42953 12.7277H7.95455V14.531L6.42953 12.7277ZM6.04545 14.9852V16.1139H7.95455V14.9852H6.04545ZM6.04545 14.6089V12.8056L7.57047 14.6089H6.04545ZM7.95455 18.2934L6.42953 16.4901H7.95455V18.2934Z" fill="white" fillOpacity="0.4"/>
</svg>;

const heavyLiftIcon = <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='select-none shrink-0 translate-y-[-5px]'>
<path d="M12.9709 8.95115C12.8932 7.26766 13.0756 6.87221 14.5 5.5C15.9244 6.87221 16.1068 7.26766 16.0291 8.95115C15.9515 10.6346 15.9968 13.8945 16.0291 15.1712L17 16.3496V18.0541H16.0291V19.5H14.6052H14.3948H12.9709V18.0541H12V16.3496L12.9709 15.1712C13.0032 13.8945 13.0485 10.6346 12.9709 8.95115Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M6.34084 3.32179L6.34091 0.5L6.65909 0.500011L6.65902 3.32179H9.36364V3.69802H8.88636V5.57921H9.36364V5.95545H8.72727V8.7H13V9.11684H8.72727V12.3316H13V12.7484H8.72727V15.96H13V16.3768H8.72727V17.3863L9.46196 19.1238H10V19.5H3V19.1238H3.53804L4.27273 17.3863V5.95545H3.63636V5.57921H4.11364V3.69802H3.63636V3.32179H6.34084ZM4.43182 3.69802V5.57921H5.22727V3.69802H4.43182ZM5.86364 3.69802V5.57921H7.13636V3.69802H5.86364ZM7.77273 3.69802V5.57921H8.56818V3.69802H7.77273ZM7.45455 5.95545H5.54545V6.33169H7.45455V5.95545ZM5.54545 18.7475V19.1238H7.45455V18.7475H5.54545ZM4.27273 18.2276V19.1238H3.89378L4.27273 18.2276ZM5.92953 6.70792H7.45455V8.51119L5.92953 6.70792ZM8.72727 18.2276L9.10622 19.1238H8.72727V18.2276ZM5.54545 18.3713H7.07047L5.54545 16.568V18.3713ZM5.54545 8.58911V6.78585L7.07047 8.58911H5.54545ZM5.54545 8.96535V9.34159H7.45455V8.96535H5.54545ZM5.92953 9.71783H7.45455V11.5211L5.92953 9.71783ZM7.07047 11.599L5.54545 9.79575V11.599H7.07047ZM5.54545 12.3515V11.9753H7.45455V12.3515H5.54545ZM7.45455 12.7277H5.92953L7.45455 14.531V12.7277ZM5.54545 16.1139V14.9852H7.45455V16.1139H5.54545ZM5.54545 12.8056V14.6089H7.07047L5.54545 12.8056ZM5.92953 16.4901L7.45455 18.2934V16.4901H5.92953Z" fill="white" fillOpacity="0.4"/>
</svg>;

const superHeavyLiftIcon = <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='select-none shrink-0 translate-y-[-5px]'>
<path d="M12.4651 6.95115C12.3719 5.26766 12.5907 2.87221 14.3 1.5C16.0093 2.87221 16.2282 5.26766 16.135 6.95115C16.0417 8.63464 16.0961 13.8945 16.135 15.1712L17.3 16.3496V18.0541H16.135V19.5H14.4262H14.1738H12.4651V18.0541H11.3V16.3496L12.4651 15.1712C12.5039 13.8945 12.5583 8.63464 12.4651 6.95115Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M5.84091 0.5L5.84084 3.32179H3.13636V3.69802H3.61364V5.57921H3.13636V5.95545H3.77273V17.3863L3.03804 19.1238H2.5V19.5H9.5V19.1238H8.96196L8.82506 18.8H13.5V18.3H8.61363L8.22727 17.3863V14.8H14.5V14.3H8.22727V10.8H13.5V10.3H8.22727V6.8H13.5V6.3H8.22727V5.95545H8.86364V5.57921H8.38636V3.69802H8.86364V3.32179H6.15902L6.15909 0.500011L5.84091 0.5ZM8.2579 18.3L8.22727 18.2276V18.3H8.2579ZM8.22727 18.8V19.1238H8.60622L8.46932 18.8H8.22727ZM3.93182 5.57921V3.69802H4.72727V5.57921H3.93182ZM5.36364 5.57921V3.69802H6.63636V5.57921H5.36364ZM7.27273 5.57921V3.69802H8.06818V5.57921H7.27273ZM5.04545 5.95545H6.95455V6.33169H5.04545V5.95545ZM5.04545 19.1238V18.7475H6.95455V19.1238H5.04545ZM3.77273 19.1238V18.2276L3.39378 19.1238H3.77273ZM6.95455 6.70792H5.42953L6.95455 8.51119V6.70792ZM6.57047 18.3713H5.04545V16.568L6.57047 18.3713ZM5.04545 6.78585V8.58911H6.57047L5.04545 6.78585ZM5.04545 9.34159V8.96535H6.95455V9.34159H5.04545ZM6.95455 9.71783H5.42953L6.95455 11.5211V9.71783ZM5.04545 9.79575L6.57047 11.599H5.04545V9.79575ZM5.04545 11.9753V12.3515H6.95455V11.9753H5.04545ZM5.42953 12.7277H6.95455V14.531L5.42953 12.7277ZM5.04545 14.9852V16.1139H6.95455V14.9852H5.04545ZM5.04545 14.6089V12.8056L6.57047 14.6089H5.04545ZM6.95455 18.2934L5.42953 16.4901H6.95455V18.2934Z" fill="white" fillOpacity="0.4"/>
</svg>;