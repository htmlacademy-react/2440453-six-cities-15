import { SortItems } from '../../consts';

type TSortItemProps = {
  sortType: SortItems;
  isActive: boolean;
  onClick: (newItem: SortItems) => void;
}

function SortItem({sortType, isActive, onClick}: TSortItemProps) : JSX.Element {
  const className = isActive ? ' places__option--active' : '';
  return (
    <li className={`places__option${className}`} tabIndex={0} onClick={()=>onClick(sortType)}>{sortType}</li>
  );
}

export default SortItem;
