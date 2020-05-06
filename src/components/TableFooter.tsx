import React, { FC } from 'react';

// Local Dependencies
import styles from 'styles/components/TableFooter.module.css';
import { TableFooterProps } from './types';
import Button from './Button';

const TableFooter: FC<TableFooterProps> = (props) => {
  const { onChangePage, count } = props;
  return (
    <tfoot className={styles.tableFooter}>
      <tr>
        <td>{count}</td>
        <td>
          <Button onClick={() => onChangePage(-1)}>{`<`}</Button>
        </td>
        <td>
          <Button onClick={() => onChangePage(1)}>{`>`}</Button>
        </td>
      </tr>
    </tfoot>
  );
};

export default TableFooter;
