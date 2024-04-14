import { State } from '..';
import { AuthorizationStatus, StateNamespace } from '../../consts';
import { TUserAuthorisation } from '../../types';

export const getUser = (state: State): TUserAuthorisation | null => state[StateNamespace.User].user;
export const getAuthStatus = (state: State): AuthorizationStatus => state[StateNamespace.User].authorizationStatus;
