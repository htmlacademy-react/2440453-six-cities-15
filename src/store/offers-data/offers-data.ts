import { createSlice } from '@reduxjs/toolkit';
import { TOffersData } from '../../types/state';
import { OFFERS_LOADED_STATUS, StateNamespace } from '../../consts';
import { fetchOffersList, updateFavoriteStatus } from '../api-actions';

const initialState: TOffersData = {
  offers: [],
  offersLoadStatus: OFFERS_LOADED_STATUS[0],
};

export const offersData = createSlice({
  name: StateNamespace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersList.pending, (state) => {
        state.offersLoadStatus = OFFERS_LOADED_STATUS[1];
      })
      .addCase(fetchOffersList.fulfilled, (state, action) => {
        state.offersLoadStatus = OFFERS_LOADED_STATUS[2];
        state.offers = action.payload;
      })
      .addCase(fetchOffersList.rejected, (state) => {
        state.offersLoadStatus = OFFERS_LOADED_STATUS[3];
      })
      .addCase(updateFavoriteStatus.fulfilled, (state, action) => {
        const el = action.payload;
        const ind = state.offers.findIndex((item) => item.id === el.id);
        state.offers[ind].isFavorite = Boolean(action.payload.isFavorite);
      });
  }
});
