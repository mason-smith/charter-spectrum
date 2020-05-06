import React, { FC, memo } from 'react';

// Local Dependencies
import styles from 'styles/components/Input.module.css';
import { InputProps } from './types';

const Input: FC<InputProps> = (props) => {
  const { handleChange, value } = props;
  return (
    <input
      name={value}
      onChange={(e) => handleChange(e)}
      className={styles.minimalInput}
      type="text"
      placeholder={`Filter by ${value}`}
    />
  );
};

export default memo(Input);
