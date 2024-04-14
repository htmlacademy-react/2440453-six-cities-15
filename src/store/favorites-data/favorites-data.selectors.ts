import { State } from '..';
import { StateNamespace } from '../../consts';
import { TOfferList, TOfferLoadStatus } from '../../types';

export const getFavorites = (state: State): TOfferList => state[StateNamespace.Favorites].favorites;
export const getFavoritesLoadStatus = (state: State): TOfferLoadStatus => state[StateNamespace.Favorites].favoritesLoadStatus;
