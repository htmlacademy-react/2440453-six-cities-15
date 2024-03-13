import Map from '../map/map';
import { TCityName, TOfferList } from '../../types';
import { useState } from 'react';
import { MAP_CENTER_TYPES } from '../../consts';
import BlockEmpty from './block-empty';
import BlockFull from './block-full';

type TOfferListBlockProps = {
  offerList: TOfferList;
  activeCity: TCityName;
}

function OfferListBlock({offerList, activeCity}: TOfferListBlockProps) : JSX.Element {//TODO: как то упростить. выглядит как ужас. И карта не как картинка
  const isEmpty: boolean = offerList.length === 0;
  const [activeOfferId, setActiveOfferId] = useState<string|null>(null);
  const emptyClassName = isEmpty ? ' cities__places-container--empty' : '';
  const sectionClass = isEmpty ? 'cities__no-places' : 'cities__places places';

  function handleMouseEnter(id:string) {
    setActiveOfferId(id);
  }

  function handleMouseLeave() {
    setActiveOfferId(null);
  }

  const offersBlock : JSX.Element = isEmpty ? <BlockEmpty activeCity={activeCity}/> : <BlockFull offerList={offerList} activeCity={activeCity} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>;


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
