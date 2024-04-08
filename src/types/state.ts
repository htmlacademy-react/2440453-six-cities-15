import { store } from '../store';
import { AuthorizationStatus, SortItems } from '../consts';
import { TOfferList, TCityName, TOfferLoadStatus, TOfferFull, TReviewList, TUserAuthorisation } from '.';

type TState = {
  city: TCityName;
  offers: TOfferList | [];
  activeSort: SortItems;
  offersLoadStatus: TOfferLoadStatus;
  offerLoadStatus: TOfferLoadStatus;
  reviewsLoadStatus: TOfferLoadStatus;
  favoritesLoadStatus: TOfferLoadStatus;
  error: string | null;
  authorizationStatus: AuthorizationStatus;
  offer: TOfferFull | null;
  reviewsList: TReviewList | null;
  nearestOffers: TOfferList | [];
  favoritesList: TOfferList | <TOfferList>[];
  user: TUserAuthorisation | null;
}

type TAppDispatch = typeof store.dispatch;

export type {
  TState,
  TAppDispatch,
};
