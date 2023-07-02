"use client";

import Link from "next/link";
import { Space } from "antd";
import routes, { routesNames } from "routes";

import styles from "./categoriesPanel.module.scss";

const CategoriesPanel = () => {
  const categoryRoutes = [
    routes[routesNames.woman],
    routes[routesNames.man],
    routes[routesNames.jewelry],
  ];

  return (
    <Space size="large" align="center" className={styles.categoriesPanel}>
      {categoryRoutes.map((route) => (
        <Link href={route.path} key={route.id}>
          {route.name}
        </Link>
      ))}
    </Space>
  );
};

export default CategoriesPanel;
