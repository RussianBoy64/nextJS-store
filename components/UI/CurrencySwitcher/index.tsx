import { Select } from "antd";
import currency from "settings/currencySettings";

const CurrencySwitcher = () => {
  const currencyChangeHandler = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <Select
      defaultValue={currency[0].value}
      size="small"
      onChange={currencyChangeHandler}
      options={currency}
    />
  );
};

export default CurrencySwitcher;
