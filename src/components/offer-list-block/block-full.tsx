import { TCityName, TOfferList } from '../../types';
import { setCorrectEnding, sortOfferList } from '../../utils';
import { SIZES } from '../../consts';
import { useAppSelector } from '../../hooks';
import OfferList from '../offer-list/offer-list';
import SortBlock from '../sort-block/sort-block';
import { getActiveSort } from '../../store';

type TBlockFullProps = {
  offersList: TOfferList;
  activeCity: TCityName;
  handleMouseEnter: (id: string) => void;
  handleMouseLeave: () => void;
}

function BlockFull({offersList, activeCity, handleMouseEnter, handleMouseLeave}: TBlockFullProps) : JSX.Element {
  const activeSort = useAppSelector(getActiveSort);
  const sortedList = sortOfferList(offersList, activeSort);
  return(
    <>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{sortedList.length} place{setCorrectEnding(sortedList.length)} to stay in {activeCity}</b>
      <SortBlock activeSort={activeSort}/>
      <OfferList offerList={sortedList} listClassName={'cities__places-list places__list tabs__content'} cardSize={SIZES.offers} prefixClass={'cities'} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>
    </>
  );
}

export default BlockFull;

