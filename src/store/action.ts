import {createAction} from '@reduxjs/toolkit';
import { TCityName, TOfferFull, TOfferList, TOfferLoadStatus, TReviewList } from '../types';
import { AuthorizationStatus, SortItems } from '../consts';

export const changeCity = createAction<{city:TCityName}>('city/change');

export const fullOffersList = createAction<TOfferList>('offers/full');

export const changeActiveSort = createAction<{sortItem:SortItems}>('sortItem/change');

export const setOffersLoadedStatus = createAction<TOfferLoadStatus>('offersStatus/change');

export const setOfferLoadStatus = createAction<TOfferLoadStatus>('offerStatus/change');

export const setReviewsLoadStatus = createAction<TOfferLoadStatus>('reviewsStatus/change');

export const setError = createAction<string | null>('error/set');

export const setAuthStatus = createAction<AuthorizationStatus>('authStatus/set');

export const setFullOffer = createAction<TOfferFull|null>('offer/set');

export const setReviewsList = createAction<TReviewList|null>('offer/setReviews');

export const setNearest = createAction<TOfferList|null>('offer/setNearest');


