import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

// Local Dependencies
import { RootState } from 'redux/store';
import classes from './Restaurants.module.css';
import TableHead from 'components/TableHead';

const RestaurantTable = () => {
  const { restaurantData, isLoading } = useSelector(
    (state: RootState) => ({
      restaurantData: state.restaurants.restaurantData,
      isLoading: state.restaurants.isLoading,
    }),
    shallowEqual
  );

  return (
    <table className={classes.restaurantTable}>
      <TableHead />
      {!isLoading ? (
        <tbody className={classes.tableBody}>
          {restaurantData.map((restaurant) => {
            return (
              <tr key={restaurant.id}>
                <td>{restaurant.name}</td>
                <td>{restaurant.city}</td>
                <td>{restaurant.state}</td>
                <td>{restaurant.telephone}</td>
                <td>{restaurant.genre.replace(/,(?=[^\s])/g, ', ')}</td>
              </tr>
            );
          })}
        </tbody>
      ) : (
        <p>Loading Restaurant Data</p>
      )}
    </table>
  );
};

export default RestaurantTable;
