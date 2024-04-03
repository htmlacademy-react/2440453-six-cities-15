import ReviewBlock from '../../components/review-block/review-block';
import Map from '../map/map';
import { TOfferFull, TOfferList } from '../../types';
import { calcBookmarkActiveClass, calcHiddenPremiumClass } from '../../utils';
import GoodsList from './goods-list';
import Gallery from '../gallery/gallery';
import HostInfo from './host-info';
import { AuthorizationStatus, MAP_CENTER_TYPES } from '../../consts';

type TOfferProps = {
  offer: TOfferFull;
  nearbyOffers: TOfferList;
  authStatus: AuthorizationStatus;
}

function Offer({offer, nearbyOffers, authStatus} : TOfferProps) : JSX.Element {//TODO: основная инфа, ближайшие резать до передачи
  const {title, id, goods, isPremium, isFavorite, images, host, description} = offer;
  const classNamePremium = calcHiddenPremiumClass(isPremium, 'offer__mark');
  const classNameActive = calcBookmarkActiveClass(isFavorite ? isFavorite : false, 'offer__bookmark-button');
  return(
    <section className="offer">
      {images && <Gallery images={images}/>}
      <div className="offer__container container">
        <div className="offer__wrapper">
          <div className={classNamePremium}>
            <span>Premium</span>
          </div>
          <div className="offer__name-wrapper">
            <h1 className="offer__name">
              {title}
            </h1>
            <button className={`${classNameActive} button`} type="button">
              <svg className="offer__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span style={{width: '80%'}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="offer__rating-value rating__value">4.8</span>
          </div>
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">
              Apartment
            </li>
            <li className="offer__feature offer__feature--bedrooms">
              3 Bedrooms
            </li>
            <li className="offer__feature offer__feature--adults">
              Max 4 adults
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">&euro;120</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            {goods && <GoodsList goodsList={goods}/>}
          </div>
          {host && <HostInfo host={host} description={description}/>}
          <ReviewBlock authStatus={authStatus}/>
        </div>
      </div>
      <Map activeOfferId={id} offers={nearbyOffers} prefixName={'offer'} type={MAP_CENTER_TYPES[1]}/>
    </section>
  );
}

export default Offer;
