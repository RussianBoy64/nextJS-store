"use client";

import routes, { routesNames } from "routes";
import useMounted from "@/hooks/useMounted";
import { usePathname } from "next/navigation";

import Link from "next/link";
import { Space } from "antd";

import styles from "./categoriesPanel.module.scss";
import linkStyles from "@/components/UI/Links/link.module.scss";

const CategoriesPanel = () => {
  const mounted = useMounted();
  const pathname = usePathname();
  const categoryRoutes = [
    routes[routesNames.woman],
    routes[routesNames.man],
    routes[routesNames.jewelery],
  ];

  if (!mounted) return null;

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
