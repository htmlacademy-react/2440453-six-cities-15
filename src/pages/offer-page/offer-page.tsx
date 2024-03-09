import Offer from '../../components/offer/offer';
import { Link } from 'react-router-dom';
import { MAX_NEAREST_OFFERS_COUNT, ROUTE_LIST } from '../../consts';
import { OFFERS_LIST } from '../../mocks';
import { getCount, getNearbyOffers } from '../../utils';
import NearbyOffers from '../../components/nearby-offers/nearby-offers';

function OfferPage() : JSX.Element {//TODO: ближайшие места передавать и в оффер (на карту) и в ближайшие. Ближайшие вынесу позже, явно компонент
  const offer = OFFERS_LIST[0];
  const offerCount = getCount(OFFERS_LIST.length, MAX_NEAREST_OFFERS_COUNT);
  const nearbyOffers = getNearbyOffers(OFFERS_LIST, offerCount);
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={ROUTE_LIST.Root}>
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

      <main className="page__main page__main--offer">
        <Offer offer={offer} nearbyOffers={nearbyOffers}/>
        <NearbyOffers offers={nearbyOffers}/>
      </main>
    </div>
  );
}

export default OfferPage;
