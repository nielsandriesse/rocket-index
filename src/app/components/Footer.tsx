import { FunctionComponent } from 'react';

const Footer: FunctionComponent = () => {
  return (
    <div className='h-[96px] lg:h-[120px] flex flex-row items-center justify-between border-t border-t-white20 p-4 lg:p-8 gap-8'>
      <div className='flex flex-col gap-2'>
        <span className='text-xs'>CREATED BY NIELS ANDRIESSE</span>
        <span className='text-xs'>SUPPORT THE APP BY <a href='/' target='_blank' className='underline'>DONATING</a></span>
        <span className='text-xs'>CONTRIBUTE ON <a href='https://github.com/nielsandriesse/rocket-index' target='_blank' className='underline'>GITHUB</a></span>
      </div>
    </div>
  );
}

export default Footer;
