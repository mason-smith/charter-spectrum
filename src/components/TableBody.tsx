import React, { FC } from 'react';

// Local Dependencies
import styles from 'styles/components/TableBody.module.css';
import { Restaurant } from 'features/Restaurants/types';
import { TableBodyProps } from './types';

const TableBody: FC<TableBodyProps> = (props) => {
  const { data, page } = props;
  return (
    <tbody className={styles.tableBody}>
      {data.length > 0 ? (
        data.slice(page * 10, page * 10 + 10).map((restaurant: Restaurant) => {
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
  );
};

export default TableBody;
