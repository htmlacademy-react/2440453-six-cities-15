import OfferList from '../offer-list/offer-list';
import SortBlock from '../sort-block/sort-block';
import Map from '../map/map';
import { TCityName, TOfferList } from '../../types';
import { useState } from 'react';
import { MAP_CENTER_TYPES, SIZES } from '../../consts';
import OfferListBlockEmpty from './offer-list-block-empty';
import { setCorrectEnding } from '../../utils';

type TOfferListBlockProps = {
  offerList: TOfferList;
  activeCity: TCityName;
}

function OfferListBlock({offerList, activeCity}: TOfferListBlockProps) : JSX.Element {//TODO: как то упростить. выглядит как ужас. И карта не как картинка
  const isEmpty: boolean = offerList.length === 0;
  const [activeOfferId, setActiveOfferId] = useState<string|null>(null);
  const emptyClassName = isEmpty ? ' cities__places-container--empty' : '';
  const sectionClass = isEmpty ? 'cities__no-places' : 'cities__places places';

  const offersBlock : JSX.Element = isEmpty ? <OfferListBlockEmpty activeCity={activeCity}/> : <><h2 className="visually-hidden">Places</h2>
  <b className="places__found">{offerList.length} place{setCorrectEnding(offerList.length)} to stay in {activeCity}</b>
  <SortBlock/>
  <OfferList offerList={offerList} listClassName={'cities__places-list places__list tabs__content'} cardSize={SIZES.offers} prefixClass={'cities'} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/></>

  function handleMouseEnter(id:string) {
    setActiveOfferId(id);
  }

  function handleMouseLeave() {
    setActiveOfferId(null);
  }

  return(
    <div className="cities">
      <div className={`cities__places-container${emptyClassName} container`}>
        <section className={sectionClass}>
          {offersBlock}
        </section>
        <div className="cities__right-section">
          {offerList.length > 0 && <Map activeOfferId={activeOfferId} offers={offerList} prefixName={'cities'} type={MAP_CENTER_TYPES[0]} cityName={activeCity}/>}
        </div>
      </div>
    </div>
  );
}

export default OfferListBlock;
