import {configureStore} from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { rootReducer } from './root-reducer';
import { getCity, getError, getActiveSort } from './common-data/common-data.selectors';
import { getFavorites, getFavoritesLoadStatus } from './favorites-data/favorites-data.selectors';
import { getOffer, getNearest, getOfferLoadStatus } from './offer-data/offer-data.selectors';
import { getOffers, getOffersLoadStatus } from './offers-data/offers-data.selectors';
import { getReviews, getReviewsLoadStatus, getReviewsPostStatus } from './reviews-data/reviews-data.selectors';
import { getUser, getAuthStatus } from './user-process/user-process.selectors';
import { fetchFavoritesList, fetchNearest, fetchOffer, fetchOffersList, fetchReviews, login, logout, checkLogin, updateFavoriteStatus, postReview } from './api-actions';
import { changeCity, changeActiveSort } from './common-data/common-data';

const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }),
});

export type State = ReturnType<typeof store.getState>

export {
  getCity,
  getError,
  getActiveSort,
  getFavorites,
  getFavoritesLoadStatus,
  getOffer,
  getNearest,
  getOfferLoadStatus,
  getOffers,
  getOffersLoadStatus,
  getReviews,
  getReviewsLoadStatus,
  getReviewsPostStatus,
  getUser,
  getAuthStatus,
  fetchFavoritesList,
  fetchNearest,
  fetchOffer,
  fetchOffersList,
  fetchReviews,
  login,
  logout,
  checkLogin,
  updateFavoriteStatus,
  postReview,
  changeCity,
  changeActiveSort,
};
