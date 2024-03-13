import { TCityName, TOfferList } from '../../types';
import OfferList from '../offer-list/offer-list';
import SortBlock from '../sort-block/sort-block';
import { setCorrectEnding } from '../../utils';
import { SIZES } from '../../consts';

type TBlockFullProps = {
  offerList: TOfferList;
  activeCity: TCityName;
  handleMouseEnter: (id: string) => void;
  handleMouseLeave: () => void;
}

function BlockFull({offerList, activeCity, handleMouseEnter, handleMouseLeave}: TBlockFullProps) : JSX.Element {
  return(
    <>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offerList.length} place{setCorrectEnding(offerList.length)} to stay in {activeCity}</b>
      <SortBlock/>
      <OfferList offerList={offerList} listClassName={'cities__places-list places__list tabs__content'} cardSize={SIZES.offers} prefixClass={'cities'} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>
    </>
  );
}

export default BlockFull;

