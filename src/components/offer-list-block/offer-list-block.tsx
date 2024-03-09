import OfferList from '../offer-list/offer-list';
import SortBlock from '../sort-block/sort-block';
import Map from '../map/map';
import { TOfferList } from '../../types';
import { useState } from 'react';
import { SIZES } from '../../consts';

type TOfferListBlockProps = {
  offerList: TOfferList;
}

function OfferListBlock({offerList}: TOfferListBlockProps) : JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string|null>(null);

  function handleMouseEnter(id:string) {
    setActiveOfferId(id);
  }

  function handleMouseLeave() {
    setActiveOfferId(null);
  }

  return(
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offerList.length} places to stay in Amsterdam</b>
        <SortBlock/>
        <OfferList offerList={offerList} listClassName='cities__places-list places__list tabs__content' cardSize={SIZES.offers} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>
      </section>
      <div className="cities__right-section">
        <Map activeOfferId={activeOfferId} offers={offerList}/>
      </div>
    </div>
  );
}

export default OfferListBlock;
