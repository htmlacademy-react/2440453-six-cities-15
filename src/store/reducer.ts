import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, CITY_LIST, OFFERS_LOADED_STATUS, SortItems } from '../consts';
import { addReview, changeActiveSort, changeCity, changeFavorites, changeOffers, fullFavoritesList, fullOffersList, setAuthStatus, setError, setFavoritesLoadStatus, setFullOffer, setNearest, setOfferLoadStatus, setOffersLoadedStatus, setReviewPostStatus, setReviewsList, setReviewsLoadStatus, setUser, updateOffer } from './action';
import { TState } from '../types';

const initialState: TState = {
  city: CITY_LIST[0],
  offers: [],
  activeSort: SortItems.Popular,
  offersLoadStatus: OFFERS_LOADED_STATUS[0],
  offerLoadStatus: OFFERS_LOADED_STATUS[0],
  reviewsLoadStatus: OFFERS_LOADED_STATUS[0],
  reviewPostStatus: OFFERS_LOADED_STATUS[0],
  favoritesLoadStatus: OFFERS_LOADED_STATUS[0],
  error: null,
  authorizationStatus: AuthorizationStatus.NoAuth,
  offer: null,
  nearestOffers: [],
  reviewsList: [],
  favoritesList: [],
  user: null,
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
      state.offerLoadStatus = action.payload;
    })
    .addCase(setReviewsLoadStatus, (state, action) => {
      state.reviewsLoadStatus = action.payload;
    })
    .addCase(setReviewPostStatus, (state, action) => {
      state.reviewPostStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setAuthStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setFavoritesLoadStatus, (state, action) => {
      state.favoritesLoadStatus = action.payload;
    })
    .addCase(setReviewsList, (state, action) => {
      state.reviewsList = action.payload;
    })
    .addCase(setFullOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setNearest, (state, action) => {
      state.nearestOffers = action.payload;
    })
    .addCase(addReview, (state, action) => {
      state.reviewsList?.push(action.payload);
    })
    .addCase(fullFavoritesList, (state, action) => {
      state.favoritesList = action.payload;
    })
    .addCase(changeOffers, (state, action) => {
      const ind = state.offers.findIndex((item) => item.id === action.payload.id);
      state.offers[ind].isFavorite = Boolean(action.payload.status);
    })
    .addCase(changeFavorites, (state, action) => {

      if (action.payload.status) {
        const el = state.offers.find((item) => item.id === action.payload.id);
        if (el) {
          state.favoritesList?.push(el);
        }
      } else {
        const ind = state.favoritesList.findIndex((item) => item.id === action.payload.id);
        state.favoritesList.splice(ind, 1);
      }
    })
    .addCase(updateOffer, (state, action) => {
      if (state.offer?.id === action.payload.id) {
        state.offer.isFavorite = Boolean(action.payload.status);
      }
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    });
});

