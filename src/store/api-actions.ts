import { createAsyncThunk } from '@reduxjs/toolkit';
import { TAppDispatch, TOfferList, TState, TUserAuthorisation, TUserData } from '../types';
import { AxiosInstance } from 'axios';
import { setOffersLoadedStatus, fullOffersList, setError, setAuthStatus } from './action';
import { AuthorizationStatus, OFFERS_LOADED_STATUS, TIMEOUT_SHOW_ERROR } from '../consts';

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
  (_arg, {dispatch}) => {
    setTimeout(
      () => dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const login = createAsyncThunk<void, TUserData, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    try {
      await api.post<TUserAuthorisation>('/login', {email, password});
      dispatch(setAuthStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
    }

  }
);


export const checkLogin = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'user/checklogin',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get<TUserAuthorisation>('/login');
      dispatch(setAuthStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
    }
  }
);
