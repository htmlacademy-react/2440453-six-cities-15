import { store } from '../store';
import { SortItems } from '../consts';
import { TOfferList, TCityName } from '.';

type TState = {
  city: TCityName;
  offers: TOfferList;
  activeSort: SortItems;
}

type TAppDispatch = typeof store.dispatch;

export type {
  TState,
  TAppDispatch,
}
