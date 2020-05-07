import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Local Dependencies
import styles from './Map.module.css';
import { selectRestaurantData } from './mapSlice';
import { Restaurant } from 'features/Restaurants/types';
import createMap from './util';
import Button from 'components/Button';

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
    restaurantData && createMap(restaurantData);
  }, [restaurantData]);

  console.log(
    "restaurantData?.telephone.replace(/[{()}]/g, '') :>> ",
    restaurantData?.telephone.replace(/[{()}]/g, '')
  );

  return (
    <div className={styles.container}>
      <div className={styles.map} id="map"></div>
      <div className={styles.detailsContainer}>
        <h2>{restaurantData?.name}</h2>
        <p>
          <strong>Serves:</strong>
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
          <strong>Phone: </strong>
          <a href={`tel:${restaurantData?.telephone.replace(/[{()}]/g, '')}`}>
            {restaurantData?.telephone}
          </a>
        </p>
        <p>
          <strong>Website: </strong>
          <a
            rel="noopener noreferrer"
            href={restaurantData?.website}
            target="_blank"
          >
            {restaurantData?.website}
          </a>
        </p>
        <Button onClick={() => history.push('/')}>Go Back</Button>
      </div>
    </div>
  );
};

export default Map;
