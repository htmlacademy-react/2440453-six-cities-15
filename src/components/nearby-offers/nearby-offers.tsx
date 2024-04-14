import { SIZES } from '../../consts';
import { TOfferList } from '../../types';
import OfferList from '../offer-list/offer-list';

type TNearbyOffersProps = {
  offers: TOfferList;
}
function NearbyOffers({offers}: TNearbyOffersProps) : JSX.Element {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        {offers.length > 0 && <OfferList listClassName={'near-places__list places__list'} offerList={offers} cardSize={SIZES.offers} prefixClass={'near-places'}/>}
      </section>
    </div>
  );
}

export default NearbyOffers;
