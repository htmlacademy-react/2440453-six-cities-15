import { State } from '..';
import { SortItems, StateNamespace } from '../../consts';
import { TCityName } from '../../types';

export const getCity = (state: State): TCityName => state[StateNamespace.Common].city;
export const getError = (state: State): string | null => state[StateNamespace.Common].error;
export const getActiveSort = (state: State): SortItems => state[StateNamespace.Common].activeSort;
