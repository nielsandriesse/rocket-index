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
    <div className={`z-10 flex flex-col ${className} bg-background border border-[#FFFFFF33]`}>
      { items.map((item) => {
        const isSelected = selectedItems.includes(item.value);
        return (
          <div
            key={item.value}
            className={`p-2 text-sm cursor-pointer select-none ${ isSelected ? '' : '' }`}
            onClick={() => {
              const newSelectedItems = isSelected ? selectedItems.filter((selectedItem) => selectedItem !== item.value) : [...selectedItems, item.value];
              onItemsSelected(newSelectedItems);
            }}
          >
            { item.label.toUpperCase() }
          </div>
        )
      }) }
    </div>
  );
}

export default DropdownMenu;