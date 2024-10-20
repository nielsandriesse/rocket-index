import { FunctionComponent } from 'react';
import { NavArrowDown } from 'iconoir-react';

type Props = {
  label: string;
  isMenuExpanded: boolean;
  onClick: () => void;
}

const FilterButton: FunctionComponent<Props> = ({ label, isMenuExpanded, onClick }) => {
  return (
    <div
      className='flex flex-row items-center gap-2 cursor-pointer select-none'
      onClick={onClick}
    >
      <span className='text-sm'>{ label.toUpperCase() }</span>
      <NavArrowDown width='20px' height='20px' className={`transition-transform duration-300 ${ isMenuExpanded ? 'rotate-180' : '' }`} />
    </div>
  );
}

export default FilterButton;