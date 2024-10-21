import { FunctionComponent } from 'react';

const Footer: FunctionComponent = () => {
  return (
    <div className='h-[96px] flex flex-row items-center justify-between border-t border-t-[#FFFFFF33] px-8 gap-8'>
      <span className='text-xs'>CREATED BY NIELS ANDRIESSE</span>
      <span className='text-xs'>SUPPORT THE APP BY <a href='/' target='_blank' className='underline'>DONATING</a></span>
    </div>
  );
}

export default Footer;
