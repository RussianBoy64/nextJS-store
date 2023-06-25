"use client";

import { Space, Badge } from "antd";
import { HeartOutlined, UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import styles from "./profilePanel.module.scss";

const ProfilePanel = () => {
  return (
    <Space size="large" direction="horizontal" className={styles.profilePanel}>
      <Badge count={0} showZero={false} className={styles.profilePanel__badge}>
        <HeartOutlined className={styles.profilePanel__wishList} />
      </Badge>

      <UserOutlined className={styles.profilePanel__profile} />

      <Badge count={100} showZero={false}>
        <ShoppingCartOutlined className={styles.profilePanel__cart} />
      </Badge>
    </Space>
  );
};

export default ProfilePanel;
