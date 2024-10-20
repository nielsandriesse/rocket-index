import { FunctionComponent } from 'react';

type Props = {
  label: string;
  color: string;
}

const Badge: FunctionComponent<Props> = ({ label, color }) => {
  return (
    <div className={`h-[20px] text-xs border border-[#FFFFFF33] bg-[#FFFFFF1A] px-2 py-1 rounded-[10px] flex flex-row items-center gap-2`}>
      <div className={`w-[8px] h-[8px] rounded-full`} style={{ backgroundColor: color }} />
      <span className='select-none'>{ label }</span>
    </div>
  )
}

export default Badge;
