"use client";

import Link from "next/link";
import routes, { routesNames } from "routes";
import useStore from "@/hooks/useStore";
import { useUserStore } from "@/store/userStore";

import { Badge } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { ProfileLinkProps } from "@/components/UI/Links/";

import styles from "@/components/UI/Links/link.module.scss";

const FavoriteLink = ({ showName = false, clickHandler }: ProfileLinkProps) => {
  const favoriteProductsLength = useStore(
    useUserStore,
    (state) => state.favoriteProduct.length
  );

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
          <Badge count={favoriteProductsLength} showZero={false} />
        </Link>
      ) : (
        <Badge count={favoriteProductsLength} showZero={false}>
          <Link href={routes[routesNames.favorite].path} className={styles.link}>
            <HeartOutlined />
          </Link>
        </Badge>
      )}
    </>
  );
};

export default FavoriteLink;
