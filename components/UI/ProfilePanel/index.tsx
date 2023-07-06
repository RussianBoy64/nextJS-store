"use client";

import { Button, Space, Badge } from "antd";
import { buttonTypes } from "settings/themeSettings";
import { FavoriteLink, ProfileLink, CartLink } from "@/components/UI/Links";

import styles from "./profilePanel.module.scss";

const ProfilePanel = () => {
  return (
    <Space size="middle" direction="horizontal" className={styles.profilePanel}>
      <FavoriteLink />
      <ProfileLink />
      <CartLink />

      {/* <Badge count={100} showZero={false}>
        <Button
          type={buttonTypes.default}
          icon={<ShoppingCartOutlined className={styles.profilePanel__icon} />}
          className={styles.profilePanel__btn}
        />
      </Badge> */}
    </Space>
  );
};

export default ProfilePanel;
