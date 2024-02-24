import SortBlock from '../sort-block/sort-block';
import { TOfferList } from '../../types';
import OfferCard from '../offer-card/offer-card';

type TOfferListProps = {
  offerList: TOfferList;
}

function OfferList({offerList}: TOfferListProps) : JSX.Element {
  const offers = offerList.map((offer) => <OfferCard offer={offer} key={offer.id}/>);
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offerList.length} places to stay in Amsterdam</b>
      <SortBlock/>
      <div className="cities__places-list places__list tabs__content">
        {offers}
      </div>
    </section>
  );
}

export default OfferList;
