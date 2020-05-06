import React, { ChangeEvent, useState, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import cuid from 'cuid';

// Local Dependencies
import { RootState } from 'redux/store';
import classes from './Restaurants.module.css';
import TableHead from 'components/TableHead';
import { HeaderData } from 'components/types';

const headerData: HeaderData[] = [
  { header: 'Name', value: 'name', filter: false, id: cuid() },
  { header: 'City', value: 'city', filter: false, id: cuid() },
  { header: 'State', value: 'state', filter: true, id: cuid() },
  { header: 'Phone Number', value: 'telephone', filter: false, id: cuid() },
  { header: 'Genre', value: 'genre', filter: true, id: cuid() },
];

const RestaurantTable = () => {
  const { restaurantData, isLoading } = useSelector(
    (state: RootState) => ({
      restaurantData: state.restaurants.restaurantData,
      isLoading: state.restaurants.isLoading,
    }),
    shallowEqual
  );
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    setData(restaurantData);
  }, [restaurantData]);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData(
      restaurantData.filter((item) => {
        return item[e.target.name]
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      })
    );
  };

  return (
    <table className={classes.restaurantTable}>
      <TableHead data={headerData} handleChange={handleFilterChange} />
      <tbody className={classes.tableBody}>
        {data.length > 0 ? (
          data.map((restaurant: any) => {
            return (
              <tr key={restaurant.id}>
                <td>{restaurant.name}</td>
                <td>{restaurant.city}</td>
                <td>{restaurant.state}</td>
                <td>{restaurant.telephone}</td>
                <td>{restaurant.genre.replace(/,(?=[^\s])/g, ', ')}</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td>No restaurants match these parameters</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default RestaurantTable;
