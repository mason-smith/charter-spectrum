import axios from 'axios';
import { AppThunk, AppDispatch } from 'redux/store';

// Local Dependencies
import {
  requestRestaurantDataPending,
  requestRestaurantDataSuccess,
  requestRestaurantDataFailure,
} from './restaurantSlice';

const fetchRestaurantData = (): AppThunk => async (
  dispatch: AppDispatch,
  getState
) => {
  // Set loading state
  dispatch(requestRestaurantDataPending());
  // Grab params from state
  const state = getState();
  const { apiUrl, apiKey } = state.appSettings;
  const config = {
    headers: { Authorization: apiKey },
  };
  try {
    const { data } = await axios.get(apiUrl, config);
    // Add data to store
    dispatch(requestRestaurantDataSuccess(data));
  } catch (error) {
    // Send error
    dispatch(requestRestaurantDataFailure(error));
  }
};

export default fetchRestaurantData;
