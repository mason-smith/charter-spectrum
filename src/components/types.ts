import { ChangeEvent, ReactNode } from 'react';
import { Restaurant } from 'features/Restaurants/types';

/**
 * Table Header
 */
export type HeaderData = {
  filter: boolean;
  header: string;
  value: string;
  id: string;
};
export interface HeaderProps {
  data: HeaderData[];
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Table Body
 */
export interface TableBodyProps {
  data: Restaurant[];
  page: number;
}

/**
 * Table Footer
 */

export interface TableFooterProps {
  count: number;
  onChangePage: (val: number) => void;
}

/**
 * Input
 */
export interface InputProps {
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Button
 */
export interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}
