'use client';

import Image from 'next/image';

import { FunctionComponent } from 'react';

interface Props {
  onLegalClick: () => void;
}

const Footer: FunctionComponent<Props> = ({ onLegalClick }) => {
  return (
    <div className='flex flex-col md:flex-row md:justify-between p-4 lg:p-8 gap-8'>
      <div className='flex flex-col md:flex-row md:items-center gap-8 md:gap-4'>
        <Image src='/images/logo.svg' alt='Rocket Index' className='-ml-1' width={44} height={44} draggable={false} />
        <div className='flex flex-col gap-[2px]'>
          <span className='text-xs font-bold'>SUPPORT ROCKET INDEX</span>
          <span className='text-xs'>YOUR SUPPORT MAKES ROCKET INDEX POSSIBLE. <a href='https://buymeacoffee.com/rocketindex' target='_blank' className='underline'>DONATE</a> OR CONTRIBUTE ON <a href='https://github.com/nielsandriesse/rocket-index' target='_blank' className='underline'>GITHUB</a></span>
        </div>
      </div>

      <div className='flex flex-col gap-[2px] md:items-end'>
        <span className='text-xs'>CREATED AND MAINTAINED BY NIELS ANDRIESSE</span>
        <span className='text-xs'><a href='#' onClick={onLegalClick} className='underline'>DISCLAIMER</a></span>
      </div>
    </div>
  );
}

export default Footer;
