import { configureStore } from '@reduxjs/toolkit';
import { alfabetizaiApi } from '../services/alfabetizaiApi';

export const store = configureStore({
  reducer: {
    [alfabetizaiApi.reducerPath]: alfabetizaiApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(alfabetizaiApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
