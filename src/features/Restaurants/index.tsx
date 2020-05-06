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
import Button from 'components/Button';
import TableBody from 'components/TableBody';
import TableFooter from 'components/TableFooter';

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
  const [page, setPage] = useState(0);

  useEffect(() => {
    setData(restaurantData);
    setFilteredData(restaurantData);
  }, [restaurantData]);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData(
      filteredData.filter((item: Restaurant) => {
        // @ts-ignore
        return item[e.target.name]
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      })
    );
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const options = e.target.name.replace('or ', '').split(', ');
    const filteredArray = options
      .flatMap((option) => {
        return restaurantData.filter((restaurant) => {
          // @ts-ignore
          return restaurant[option]
            .toLowerCase()
            .includes(e.target.value.toLowerCase());
        });
      })
      .filter(
        (restaurant, index, self) =>
          index === self.findIndex((r) => r.id === restaurant.id)
      );

    setFilteredData(filteredArray);
  };

  return (
    <>
      <div className={classes.primaryInput}>
        <form
          className={classes.form}
          onSubmit={(e) => {
            e.preventDefault();
            setData(filteredData);
          }}
        >
          <Input
            value="name, city, or genre"
            handleChange={(e) => handleSearchChange(e)}
          />
        </form>
        <Button onClick={() => setData(filteredData)}>SEARCH</Button>
      </div>
      <table className={`${classes.restaurantTable} ${classes.card}`}>
        <TableHead data={headerData} handleChange={handleFilterChange} />
        <TableBody data={data} page={page} />
        <TableFooter
          count={data.length}
          page={page}
          onChangePage={(val) => setPage(val)}
        />
      </table>
    </>
  );
};

export default RestaurantTable;
