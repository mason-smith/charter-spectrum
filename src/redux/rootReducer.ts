import restaurantReducer from 'features/Restaurants/restaurantSlice';
import appSettingsReducer from './appSettingsSlice';

const rootReducer = {
  appSettings: appSettingsReducer,
  restaurants: restaurantReducer,
};

export default rootReducer;
