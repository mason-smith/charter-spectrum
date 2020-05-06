import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Local Dependencies
import fetchRestaurantData from 'features/Restaurants/actions';
import RestaurantTable from 'features/Restaurants';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRestaurantData());
  }, [dispatch]);
  return (
    <div className="App">
      <RestaurantTable />
    </div>
  );
}

export default App;
