import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { modelApi } from '../services/model';
import chartSlice from './slices/chart-slice';

export const store = configureStore({
  reducer: {
    [modelApi.reducerPath]: modelApi.reducer,
    chartConfig: chartSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(modelApi.middleware)
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
