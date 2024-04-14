import { combineReducers } from '@reduxjs/toolkit';
import { StateNamespace } from '../consts';
import { commonData } from './common-data/common-data';
import { favoritesData } from './favorites-data/favorites-data';
import { offerData } from './offer-data/offer-data';
import { offersData } from './offers-data/offers-data';
import { reviewsData } from './reviews-data/reviews-data';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [StateNamespace.Common]: commonData.reducer,
  [StateNamespace.Favorites]: favoritesData.reducer,
  [StateNamespace.Offer]: offerData.reducer,
  [StateNamespace.Offers]: offersData.reducer,
  [StateNamespace.Review]: reviewsData.reducer,
  [StateNamespace.User]: userProcess.reducer,
});
