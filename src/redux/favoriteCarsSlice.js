import { createSlice } from '@reduxjs/toolkit';

const favoriteCarsSlice = createSlice({
  name: 'favorite',
  initialState: {
    faforiiteCars: [],
  },
  reducers: {
    setFavorite: {
      reducer(state, action) {
        state = { ...state, favorite: action.payload };
        return state;
      },
      prepare(value) {
        return {
          payload: { value },
        };
      },
    },
    deleteFavoriite: {
      reducer(state, action) {
        console.log('delFav - action: ', action);
        return state;
      },
    },
  },
});

export const { addCarsFavorite, deleteCarsFavorite } =
  favoriteCarsSlice.actions;
export const favoriteCarsReducer = favoriteCarsSlice.reducer;
