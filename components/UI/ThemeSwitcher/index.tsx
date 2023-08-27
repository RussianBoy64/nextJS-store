"use client";

import { useState, useEffect } from "react";
import { themeTypes } from "settings/themeSettings";
import { useSettingsStore } from "@/store/settingsStore";
import { useTheme } from "next-themes";

import { Switch } from "antd";
import Image from "next/image";
import sunSrc from "public/sun.svg";
import moonSrc from "public/moon.svg";

import styles from "./themeSwitcher.module.scss";
import useStore from "@/hooks/useStore";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);

  const { setTheme } = useTheme();

  const themeStyle = useStore(useSettingsStore, (state) => state.themeStyle);
  const setThemeStyle = useSettingsStore((state) => state.setThemeStyle);

  const themeChangeHandler = (checked: boolean) => {
    if (checked) {
      setTheme(themeTypes.light);
      setThemeStyle(themeTypes.light);
    } else {
      setTheme(themeTypes.dark);
      setThemeStyle(themeTypes.dark);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Switch
      checkedChildren={<Image src={sunSrc} alt="sun" className={styles.themeIcon} />}
      unCheckedChildren={<Image src={moonSrc} alt="moon" className={styles.themeIcon} />}
      defaultChecked
      onChange={themeChangeHandler}
      checked={themeStyle === themeTypes.light}
    />
  );
};

export default ThemeSwitcher;
