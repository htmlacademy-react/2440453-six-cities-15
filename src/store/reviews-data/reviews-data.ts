import { createSlice } from '@reduxjs/toolkit';
import { TReviewsData } from '../../types/state';
import { OFFERS_LOADED_STATUS, StateNamespace } from '../../consts';
import { fetchReviews, postReview } from '../api-actions';

const initialState: TReviewsData = {
  reviewsLoadStatus: OFFERS_LOADED_STATUS[0],
  reviewPostStatus: OFFERS_LOADED_STATUS[0],
  reviews: [],
};

export const reviewsData = createSlice({
  name: StateNamespace.Review,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.reviewsLoadStatus = OFFERS_LOADED_STATUS[1];
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviewsLoadStatus = OFFERS_LOADED_STATUS[2];
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.reviewsLoadStatus = OFFERS_LOADED_STATUS[3];
      })
      .addCase(postReview.pending, (state) => {
        state.reviewPostStatus = OFFERS_LOADED_STATUS[1];
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.reviewPostStatus = OFFERS_LOADED_STATUS[2];
        state.reviews?.push(action.payload);
      })
      .addCase(postReview.rejected, (state) => {
        state.reviewPostStatus = OFFERS_LOADED_STATUS[3];
      });
  }
});
