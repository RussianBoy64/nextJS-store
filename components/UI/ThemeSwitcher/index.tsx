"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch, Space } from "antd";
import Image from "next/image";
import sunSrc from "public/sun.svg";
import moonSrc from "public/moon.svg";

import styles from "./themeSwitcher.module.scss";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  const onChandeHandler = (checked: boolean) =>
    checked ? setTheme("light") : setTheme("dark");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Space direction="horizontal">
      <Switch
        checkedChildren={<Image src={sunSrc} alt="sun" className={styles.themeIcon} />}
        unCheckedChildren={
          <Image src={moonSrc} alt="moon" className={styles.themeIcon} />
        }
        defaultChecked
        onChange={onChandeHandler}
        className={styles.switcher}
      />
    </Space>
  );
};

export default ThemeSwitcher;
