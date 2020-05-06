import React, { FC } from 'react';

// Local Dependencies
import styles from 'styles/components/Button.module.css';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = (props) => {
  const { children, onClick } = props;
  return (
    <button onClick={onClick} className={styles.searchButton}>
      {children}
    </button>
  );
};

export default Button;
