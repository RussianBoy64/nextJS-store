"use client";

import { useState } from "react";
import { Button, Drawer, Space, Badge } from "antd";
import {
  MenuOutlined,
  CloseOutlined,
  HeartOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { buttonTypes } from "settings/themeSettings";
import { FavoriteLink, ProfileLink, CartLink } from "@/components/UI/Links/";
import ThemeSwitcher from "../ThemeSwitcher";
import CurrencySwitcher from "../CurrencySwitcher";

import styles from "./burgerMenu.module.scss";
import routes from "routes";

const drawerHeaderStyle = {
  borderBottom: "none",
};

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        type={buttonTypes.default}
        icon={<MenuOutlined />}
        className={styles.burgerMenu__openBtn}
        onClick={showDrawer}
      />

      <Drawer
        width="320"
        placement="right"
        open={open}
        closable={false}
        onClose={onClose}
        headerStyle={drawerHeaderStyle}
        className={styles.burgerMenu__drawerBody}
      >
        <Button
          type={buttonTypes.default}
          icon={<CloseOutlined />}
          className={styles.burgerMenu__closeBtn}
          onClick={onClose}
        />

        <Space
          direction="vertical"
          size="middle"
          align="start"
          className={styles.burgerMenu__menu}
        >
          <FavoriteLink showName={true} />
          <ProfileLink showName={true} />
          <CartLink showName={true} />

          <Space
            direction="horizontal"
            size="middle"
            align="center"
            className={styles.burgerMenu__settings}
          >
            <ThemeSwitcher />
            <CurrencySwitcher />
          </Space>
        </Space>
      </Drawer>
    </>
  );
};

export default BurgerMenu;
