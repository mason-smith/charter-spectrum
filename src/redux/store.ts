import {
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';

// Local Dependencies
import reducer from './rootReducer';

// Create an array of middlewares
let middleware = [...getDefaultMiddleware()] as const;
// We don't want our logger middleware to be
// visible in production environments
if (process.env.NODE_ENV !== 'production') {
  // Prevents importing redux-logger in prod
  // thus reducing bundle size
  const { createLogger } = require('redux-logger');
  // Custom logger configuration
  const logger = createLogger({
    collapsed: true,
    duration: true,
    timestamp: false,
  });
  // Add the logger to middleware array
  middleware = [...middleware, logger] as const;
}

export const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppDispatch = typeof store.dispatch;
