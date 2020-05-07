import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Local Dependencies
import styles from './Map.module.css';
import { selectRestaurantData } from './mapSlice';
import { Restaurant } from 'features/Restaurants/types';
import createMap from './util';

const Map = () => {
  let history = useHistory();
  const restaurantData: Restaurant = useSelector<Restaurant>(
    // @ts-ignore
    selectRestaurantData
  );

  useEffect(() => {
    !restaurantData && history.push('/');
  }, [restaurantData, history]);

  useEffect(() => {
    createMap();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.map} id="map"></div>
      <div className={styles.detailsContainer}>
        <h2>{restaurantData?.name}</h2>
        <p>
          <strong>Serves:</strong>{' '}
          {restaurantData?.genre.replace(/,(?=[^\s])/g, ', ')}
        </p>
        <p>
          <strong>Hours:</strong> {restaurantData?.hours}
        </p>
        <p>
          <strong>Address:</strong> {restaurantData?.address1} <br />
          {restaurantData?.city},{restaurantData?.state} <br />
          {restaurantData?.zip}
        </p>
        <p>
          <strong>Phone:</strong> {restaurantData?.telephone}
        </p>
        <p>
          <strong>Website:</strong> {restaurantData?.website}
        </p>
      </div>
    </div>
  );
};

export default Map;
