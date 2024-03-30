import {createAction} from '@reduxjs/toolkit';
import { TCityName, TOfferList, TOfferLoadStatus } from '../types';
import { SortItems } from '../consts';

export const changeCity = createAction<{city:TCityName}>('city/change');

export const fullOffersList = createAction<TOfferList>('offers/full');

export const changeActiveSort = createAction<{sortItem:SortItems}>('sortItem/change');

export const setOffersLoadedStatus = createAction<TOfferLoadStatus>('offersStatus/change');

export const setError = createAction<string | null>('error/set');

