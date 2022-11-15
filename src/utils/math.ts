import { Decimal } from 'decimal.js';

export type DecimalType = number | string;

export const sum = (...terms: DecimalType[]) => {
  return terms
    .reduce((acc, cur) => {
      return acc.plus(new Decimal(cur));
    }, new Decimal('0'))
    .toString();
};

export const difference = (a: DecimalType, b: DecimalType) => {
  return new Decimal(a).minus(new Decimal(b)).toString();
};

export const isGreaterThan = (a: DecimalType, b: DecimalType) => {
  return new Decimal(a).greaterThan(new Decimal(b));
};

export const isGreaterThanOrEqual = (a: DecimalType, b: DecimalType) => {
  return new Decimal(a).greaterThanOrEqualTo(new Decimal(b));
};

export const isLessThan = (a: DecimalType, b: DecimalType) => {
  return new Decimal(a).lessThan(new Decimal(b));
};

export const isLessOrEqualThan = (a: DecimalType, b: DecimalType) => {
  return !new Decimal(a).greaterThan(new Decimal(b));
};

export const min = <T extends DecimalType>(...nums: T[]) => {
  return Decimal.min(...nums.map((it) => new Decimal(it))).toString();
};

export const max = <T extends DecimalType>(...nums: T[]) => {
  return Decimal.max(...nums.map((it) => new Decimal(it))).toString();
};

export const isEqual = (a: DecimalType, b: DecimalType) => {
  return new Decimal(a).equals(new Decimal(b));
};

export const isNumber = (a: DecimalType) => !new Decimal(a).isNaN();

export const multiply = (a: DecimalType, b: DecimalType) =>
  new Decimal(a).times(new Decimal(b)).toString();

export const ceil = (n: DecimalType) => new Decimal(n).ceil().toString();

export const floor = (n: DecimalType) => new Decimal(n).floor().toString();

export const divide = (a: DecimalType, b: DecimalType) =>
  new Decimal(a).dividedBy(new Decimal(b)).toString();

export const abs = (n: DecimalType) => new Decimal(n).abs().toString();

export const neg = (n: DecimalType) => new Decimal(n).neg().toString();

export const eq = (n: DecimalType, b: DecimalType) =>
  new Decimal(n).eq(new Decimal(b));

export const gt = (n: DecimalType, b: DecimalType) =>
  new Decimal(n).gt(new Decimal(b));

export const toFixed = (a: DecimalType, points: number) =>
  new Decimal(a).toFixed(points);

export const maxAbsoluteDifference = (num1: DecimalType, num2: DecimalType) => {
  return gt(abs(num1), abs(num2)) ? num1 : num2;
};

export const stringToNumber = (num: string) => {
  return new Decimal(num).toNumber();
};
