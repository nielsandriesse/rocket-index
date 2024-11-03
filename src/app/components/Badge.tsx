'use client';

import { FunctionComponent } from 'react';

type Props = {
  label: string;
  color: string;
  className?: string;
}

const Badge: FunctionComponent<Props> = ({ label, color, className }) => {
  return (
    <div className={`text-xs flex flex-row items-center gap-2 shrink-0 ${className}`}>
      <div className='w-[8px] h-[8px] rounded-full' style={{ backgroundColor: color }} />
      <span className='select-none'>{ label }</span>
    </div>
  )
}

export default Badge;
