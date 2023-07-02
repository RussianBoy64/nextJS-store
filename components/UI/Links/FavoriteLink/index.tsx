"use client";

import Link from "next/link";
import routes, { routesNames } from "routes";
import { Badge } from "antd";
import { HeartOutlined } from "@ant-design/icons";

import styles from "./favoriteLink.module.scss";

interface FavoriteLinkProps {
  showName?: boolean;
}

const FavoriteLink = ({ showName = false }: FavoriteLinkProps) => {
  return (
    <>
      {showName ? (
        <Link href={routes[routesNames.favorite].path} className={styles.favoriteLink}>
          <HeartOutlined className={styles.favoriteLink__icon} />
          {routes[routesNames.favorite].name}
          <Badge count={1} showZero={false} />
        </Link>
      ) : (
        <Badge count={1} showZero={false}>
          <Link href={routes[routesNames.favorite].path} className={styles.favoriteLink}>
            <HeartOutlined className={styles.favoriteLink__icon} />
          </Link>
        </Badge>
      )}
    </>
  );
};

export default FavoriteLink;
