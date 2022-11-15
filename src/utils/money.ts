import { divide, multiply, toFixed } from './math';

export const convertToSmallestUnit = (amount: number | string) =>
  multiply(amount, 100);

export const convertToAmountWithDecimals = (amount: number | string) =>
  toFixed(amount, 2);

export const convertToLargestUnit = (amount: number | string) =>
  divide(amount, 100);
