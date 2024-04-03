import { store } from '../store';
import { AuthorizationStatus, SortItems } from '../consts';
import { TOfferList, TCityName, TOfferLoadStatus, TOfferFull, TReviewList } from '.';

type TState = {
  city: TCityName;
  offers: TOfferList | null;
  activeSort: SortItems;
  offersLoadStatus: TOfferLoadStatus;
  offerLoadStatus: TOfferLoadStatus;
  reviewsLoadStatus: TOfferLoadStatus;
  error: string | null;
  authorizationStatus: AuthorizationStatus;
  offer: TOfferFull | null;
  reviewsList: TReviewList | null;
  nearestOffers: TOfferList | null;
}

type TAppDispatch = typeof store.dispatch;

export type {
  TState,
  TAppDispatch,
};
