import { CheckSquare, Square } from 'iconoir-react';
import { FunctionComponent } from 'react';

export type DropdownMenuItem = {
  label: string;
  value: string;
}

type Props = {
  className: string;
  items: DropdownMenuItem[];
  selectedItems: string[];
  onItemsSelected: (items: string[]) => void;
}

const DropdownMenu: FunctionComponent<Props> = ({ className, items, selectedItems, onItemsSelected }) => {

  return (
    <div className={`z-10 flex flex-col ${className} bg-background border border-white20 py-2`}>
      { items.map((item) => {
        const isSelected = selectedItems.includes(item.value);
        return (
          <div
            key={item.value}
            className='px-4 py-2 cursor-pointer select-none flex flex-row gap-2 hover:bg-darkGray'
            onClick={() => {
              const newSelectedItems = isSelected ? selectedItems.filter((selectedItem) => selectedItem !== item.value) : [ ...selectedItems, item.value ];
              onItemsSelected(newSelectedItems);
            }}
          >
            { isSelected ? (
              <CheckSquare color='var(--foreground)' width='16px' height='16px' className='shrink-0' />
            ) : (
              <Square color='var(--foreground)' width='16px' height='16px' className='shrink-0' />
            ) }
            <span className='text-xs'>{ item.label.toUpperCase() }</span>
          </div>
        )
      }) }
    </div>
  );
}

export default DropdownMenu;