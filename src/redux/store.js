import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { carsApi } from './carsSlice';
import { favoriteCarsReducer } from './favoriteCarsSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'favorite',
  storage,
};

const rootReducer = combineReducers({
  [carsApi.reducerPath]: carsApi.reducer,
  favorite: persistReducer(persistConfig, favoriteCarsReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    carsApi.middleware,
  ],
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);
