"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Space } from "antd";
import routes, { routesNames } from "routes";

import styles from "./categoriesPanel.module.scss";
import linkStyles from "@/components/UI/Links/link.module.scss";

const CategoriesPanel = () => {
  const pathname = usePathname();
  const categoryRoutes = [
    routes[routesNames.woman],
    routes[routesNames.man],
    routes[routesNames.jewelry],
  ];

  return (
    <Space size="large" align="center" className={styles.categoriesPanel}>
      {categoryRoutes.map((route) => {
        const isActive = pathname === route.path;

        return (
          <Link
            href={route.path}
            key={route.id}
            className={isActive ? linkStyles.activeLink : ""}
          >
            {route.name}
          </Link>
        );
      })}
    </Space>
  );
};

export default CategoriesPanel;
