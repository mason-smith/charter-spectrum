import React, { FC, memo } from 'react';
import cuid from 'cuid';

// Local Dependencies
import { HeaderProps, HeaderData } from './types';
import Input from './Input';

const TableHead: FC<HeaderProps> = (props) => {
  const { data, handleChange } = props;
  return (
    <thead>
      <tr>
        {data.map((row: HeaderData) => {
          return (
            <th key={cuid()}>
              {row.header}
              {row.filter ? (
                <Input
                  handleChange={(e) => handleChange(e)}
                  value={row.value}
                />
              ) : null}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default memo(TableHead);
