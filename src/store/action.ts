import {createAction} from '@reduxjs/toolkit';
import { TCityName, TOfferList } from '../types';
import { SortItems } from '../consts';

export const changeCity = createAction<{city:TCityName}>('city/change');

export const fullOffersList = createAction<TOfferList>('offers/full');

export const changeActiveSort = createAction<{sortItem:SortItems}>('sortItem/change');
