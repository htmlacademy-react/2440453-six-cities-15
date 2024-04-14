import { createSlice } from '@reduxjs/toolkit';
import { TOfferData } from '../../types/state';
import { OFFERS_LOADED_STATUS, StateNamespace } from '../../consts';
import { fetchNearest, fetchOffer, updateFavoriteStatus } from '../api-actions';

const initialState: TOfferData = {
  offer: null,
  nearestOffers: [],
  offerLoadStatus: OFFERS_LOADED_STATUS[0],
};

export const offerData = createSlice({
  name: StateNamespace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffer.pending, (state) => {
        state.offerLoadStatus = OFFERS_LOADED_STATUS[1];
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.offerLoadStatus = OFFERS_LOADED_STATUS[2];
        state.offer = action.payload;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.offerLoadStatus = OFFERS_LOADED_STATUS[3];
      })
      .addCase(fetchNearest.fulfilled, (state, action) => {
        state.nearestOffers = action.payload;
      })
      .addCase(updateFavoriteStatus.fulfilled, (state, action) => {
        if (state.offer?.id === action.payload.id) {
          state.offer.isFavorite = Boolean(action.payload.isFavorite);
        }
      });
  }
});
