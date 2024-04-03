import { createAsyncThunk } from '@reduxjs/toolkit';
import { TAppDispatch, TOfferFull, TOfferList, TReviewList, TState, TUserAuthorisation, TUserData } from '../types';
import { AxiosInstance } from 'axios';
import { setOffersLoadedStatus, fullOffersList, setError, setAuthStatus, setOfferLoadStatus, setFullOffer, setNearest, setReviewsLoadStatus, setReviewsList } from './action';
import { AuthorizationStatus, OFFERS_LOADED_STATUS, TIMEOUT_SHOW_ERROR } from '../consts';
import { dropToken } from '../services/token';

export const fetchOffersList = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadedStatus(OFFERS_LOADED_STATUS[1]));
    try {
      const {data} = await api.get<TOfferList>('/offers');
      dispatch(setOffersLoadedStatus(OFFERS_LOADED_STATUS[2]));
      dispatch(fullOffersList(data));
    } catch {
      dispatch(setOffersLoadedStatus(OFFERS_LOADED_STATUS[3]));
    }
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


export const logout = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.delete('/logout');
      dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
      dropToken();
    } catch {
      dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
    }
  }
);


export const fetchOffer = createAsyncThunk<void, string, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (id, {dispatch, extra: api}) => {
    dispatch(setOfferLoadStatus(OFFERS_LOADED_STATUS[1]));
    try {
      const {data} = await api.get<TOfferFull>(`/offers/${id}`);
      dispatch(setOffersLoadedStatus(OFFERS_LOADED_STATUS[2]));
      dispatch(setFullOffer(data));
    } catch {
      dispatch(setOfferLoadStatus(OFFERS_LOADED_STATUS[3]));
    }
  }
);


export const fetchNearest = createAsyncThunk<void, string, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'data/fetchNearby',
  async (id, {dispatch, extra: api}) => {
    dispatch(setOfferLoadStatus(OFFERS_LOADED_STATUS[1]));
    try {
      const {data} = await api.get<TOfferList>(`/offers/${id}/nearby`);
      dispatch(setOffersLoadedStatus(OFFERS_LOADED_STATUS[2]));
      dispatch(setNearest(data));
    } catch {
      dispatch(setOfferLoadStatus(OFFERS_LOADED_STATUS[3]));
    }
  }
);


export const fetchReviews = createAsyncThunk<void, string, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (id, {dispatch, extra: api}) => {
    dispatch(setReviewsLoadStatus(OFFERS_LOADED_STATUS[1]));
    try {
      const {data} = await api.get<TReviewList>(`/comments/${id}`);
      dispatch(setReviewsLoadStatus(OFFERS_LOADED_STATUS[2]));
      dispatch(setReviewsList(data));
    } catch {
      dispatch(setReviewsLoadStatus(OFFERS_LOADED_STATUS[3]));
    }
  }
);
