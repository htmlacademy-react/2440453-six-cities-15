import { Link } from 'react-router-dom';
import OfferListBlock from '../../components/offer-list-block/offer-list-block';
import { ROUTE_LIST } from '../../consts';
import CitiesList from '../../components/cities-list/cities-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { TCityName } from '../../types';
import { changeCity } from '../../store/action';


function MainPage() : JSX.Element {
  const cityName = useAppSelector((state) => state.city);
  const cityOffersList = useAppSelector((state) => state.offers).filter((item) => item.city.name === cityName);
  const dispatch = useAppDispatch();

  const mainPageClass = cityOffersList.length === 0 ? 'page__main page__main--index page__main--index-empty' : 'page page--gray page--main';

  const handleCityClick = (isSelected: boolean, newCity: TCityName) => {
    if (!isSelected) {
      dispatch(changeCity({city: newCity}));
    }
  };
  return (
    <div className={mainPageClass}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={ROUTE_LIST.Root} className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <CitiesList activeCity={cityName} handleCityClick={handleCityClick}/>
        <OfferListBlock offerList={cityOffersList} activeCity={cityName}/>
      </main>
    </div>
  );
}

export default MainPage;
