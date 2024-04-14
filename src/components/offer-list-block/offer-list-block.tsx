import { useState } from 'react';
import { TCityName, TOfferList } from '../../types';
import { MAP_CENTER_TYPES } from '../../consts';
import Map from '../map/map';
import BlockEmpty from './block-empty';
import BlockFull from './block-full';

type TOfferListBlockProps = {
  offersList: TOfferList;
  activeCity: TCityName;
}

function OfferListBlock({offersList, activeCity}: TOfferListBlockProps) : JSX.Element {
  const isEmpty: boolean = offersList.length === 0;
  const [activeOfferId, setActiveOfferId] = useState<string|null>(null);
  const emptyClassName = isEmpty ? ' cities__places-container--empty' : '';
  const sectionClass = isEmpty ? 'cities__no-places' : 'cities__places places';

  function handleMouseEnter(id:string) {
    setActiveOfferId(id);
  }

  function handleMouseLeave() {
    setActiveOfferId(null);
  }

  const offersBlock : JSX.Element = isEmpty ? <BlockEmpty activeCity={activeCity}/> : <BlockFull offersList={offersList} activeCity={activeCity} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>;

  return(
    <div className="cities">
      <div className={`cities__places-container${emptyClassName} container`}>
        <section className={sectionClass}>
          {offersBlock}
        </section>
        <div className="cities__right-section">
          {!isEmpty && <Map activeOfferId={activeOfferId} offers={offersList} prefixName={'cities'} type={MAP_CENTER_TYPES[0]} cityName={activeCity}/>}
        </div>
      </div>
    </div>
  );
}

export default OfferListBlock;
