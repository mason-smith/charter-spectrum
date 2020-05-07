import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

// Local Dependencies
import styles from './Map.module.css';
import { selectRestaurantData } from './mapSlice';
import { Restaurant } from 'features/Restaurants/types';
import createMap from './util';

const Map = () => {
  const restaurantData: Restaurant = useSelector<Restaurant>(
    // @ts-ignore
    selectRestaurantData
  );

  useEffect(() => {
    createMap();
  }, []);

  console.log('restaurantData :>> ', restaurantData);
  return (
    <>
      <div className={styles.map} id="map"></div>
    </>
  );
};

export default Map;
