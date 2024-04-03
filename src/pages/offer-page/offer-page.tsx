import Offer from '../../components/offer/offer';
import { MAX_NEAREST_OFFERS_COUNT } from '../../consts';
import { OFFERS_LIST } from '../../mocks';
import { getCount, getNearbyOffers } from '../../utils';
import NearbyOffers from '../../components/nearby-offers/nearby-offers';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';

function OfferPage() : JSX.Element {
  const offer = OFFERS_LIST[0];
  const offerCount = getCount(OFFERS_LIST.length, MAX_NEAREST_OFFERS_COUNT);
  const nearbyOffers = getNearbyOffers(OFFERS_LIST, offerCount);
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    <div className="page">
      <Header authStatus={authStatus}/>
      <main className="page__main page__main--offer">
        <Offer offer={offer} nearbyOffers={nearbyOffers} authStatus={authStatus}/>
        <NearbyOffers offers={nearbyOffers}/>
      </main>
    </div>
  );
}

export default OfferPage;
