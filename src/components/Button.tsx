import React, { FC } from 'react';

// Local Dependencies
import styles from 'styles/components/Button.module.css';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = (props) => {
  const { children, onClick, disabled } = props;
  return (
    <button
      disabled={disabled || false}
      onClick={onClick}
      className={styles.button}
    >
      {children}
    </button>
  );
};

export default Button;
