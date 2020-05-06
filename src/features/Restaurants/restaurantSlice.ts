import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Local Dependencies
import { RestaurantState, Restaurant } from './types';

const initialState: RestaurantState = {
  isLoading: false,
  error: null,
  restaurantData: [],
};

const startLoading = (state: RestaurantState) => {
  state.isLoading = true;
};

const loadingFailed = (
  state: RestaurantState,
  action: PayloadAction<string>
) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    requestRestaurantDataPending: startLoading,
    requestRestaurantDataSuccess: (
      state: RestaurantState,
      action: PayloadAction<any>
    ) => {
      return {
        ...state,
        restaurantData: action.payload.sort((a: Restaurant, b: Restaurant) =>
          a.name.toLowerCase() > b.name.toLowerCase()
            ? 1
            : b.name.toLowerCase() > a.name.toLowerCase()
            ? -1
            : 0
        ),
        isLoading: false,
      };
    },
    requestRestaurantDataFailure: loadingFailed,
  },
});

export const {
  requestRestaurantDataPending,
  requestRestaurantDataSuccess,
  requestRestaurantDataFailure,
} = restaurantSlice.actions;

export default restaurantSlice.reducer;
