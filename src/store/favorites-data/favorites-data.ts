import { createSlice } from '@reduxjs/toolkit';
import { TFavoritesData } from '../../types/state';
import { OFFERS_LOADED_STATUS, StateNamespace } from '../../consts';
import { fetchFavoritesList, updateFavoriteStatus } from '../api-actions';

const initialState: TFavoritesData = {
  favorites: [],
  favoritesLoadStatus: OFFERS_LOADED_STATUS[0],
};

export const favoritesData = createSlice({//надо еще менять статус избранного при общем изменении
  name: StateNamespace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesList.pending, (state) => {
        state.favoritesLoadStatus = OFFERS_LOADED_STATUS[1];
      })
      .addCase(fetchFavoritesList.fulfilled, (state, action) => {
        state.favoritesLoadStatus = OFFERS_LOADED_STATUS[2];
        state.favorites = action.payload;
      })
      .addCase(fetchFavoritesList.rejected, (state) => {
        state.favoritesLoadStatus = OFFERS_LOADED_STATUS[3];
      })
      .addCase(updateFavoriteStatus.fulfilled, (state, action) => {
        const el = action.payload;
        if (el.isFavorite) {
          state.favorites?.push(el);
        } else {
          const ind = state.favorites.findIndex((item) => item.id === action.payload.id);
          state.favorites.splice(ind, 1);
        }
      });
  }
});
