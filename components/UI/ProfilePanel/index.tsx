"use client";

import { Space } from "antd";
import { FavoriteLink, CartLink } from "@/components/UI/Links";

import styles from "./profilePanel.module.scss";

const ProfilePanel = () => {
  return (
    <Space size="middle" direction="horizontal" className={styles.profilePanel}>
      <FavoriteLink />
      <CartLink />
    </Space>
  );
};

export default ProfilePanel;
