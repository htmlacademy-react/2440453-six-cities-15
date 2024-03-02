import { SIZES } from '../../consts';
import { TOfferList } from '../../types';
import { TCityName } from '../../types/city';
import OfferList from '../offer-list/offer-list';

type TCityOfferListProps = {
  cityName: TCityName;
  offersList: TOfferList;
}

function CityOfferList({cityName, offersList}: TCityOfferListProps) : JSX.Element {
  const cardSize = SIZES.favorites;
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <OfferList offerList={offersList} listClassName='favorites__places' cardSize={cardSize}/>
    </li>
  );
}

export default CityOfferList;
