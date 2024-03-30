import { createAsyncThunk } from '@reduxjs/toolkit';
import { TAppDispatch, TOfferList, TState } from '../types';
import { AxiosInstance } from 'axios';
import { setOffersLoadedStatus, fullOffersList, setError } from './action';
import { OFFERS_LOADED_STATUS, TIMEOUT_SHOW_ERROR } from '../consts';

export const fetchOffersList = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadedStatus(OFFERS_LOADED_STATUS[0]));
    const {data} = await api.get<TOfferList>('/offers');
    dispatch(setOffersLoadedStatus(OFFERS_LOADED_STATUS[2]));
    dispatch(fullOffersList(data));
  }
);

export const clearError = createAsyncThunk(
  'data/clearError',
  async (_arg, {dispatch}) => {
    setTimeout(
      () => dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
