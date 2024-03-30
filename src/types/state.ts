import { store } from '../store';
import { AuthorizationStatus, SortItems } from '../consts';
import { TOfferList, TCityName, TOfferLoadStatus } from '.';

type TState = {
  city: TCityName;
  offers: TOfferList;
  activeSort: SortItems;
  offersLoadStatus: TOfferLoadStatus;
  error: string | null;
  authStatus: AuthorizationStatus;
}

type TAppDispatch = typeof store.dispatch;

export type {
  TState,
  TAppDispatch,
};
