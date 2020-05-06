import React, { FC } from 'react';

// Local Dependencies
import styles from 'styles/components/TableFooter.module.css';
import { TableFooterProps } from './types';
import Button from './Button';

const TableFooter: FC<TableFooterProps> = (props) => {
  const { onChangePage, count, page } = props;
  return (
    <tfoot className={styles.tableFooter}>
      <tr>
        <td>
          page {page + 1} of {Math.ceil(count / 10) - 1}
        </td>
        <td>
          <Button
            disabled={page === 0}
            onClick={() => onChangePage(page - 1)}
          >{`<`}</Button>
        </td>
        <td>
          <Button
            disabled={page >= Math.ceil(count / 10) - 1}
            onClick={() => onChangePage(page + 1)}
          >{`>`}</Button>
        </td>
      </tr>
    </tfoot>
  );
};

export default TableFooter;
