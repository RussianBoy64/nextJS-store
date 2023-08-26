"use client";

import Link from "next/link";
import routes, { routesNames } from "routes";

import { Badge } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { ProfileLinkProps } from "@/components/UI/Links/";

import styles from "@/components/UI/Links/link.module.scss";
import { useUserStore } from "@/store/userStore";

const FavoriteLink = ({ showName = false, clickHandler }: ProfileLinkProps) => {
  const favoriteProducts = useUserStore((state) => state.favoriteProduct);

  return (
    <>
      {showName ? (
        <Link
          href={routes[routesNames.favorite].path}
          className={styles.link}
          onClick={clickHandler}
        >
          <HeartOutlined />
          {routes[routesNames.favorite].name}
          <Badge count={favoriteProducts.length} showZero={false} />
        </Link>
      ) : (
        <Badge count={favoriteProducts.length} showZero={false}>
          <Link href={routes[routesNames.favorite].path} className={styles.link}>
            <HeartOutlined />
          </Link>
        </Badge>
      )}
    </>
  );
};

export default FavoriteLink;
