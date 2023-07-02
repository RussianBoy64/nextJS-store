export enum currencyTypes {
  USD = "USD",
  RUB = "RUB",
  EUR = "EUR",
}

interface Currency {
  value: currencyTypes;
  label: currencyTypes;
  sign: string;
  getPrice: (price: number) => number;
}

const currency: Currency[] = [
  {
    value: currencyTypes.USD,
    label: currencyTypes.USD,
    sign: "$",
    getPrice: (price) => price,
  },
  {
    value: currencyTypes.RUB,
    label: currencyTypes.RUB,
    sign: "₽",
    getPrice: (price) => price * 84.64,
  },
  {
    value: currencyTypes.EUR,
    label: currencyTypes.EUR,
    sign: "€",
    getPrice: (price) => price * 0.91,
  },
];

export default currency;
