import { ChangeEvent } from 'react';

/**
 * Header
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
 * Input
 */
export interface InputProps {
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
