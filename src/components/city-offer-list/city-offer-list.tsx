import { Link } from 'react-router-dom';
import { RouteList, SIZES } from '../../consts';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store';
import { TOfferList, TCityName } from '../../types';
import OfferList from '../offer-list/offer-list';


type TCityOfferListProps = {
  cityName: TCityName;
  offersList: TOfferList;
}

function CityOfferList({cityName, offersList}: TCityOfferListProps) : JSX.Element {
  const cardSize = SIZES.favorites;
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(changeCity({city: cityName}));
  };
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link to={RouteList.Root} className="locations__item-link" onClick={handleClick}>
            <span>{cityName}</span>
          </Link>
        </div>
      </div>
      <OfferList offerList={offersList} listClassName='favorites__places' cardSize={cardSize} prefixClass={'favorites'}/>
    </li>
  );
}

export default CityOfferList;
