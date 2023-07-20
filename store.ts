import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './src/features/basketSlice';
import restaurantReducer from './src/features/restaurantSlice';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
