import { createSlice } from '@reduxjs/toolkit';
import { TUserProcess } from '../../types/state';
import { AuthorizationStatus, StateNamespace } from '../../consts';
import { checkLogin, login, logout } from '../api-actions';


const initialState: TUserProcess = {
  authorizationStatus: AuthorizationStatus.Auth,
  user: null,
};

export const userProcess = createSlice({
  name: StateNamespace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
      })
      .addCase(logout.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkLogin.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(checkLogin.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});
