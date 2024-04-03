import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, CITY_LIST, OFFERS_LOADED_STATUS, SortItems } from '../consts';
import { changeActiveSort, changeCity, fullOffersList, setAuthStatus, setError, setFullOffer, setNearest, setOfferLoadStatus, setOffersLoadedStatus, setReviewsList, setReviewsLoadStatus } from './action';
import { TState } from '../types';

const initialState: TState = {
  city: CITY_LIST[0],
  offers: null,
  activeSort: SortItems.Popular,
  offersLoadStatus: OFFERS_LOADED_STATUS[0],
  offerLoadStatus: OFFERS_LOADED_STATUS[0],
  reviewsLoadStatus: OFFERS_LOADED_STATUS[0],
  error: null,
  authorizationStatus: AuthorizationStatus.NoAuth,
  offer: null,
  nearestOffers: null,
  reviewsList: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(fullOffersList, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeActiveSort, (state, action) => {
      state.activeSort = action.payload.sortItem;
    })
    .addCase(setOffersLoadedStatus, (state, action) => {
      state.offersLoadStatus = action.payload;
    })
    .addCase(setOfferLoadStatus, (state, action) => {
      state.offersLoadStatus = action.payload;
    })
    .addCase(setReviewsLoadStatus, (state, action) => {
      state.offersLoadStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setAuthStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setReviewsList, (state, action) => {
      state.reviewsList = action.payload;
    })
    .addCase(setFullOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setNearest, (state, action) => {
      state.nearestOffers = action.payload;
    });
});

