'use client';

import { FunctionComponent } from 'react';

type Props = {
  label: string;
  onClick: () => void;
}

const HeaderButton: FunctionComponent<Props> = ({ label, onClick }) => {
  return (
    <div
      className='flex flex-row items-center gap-2 cursor-pointer select-none shrink-0'
      onClick={onClick}
    >
      <span className='text-xs font-bold'>{ label.toUpperCase() }</span>
    </div>
  );
}

export default HeaderButton;