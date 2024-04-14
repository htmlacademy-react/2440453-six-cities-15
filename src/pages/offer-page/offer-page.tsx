import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MAX_NEAREST_OFFERS_COUNT, OFFERS_LOADED_STATUS, RouteList } from '../../consts';
import { getCount, getNearbyOffers } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchNearest, fetchOffer, fetchReviews, getAuthStatus, getNearest, getOffer, getOfferLoadStatus } from '../../store';
import NearbyOffers from '../../components/nearby-offers/nearby-offers';
import Header from '../../components/header/header';
import Offer from '../../components/offer/offer';
import LoadingBlock from '../../components/loading-block/loading-block';

function OfferPage() : JSX.Element {
  const { id } = useParams();
  const navigate = useNavigate();
  const offer = useAppSelector(getOffer);
  const nearestOffers = useAppSelector(getNearest);
  const offerStatus = useAppSelector(getOfferLoadStatus);
  const authStatus = useAppSelector(getAuthStatus);
  const dispatch = useAppDispatch();
  const offerCount = nearestOffers ? getCount(nearestOffers.length, MAX_NEAREST_OFFERS_COUNT) : 0;
  const nearbyOffers = nearestOffers ? getNearbyOffers(nearestOffers, offerCount) : [];
  let block : JSX.Element = <main className="page__main page__main--offer"></main>;


  useEffect(() => {
    if (id) {
      const strId = id.toString();
      dispatch(fetchOffer(strId));
      dispatch(fetchReviews(strId));
      dispatch(fetchNearest(strId));
    }
  }, [id, dispatch]);

  if (offerStatus === OFFERS_LOADED_STATUS[0] || offerStatus === OFFERS_LOADED_STATUS[1]) {
    block = <main className="page__main page__main--offer"><LoadingBlock/></main>;
  } else if (offerStatus === OFFERS_LOADED_STATUS[2] && offer) {
    block = <main className="page__main page__main--offer"><Offer offer={offer} nearbyOffers={nearbyOffers} authStatus={authStatus}/><NearbyOffers offers={nearbyOffers}/></main>;
  } else {
    navigate(RouteList.Unknown);
  }

  return (
    <div className="page">
      <Header authStatus={authStatus}/>
      {block}
    </div>
  );
}

export default OfferPage;
