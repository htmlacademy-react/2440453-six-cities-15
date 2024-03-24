import { store } from '../store';
import { SortItems } from '../consts';
import { TOfferList, TCityName, TOfferLoadStatus } from '.';

type TState = {
  city: TCityName;
  offers: TOfferList;
  activeSort: SortItems;
  offersLoadStatus: TOfferLoadStatus;
}

type TAppDispatch = typeof store.dispatch;

export type {
  TState,
  TAppDispatch,
}
