import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TCommonState } from '../../types/state';
import { CITY_LIST, SortItems, StateNamespace } from '../../consts';
import { fetchFavoritesList, fetchOffer, fetchOffersList, postReview, updateFavoriteStatus } from '../api-actions';
import { TCityName } from '../../types';

const initialState: TCommonState = {
  city: CITY_LIST[0],
  activeSort: SortItems.Popular,
  error: null,
};

export const commonData = createSlice({
  name: StateNamespace.Common,
  initialState,
  reducers: {
    changeCity: (state, action : PayloadAction<{city: TCityName}>) => {
      state.city = action.payload.city;
    },
    changeActiveSort: (state, action : PayloadAction<{sortItem: SortItems}>) => {
      state.activeSort = action.payload.sortItem;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersList.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : 'error';
      })
      .addCase(fetchFavoritesList.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : 'error';
      })
      .addCase(fetchOffer.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : 'error';
      })
      .addCase(postReview.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : 'error';
      })
      .addCase(updateFavoriteStatus.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : 'error';
      })
      .addCase(fetchOffersList.pending, (state) => {
        state.error = '';
      })
      .addCase(fetchFavoritesList.pending, (state) => {
        state.error = '';
      })
      .addCase(fetchOffer.pending, (state) => {
        state.error = '';
      })
      .addCase(postReview.pending, (state) => {
        state.error = '';
      })
      .addCase(updateFavoriteStatus.pending, (state) => {
        state.error = '';
      });
  }
});

export const {changeCity, changeActiveSort} = commonData.actions;
