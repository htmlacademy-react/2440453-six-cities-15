import { store } from '../store';
import { AuthorizationStatus, SortItems } from '../consts';
import { TOfferList, TCityName, TOfferLoadStatus, TOfferFull, TReviewList, TUserAuthorisation } from '.';

type TUserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: TUserAuthorisation | null;
}

type TOfferData = {
  offerLoadStatus: TOfferLoadStatus;
  offer: TOfferFull | null;
  nearestOffers: TOfferList;
}

type TCommonState = {
  activeSort: SortItems;
  city: TCityName;
  error: string | null;
}

type TOffersData = {
  offers: TOfferList;
  offersLoadStatus: TOfferLoadStatus;
}

type TReviewsData = {
  reviewPostStatus: TOfferLoadStatus;
  reviewsLoadStatus: TOfferLoadStatus;
  reviews: TReviewList;
}

type TFavoritesData = {
  favorites: TOfferList;
  favoritesLoadStatus: TOfferLoadStatus;
}

type TAppDispatch = typeof store.dispatch;

export type {
  TAppDispatch,
  TUserProcess,
  TOfferData,
  TOffersData,
  TReviewsData,
  TFavoritesData,
  TCommonState,
};
