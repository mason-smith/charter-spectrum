import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Local Dependencies
import fetchRestaurantData from 'features/Restaurants/actions';
import AppRouter from './Router';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRestaurantData());
  }, [dispatch]);
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
