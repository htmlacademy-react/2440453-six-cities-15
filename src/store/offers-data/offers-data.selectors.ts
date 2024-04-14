import { State } from '..';
import { StateNamespace } from '../../consts';
import { TOfferList, TOfferLoadStatus } from '../../types';

export const getOffers = (state: State): TOfferList => state[StateNamespace.Offers].offers;
export const getOffersLoadStatus = (state: State): TOfferLoadStatus => state[StateNamespace.Offers].offersLoadStatus;
