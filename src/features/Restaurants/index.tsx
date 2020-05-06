import React, { ChangeEvent, useState, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import cuid from 'cuid';

// Local Dependencies
import { RootState } from 'redux/store';
import classes from './Restaurants.module.css';
import TableHead from 'components/TableHead';
import { HeaderData } from 'components/types';
import { Restaurant } from './types';
import Input from 'components/Input';

const headerData: HeaderData[] = [
  { header: 'Name', value: 'name', filter: false, id: cuid() },
  { header: 'City', value: 'city', filter: false, id: cuid() },
  { header: 'State', value: 'state', filter: true, id: cuid() },
  { header: 'Phone Number', value: 'telephone', filter: false, id: cuid() },
  { header: 'Genre', value: 'genre', filter: true, id: cuid() },
];

const RestaurantTable = () => {
  const { restaurantData } = useSelector(
    (state: RootState) => ({
      restaurantData: state.restaurants.restaurantData,
      isLoading: state.restaurants.isLoading,
    }),
    shallowEqual
  );
  const [data, setData] = useState<Restaurant[]>([]);
  const [filteredData, setFilteredData] = useState<Restaurant[]>([]);

  useEffect(() => {
    setData(restaurantData);
  }, [restaurantData]);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData(
      restaurantData.filter((item: Restaurant) => {
        // @ts-ignore
        return item[e.target.name]
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      })
    );
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const options = e.target.name.replace('or ', '').split(', ');
    const filteredArray = restaurantData.filter((restaurant) => {
      return (
        // @ts-ignore
        restaurant[options[0]]
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        // @ts-ignore
        restaurant[options[1]]
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        // @ts-ignore
        restaurant[options[2]]
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      );
    });
    setFilteredData(filteredArray);
  };

  return (
    <>
      <div className={classes.primaryInput}>
        <Input
          value="name, city, or genre"
          handleChange={(e) => handleSearchChange(e)}
        />
        <button
          onClick={() => setData(filteredData)}
          className={classes.searchButton}
        >
          SEARCH
        </button>
      </div>
      <table className={`${classes.restaurantTable} ${classes.card}`}>
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
    </>
  );
};

export default RestaurantTable;
