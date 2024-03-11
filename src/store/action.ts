import {createAction} from '@reduxjs/toolkit';
import { TCityName, TOfferList } from '../types';

export const changeCity = createAction<{city:TCityName}>('city/change');

export const fullOffersList = createAction<TOfferList>('offers/full');

