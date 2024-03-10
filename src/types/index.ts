import { THost, TOffer, TOfferList, TOfferFull, TCardSizes } from './offer';
import { TCity, TLocation, TCityName } from './city';
import { TUser, TAuthorisation, TUserData, TUserAuthorisation } from './user';
import { TCommentData, TOfferReview, TReview, TReviewList } from './review';
import { MAP_CENTER_TYPES } from '../consts';

type TMapCenterType = typeof MAP_CENTER_TYPES[number];

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
};
