import restaurantReducer from 'features/Restaurants/restaurantSlice';
import mapReducer from 'features/Map/mapSlice';
import appSettingsReducer from './appSettingsSlice';

const rootReducer = {
  appSettings: appSettingsReducer,
  restaurants: restaurantReducer,
  map: mapReducer,
};

export default rootReducer;
