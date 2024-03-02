import OfferList from '../offer-list/offer-list';
import { TOfferList } from '../../types';
import { useState } from 'react';

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
      <OfferList offerList={offerList} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>
      <div className="cities__right-section">
        <section className="cities__map map" data-id={activeOfferId}></section>
      </div>
    </div>
  );
}

export default OfferListBlock;
