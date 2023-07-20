import { createSlice } from '@reduxjs/toolkit';
import { Restaurant } from '../../typings';
import { RootState } from '../../store';

interface RestaurantState {
  restaurant: Restaurant;
}

const initialState: RestaurantState = {
  restaurant: null,
};

export const RestaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, actions) => {
      state.restaurant = actions.payload;
    },
  },
});

export const { setRestaurant } = RestaurantSlice.actions;

export const selectRestaurant = (state: RootState) => state.restaurant.restaurant;

export default RestaurantSlice.reducer;
