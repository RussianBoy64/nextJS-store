"use client";

import Link from "next/link";
import { Space } from "antd";
import routes from "routes";

import styles from "./categoriesPanel.module.scss";

const CategoriesPanel = () => {
  return (
    <>
      <Space size="large" align="center" className={styles.categoriesPanel}>
        {routes.map((route) => (
          <Link href={route.path} key={route.id}>
            {route.name}
          </Link>
        ))}
      </Space>
    </>
  );
};

export default CategoriesPanel;
