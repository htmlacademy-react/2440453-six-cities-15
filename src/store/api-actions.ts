import { createAsyncThunk } from '@reduxjs/toolkit';
import { TAppDispatch, TCommentData, TFavorite, TOfferFull, TOfferList, TReview, TReviewList, TUserAuthorisation, TUserData } from '../types';
import { AxiosInstance } from 'axios';
import { dropToken, saveToken } from '../services/token';
import { State } from '.';

export const fetchOffersList = createAsyncThunk<TOfferList, undefined, {
  dispatch: TAppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TOfferList>('/offers');
    return data;
  }
);


export const fetchOffer = createAsyncThunk<TOfferFull, string, {
  dispatch: TAppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (id, {extra: api}) => {
    const {data} = await api.get<TOfferFull>(`/offers/${id}`);
    return data;
  }
);


export const fetchNearest = createAsyncThunk<TOfferList, string, {
  dispatch: TAppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearby',
  async (id, {extra: api}) => {
    const {data} = await api.get<TOfferList>(`/offers/${id}/nearby`);
    return data;
  }
);


export const fetchReviews = createAsyncThunk<TReviewList, string, {
  dispatch: TAppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (id, {extra: api}) => {
    const {data} = await api.get<TReviewList>(`/comments/${id}`);
    return data;
  }
);


export const postReview = createAsyncThunk<TReview, TCommentData, {
  dispatch: TAppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postReviews',
  async ({id, comment, rating}, {extra: api}) => {
    const {data} = await api.post<TReview>(`/comments/${id}`, {comment, rating});
    return data;
  }
);


export const fetchFavoritesList = createAsyncThunk<TOfferList, undefined, {
  dispatch: TAppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavorites',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TOfferList>('/favorite');
    return data;
  }
);


export const updateFavoriteStatus = createAsyncThunk<TOfferFull, TFavorite, {
  dispatch: TAppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/updFavorites',
  async ({id, status}, {extra: api}) => {
    const {data} = await api.post<TOfferFull>(`/favorite/${id}/${status}`);
    return data;
  }
);


export const login = createAsyncThunk<TUserAuthorisation, TUserData, {
  dispatch: TAppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<TUserAuthorisation>('/login', {email, password});
    saveToken(data.token);
    dispatch(fetchFavoritesList());
    return data;
  }
);


export const checkLogin = createAsyncThunk<TUserAuthorisation, undefined, {
  dispatch: TAppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checklogin',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<TUserAuthorisation>('/login');
    dispatch(fetchFavoritesList());
    return data;
  }
);


export const logout = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete('/logout');
    dropToken();
  }
);
