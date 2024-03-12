import { THost, TOffer, TOfferList, TOfferFull, TCardSizes } from './offer';
import { TCity, TLocation, TCityName } from './city';
import { TUser, TAuthorisation, TUserData, TUserAuthorisation } from './user';
import { TCommentData, TOfferReview, TReview, TReviewList } from './review';
import { MAP_CENTER_TYPES } from '../consts';
import { store } from '../store';
//import { store } from '../store';

type TMapCenterType = typeof MAP_CENTER_TYPES[number];
//type TState = ReturnType<typeof store.getState>;
type TState = {
  city: TCityName;
  offers: TOfferList;
}

type TAppDispatch = typeof store.dispatch;

export type {
  THost,
  TLocation,
  TCity,
  TCityName,
  TOffer,
  TOfferFull,
  TOfferList,
  TCardSizes,
  TUser,
  TAuthorisation,
  TUserData,
  TUserAuthorisation,
  TCommentData,
  TOfferReview,
  TReview,
  TReviewList,
  TMapCenterType,
  TState,
  TAppDispatch,
};
