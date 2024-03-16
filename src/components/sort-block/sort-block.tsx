import { SortItems } from '../../consts';
import { useAppDispatch } from '../../hooks';
import { changeActiveSort } from '../../store/action';
import SortItem from './sort-item';
import { useState } from 'react';

type TSortBlockProps = {
  activeSort: SortItems;
}
function SortBlock({activeSort}: TSortBlockProps) : JSX.Element {
  const [isOnen, changeOpenStatus] = useState(false);
  const dispatch = useAppDispatch();

  const listClassName = isOnen ? 'places__options--opened' : 'places__options--closed';

  const handleSortItemChange = (newItem: SortItems) => {
    dispatch(changeActiveSort({sortItem: newItem}));
  };

  const listOnClick = () => {
    changeOpenStatus(!isOnen);
  };

  const sortItems = Object.values(SortItems).map((value) => <SortItem sortType={value} isActive={activeSort === value} key={value} onClick={handleSortItemChange}/>);
  return (
    <form className="places__sorting" action="#" method="get" onClick={listOnClick}>
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} >
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${listClassName}`}>
        {sortItems}
      </ul>
    </form>
  );
}

export default SortBlock;
