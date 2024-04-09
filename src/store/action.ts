import {createAction} from '@reduxjs/toolkit';
import { TCityName, TFavorite, TOfferFull, TOfferList, TOfferLoadStatus, TReview, TReviewList, TUserAuthorisation } from '../types';
import { AuthorizationStatus, SortItems } from '../consts';

export const changeCity = createAction<{city:TCityName}>('city/change');

export const fullOffersList = createAction<TOfferList>('offers/full');

export const changeActiveSort = createAction<{sortItem:SortItems}>('sortItem/change');

export const setOffersLoadedStatus = createAction<TOfferLoadStatus>('offersStatus/change');

export const setOfferLoadStatus = createAction<TOfferLoadStatus>('offerStatus/change');

export const setReviewsLoadStatus = createAction<TOfferLoadStatus>('reviewsStatus/change');

export const setReviewPostStatus = createAction<TOfferLoadStatus>('reviewStatus/change');

export const setFavoritesLoadStatus = createAction<TOfferLoadStatus>('favoritesStatus/change');

export const setError = createAction<string | null>('error/set');

export const setAuthStatus = createAction<AuthorizationStatus>('authStatus/set');

export const setFullOffer = createAction<TOfferFull|null>('offer/set');

export const setReviewsList = createAction<TReviewList|null>('offer/setReviews');

export const setNearest = createAction<TOfferList|[]>('offer/setNearest');

export const addReview = createAction<TReview>('reviews/add');

export const fullFavoritesList = createAction<TOfferList|[]>('favorites/full');

export const changeOffers = createAction<TFavorite>('offers/change');

export const changeFavorites = createAction<TFavorite>('favorites/change');

export const setUser = createAction<TUserAuthorisation|null>('user/set');

export const updateOffer = createAction<TFavorite>('offer/change');

