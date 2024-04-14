import { useAppDispatch, useAppSelector } from '../../hooks';
import { TCityName, TOfferList } from '../../types';
import { changeCity, getAuthStatus, getCity, getOffersLoadStatus } from '../../store';
import { OFFERS_LOADED_STATUS } from '../../consts';
import OfferListBlock from '../../components/offer-list-block/offer-list-block';
import CitiesList from '../../components/cities-list/cities-list';
import LoadingBlock from '../../components/loading-block/loading-block';
import Header from '../../components/header/header';

type TMainPageProps = {
  offersList: TOfferList| null;
}

function MainPage({offersList}: TMainPageProps) : JSX.Element {
  const dispatch = useAppDispatch();
  const cityName = useAppSelector(getCity);
  const authStatus = useAppSelector(getAuthStatus);
  const cityOffersList = offersList ? offersList.filter((item) => item.city.name === cityName) : [];
  const mainPageClass = cityOffersList.length > 0 ? 'page page--gray page--main' : 'page__main page__main--index page__main--index-empty';
  const loadingStatus = useAppSelector(getOffersLoadStatus);

  const handleCityClick = (isSelected: boolean, newCity: TCityName) => {
    if (!isSelected) {
      dispatch(changeCity({city: newCity}));
    }
  };
  let block : JSX.Element;
  if (cityOffersList && cityOffersList.length > 0 && loadingStatus === OFFERS_LOADED_STATUS[2]) {
    block = <OfferListBlock offersList={cityOffersList} activeCity={cityName}/>;
  } else {
    block = <LoadingBlock/>;
  }

  return (
    <div className={mainPageClass}>
      <Header authStatus={authStatus}/>
      <main className="page__main page__main--index">
        <CitiesList activeCity={cityName} handleCityClick={handleCityClick}/>
        {block}
      </main>
    </div>
  );
}

export default MainPage;
