import { configureStore } from '@reduxjs/toolkit';
// import { cardLogApi } from '../services';

export const store = configureStore({
  reducer: {},
  //   reducer: {
  //     [cardLogApi.reducerPath]: cardLogApi.reducer,
  //   },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardLogApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
