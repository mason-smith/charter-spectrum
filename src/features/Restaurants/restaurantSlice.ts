import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RestaurantState {
  isLoading: boolean;
  error: string | null;
  restaurantData: any[];
}

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
        restaurantData: action.payload,
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
