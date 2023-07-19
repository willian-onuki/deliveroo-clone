import { createSlice } from '@reduxjs/toolkit';
import { Dish } from '../../typings';
import { RootState } from '../../store';

export interface BasketState {
  items: Dish[];
}

const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, actions) => {
      state.items = [...state.items, actions.payload];
    },
    removeFromBasket: (state, actions) => {
      const index = state.items.findIndex(
        (item) => item._id === actions.payload._id
      );

      if (index !== -1) {
        let basket = [...state.items];

        basket.splice(index, 1);
        state.items = basket;
      }
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state: RootState) => state.basket.items;

export const selectBasketTotal = (state: RootState) =>
  state.basket.items.reduce((acc, item) => (acc += item.price), 0);

export const selectBasketItemsById = (state: RootState, id: string) =>
  state.basket.items.filter((item) => item._id === id);

export default basketSlice.reducer;
