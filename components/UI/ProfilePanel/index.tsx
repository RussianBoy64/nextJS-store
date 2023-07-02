"use client";

import { Button, Space, Badge } from "antd";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { buttonTypes } from "settings/themeSettings";

import styles from "./profilePanel.module.scss";
import FavoriteLink from "../Links/FavoriteLink";

const ProfilePanel = () => {
  return (
    <Space size="middle" direction="horizontal" className={styles.profilePanel}>
      <FavoriteLink />

      <Button
        type={buttonTypes.default}
        icon={<UserOutlined className={styles.profilePanel__icon} />}
        className={styles.profilePanel__btn}
      />

      <Badge count={100} showZero={false}>
        <Button
          type={buttonTypes.default}
          icon={<ShoppingCartOutlined className={styles.profilePanel__icon} />}
          className={styles.profilePanel__btn}
        />
      </Badge>
    </Space>
  );
};

export default ProfilePanel;
