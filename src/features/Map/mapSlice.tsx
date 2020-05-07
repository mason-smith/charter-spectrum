import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Local Dependencies
import { RootState } from 'redux/store';
import { Restaurant } from 'features/Restaurants/types';
import { MapState } from './types';

const initialState: MapState = {
  selectedRestaurant: null,
};

export const mapSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurantData: (state: MapState, action: PayloadAction<Restaurant>) => {
      return {
        ...state,
        selectedRestaurant: action.payload,
      };
    },
  },
});

export const selectRestaurantData = (state: RootState) =>
  state.map.selectedRestaurant;

export const { setRestaurantData } = mapSlice.actions;

export default mapSlice.reducer;
