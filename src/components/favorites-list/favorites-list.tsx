import { CITY_LIST } from '../../consts';
import { TOfferList } from '../../types';
import CityOfferList from '../city-offer-list/city-offer-list';

type TFavoritesListProps = {
  offerList: TOfferList;
}

function FavoritesList({offerList}: TFavoritesListProps) : JSX.Element {
  const cities: JSX.Element[] = [];
  let offersCityList: TOfferList = [];
  CITY_LIST.forEach((item) => {
    offersCityList = offerList.filter((offer) => offer.city?.name === item);
    if (offersCityList.length > 0) {
      cities.push(
        <CityOfferList cityName={item} key={item} offersList={offersCityList}/>
      );
    }
  });

  return (
    <ul className="favorites__list">
      {cities}
    </ul>
  );
}

export default FavoritesList;
