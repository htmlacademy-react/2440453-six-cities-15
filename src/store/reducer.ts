import { createReducer } from '@reduxjs/toolkit';
import { CITY_LIST, OFFERS_LOADED_STATUS, SortItems } from '../consts';
import { changeActiveSort, changeCity, fullOffersList, setOffersLoadedStatus } from './action';
import { OFFERS_LIST } from '../mocks';
import { TState } from '../types';

const initialState: TState = {
  city: CITY_LIST[0],
  offers: OFFERS_LIST,
  activeSort: SortItems.Popular,
  offersLoadStatus: OFFERS_LOADED_STATUS[0],
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
    });
});

