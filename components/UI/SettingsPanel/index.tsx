"use client";

import { useState, useEffect } from "react";
import { Switch, Space, Select } from "antd";
import { themeTypes } from "static/themeSettings";
import { useSettingsStore } from "@/store/settingsStore";
import { useTheme } from "next-themes";
import currency from "static/currencySettings";
import Image from "next/image";
import sunSrc from "public/sun.svg";
import moonSrc from "public/moon.svg";

import styles from "./settingsPanel.module.scss";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);

  const { setTheme } = useTheme();

  const { themeStyle, setThemeStyle } = useSettingsStore((state) => ({
    themeStyle: state.themeStyle,
    setThemeStyle: state.setThemeStyle,
  }));

  const themeChangeHandler = (checked: boolean) => {
    if (checked) {
      setTheme(themeTypes.light);
      setThemeStyle(themeTypes.light);
    } else {
      setTheme(themeTypes.dark);
      setThemeStyle(themeTypes.dark);
    }
  };

  const currencyChangeHandler = (value: string) => {
    console.log(`selected ${value}`);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Space direction="horizontal" size="large" className={styles.settingsPanel}>
      <Switch
        checkedChildren={<Image src={sunSrc} alt="sun" className={styles.themeIcon} />}
        unCheckedChildren={
          <Image src={moonSrc} alt="moon" className={styles.themeIcon} />
        }
        defaultChecked
        onChange={themeChangeHandler}
        checked={themeStyle === themeTypes.light}
      />

      <Select
        defaultValue={currency[0].value}
        size="small"
        onChange={currencyChangeHandler}
        options={currency}
      />
    </Space>
  );
};

export default ThemeSwitcher;
