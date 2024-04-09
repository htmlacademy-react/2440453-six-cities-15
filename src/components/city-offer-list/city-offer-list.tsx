import { RouteList, SIZES } from '../../consts';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/action';
import { TOfferList } from '../../types';
import { TCityName } from '../../types';
import OfferList from '../offer-list/offer-list';
import { Link } from 'react-router-dom';

type TCityOfferListProps = {
  cityName: TCityName;
  offersList: TOfferList;
}

function CityOfferList({cityName, offersList}: TCityOfferListProps) : JSX.Element { //пока навигация просто на главную, надо на город
  const cardSize = SIZES.favorites;
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(changeCity({city: cityName}));
  };
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link to={RouteList.Root} className="locations__item-link" onClick={onClick}>
            <span>{cityName}</span>
          </Link>
        </div>
      </div>
      <OfferList offerList={offersList} listClassName='favorites__places' cardSize={cardSize} prefixClass={'favorites'}/>
    </li>
  );
}

export default CityOfferList;
