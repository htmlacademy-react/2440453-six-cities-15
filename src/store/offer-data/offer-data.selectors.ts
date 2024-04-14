import { State } from '..';
import { StateNamespace } from '../../consts';
import { TOffer, TOfferList, TOfferLoadStatus } from '../../types';

export const getOffer = (state: State): TOffer | null => state[StateNamespace.Offer].offer;
export const getOfferLoadStatus = (state: State): TOfferLoadStatus => state[StateNamespace.Offer].offerLoadStatus;
export const getNearest = (state: State): TOfferList => state[StateNamespace.Offer].nearestOffers;
