"use client";

import { Space } from "antd";
import ThemeSwitcher from "@/components/UI/ThemeSwitcher";
import CurrencySwitcher from "@/components/UI/CurrencySwitcher";

import styles from "./settingsPanel.module.scss";

const SettingsPanel = () => {
  return (
    <Space direction="horizontal" size="large" className={styles.settingsPanel}>
      <ThemeSwitcher />
      <CurrencySwitcher />
    </Space>
  );
};

export default SettingsPanel;
