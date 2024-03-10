import { TCardSizes, TOfferList } from '../../types';
import OfferCard from '../offer-card/offer-card';

type TOfferListProps = {
  offerList: TOfferList;
  listClassName: string;
  cardSize: TCardSizes;
  prefixClass: string;
  handleMouseEnter?: (id: string) => void;
  handleMouseLeave?: () => void;
}

function OfferList({offerList, listClassName, cardSize, prefixClass, handleMouseEnter, handleMouseLeave}: TOfferListProps) : JSX.Element {
  const withMethods = handleMouseEnter && handleMouseLeave;
  const offers = withMethods ? offerList.map((offer) => <OfferCard offer={offer} prefixClass={prefixClass} key={offer.id} cardSizes={cardSize} onMouseEnter={() => handleMouseEnter(offer.id)} onMouseLeave={handleMouseLeave}/>) :
    offerList.map((offer) => <OfferCard offer={offer} prefixClass={prefixClass} key={offer.id} cardSizes={cardSize}/>);
  return (
    <div className={listClassName}>
      {offers}
    </div>
  );
}

export default OfferList;
