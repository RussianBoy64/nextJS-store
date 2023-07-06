"use client";

import Link from "next/link";
import routes, { routesNames } from "routes";
import { Badge } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { linkProps } from "@/components/UI/Links/";

import styles from "@/components/UI/Links/link.module.scss";

const FavoriteLink = ({ showName = false }: linkProps) => {
  return (
    <>
      {showName ? (
        <Link href={routes[routesNames.favorite].path} className={styles.link}>
          <HeartOutlined />
          {routes[routesNames.favorite].name}
          <Badge count={1} showZero={false} />
        </Link>
      ) : (
        <Badge count={1} showZero={false}>
          <Link href={routes[routesNames.favorite].path} className={styles.link}>
            <HeartOutlined />
          </Link>
        </Badge>
      )}
    </>
  );
};

export default FavoriteLink;
