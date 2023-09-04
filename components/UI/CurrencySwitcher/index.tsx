import useStore from "@/hooks/useStore";
import { useSettingsStore } from "@/store/settingsStore";
import { Select } from "antd";
import currency, { currencyTypes } from "settings/currencySettings";

const CurrencySwitcher = () => {
  let currentCurency = useStore(useSettingsStore, (state) => state.currensy);
  const setCurrency = useSettingsStore((state) => state.setCurrency);

  if (!currentCurency) currentCurency = currency[currencyTypes.USD].value;

  const currencyChangeHandler = (value: currencyTypes) => {
    setCurrency(value);
  };

  return (
    <Select
      defaultValue={currencyTypes.USD}
      value={currentCurency}
      size="small"
      onChange={currencyChangeHandler}
      options={Object.values(currency)}
    />
  );
};

export default CurrencySwitcher;
