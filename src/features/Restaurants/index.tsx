import React, { ChangeEvent, useState, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

// Local Dependencies
import { RootState } from 'redux/store';
import classes from './Restaurants.module.css';
import TableHead from 'components/TableHead';
import { HeaderData } from 'components/types';

const headerData: HeaderData[] = [
  { header: 'Name', value: 'name', filter: false },
  { header: 'City', value: 'city', filter: false },
  { header: 'State', value: 'state', filter: true },
  { header: 'Phone Number', value: 'telephone', filter: false },
  { header: 'Genre', value: 'genre', filter: false },
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
    console.log('restaurantData :>> ', restaurantData);
    setData(restaurantData);
  }, [restaurantData]);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const data = restaurantData.filter((item) => {
      return item[e.target.name]
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    console.log(data);
    // setData(data);
  };

  return (
    <table className={classes.restaurantTable}>
      <TableHead data={headerData} handleChange={handleFilterChange} />
      {!isLoading ? (
        <tbody className={classes.tableBody}>
          {data.map((restaurant: any) => {
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
      ) : null}
    </table>
  );
};

export default RestaurantTable;
