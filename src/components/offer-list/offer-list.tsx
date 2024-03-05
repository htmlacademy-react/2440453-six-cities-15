import { TCardSizes, TOfferList } from '../../types';
import OfferCard from '../offer-card/offer-card';

type TOfferListProps = {
  offerList: TOfferList;
  listClassName: string;
  cardSize: TCardSizes;
  handleMouseEnter?: (id: string) => void;
  handleMouseLeave?: () => void;
}

function OfferList({offerList, listClassName, cardSize, handleMouseEnter, handleMouseLeave}: TOfferListProps) : JSX.Element {
  const withMethods = handleMouseEnter && handleMouseLeave;
  const offers = withMethods ? offerList.map((offer) => <OfferCard offer={offer} prefixClass='cities' key={offer.id} cardSizes={cardSize} onMouseEnter={() => handleMouseEnter(offer.id)} onMouseLeave={handleMouseLeave}/>) :
    offerList.map((offer) => <OfferCard offer={offer} prefixClass='cities' key={offer.id} cardSizes={cardSize}/>);
  return (
    <div className={listClassName}>
      {offers}
    </div>
  );
}

export default OfferList;
