export enum currencyTypes {
  USD = "USD",
  RUB = "RUB",
  EUR = "EUR",
}

export interface Currency {
  value: currencyTypes;
  label: currencyTypes;
  sign: string;
  getPrice: (price: number) => number;
}

export interface currencyData {
  [key: string]: Currency;
}

const currency: currencyData = {
  [currencyTypes.USD]: {
    value: currencyTypes.USD,
    label: currencyTypes.USD,
    sign: "$",
    getPrice: (price: number) => price,
  },
  [currencyTypes.RUB]: {
    value: currencyTypes.RUB,
    label: currencyTypes.RUB,
    sign: "₽",
    getPrice: (price: number) => Number((price * 84.64).toFixed(2)),
  },
  [currencyTypes.EUR]: {
    value: currencyTypes.EUR,
    label: currencyTypes.EUR,
    sign: "€",
    getPrice: (price: number) => Number((price * 0.91).toFixed(2)),
  },
};

export const currencyValues = [currencyTypes.USD, currencyTypes.RUB, currencyTypes.EUR];

export default currency;
