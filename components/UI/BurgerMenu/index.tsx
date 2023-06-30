"use client";

import { Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import styles from "./burgerMenu.module.scss";

const BurgerMenu = () => {
  return (
    <>
      <Button type="primary" icon={<MenuOutlined />} className={styles.burgerMenu__btn} />
    </>
  );
};

export default BurgerMenu;
