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
          align="center"
          className={styles.burgerMenu__menu}
        >
          <Badge count={1} showZero={false}>
            <Button
              type={buttonTypes.link}
              icon={<HeartOutlined className={styles.profilePanel__icon} />}
              className={styles.profilePanel__btn}
            />
          </Badge>

          <Button
            type={buttonTypes.link}
            icon={<UserOutlined className={styles.profilePanel__icon} />}
            className={styles.profilePanel__btn}
          />

          <Button
            type={buttonTypes.link}
            icon={<ShoppingCartOutlined className={styles.profilePanel__icon} />}
            className={styles.burgerMenu__btn}
            href={routes[2].path}
          >
            Card <Badge count={100} showZero={false} />
          </Button>

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
