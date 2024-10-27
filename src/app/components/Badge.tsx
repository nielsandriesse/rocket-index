import { FunctionComponent } from 'react';

type Props = {
  label: string;
  color: string;
}

const Badge: FunctionComponent<Props> = ({ label, color }) => {
  return (
    <div className={`text-xs flex flex-row items-center gap-2 shrink-0`}>
      <div className={`w-[8px] h-[8px] rounded-full`} style={{ backgroundColor: color }} />
      <span className='select-none'>{ label }</span>
    </div>
  )
}

export default Badge;
