"use client";

import Link from "next/link";
import routes, { routesNames } from "routes";

import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { ProfileLinkProps } from "@/components/UI/Links/";

import styles from "@/components/UI/Links/link.module.scss";

const CartLink = ({ showName = false, clickHandler }: ProfileLinkProps) => {
  return (
    <>
      {showName ? (
        <Link
          href={routes[routesNames.cart].path}
          className={styles.link}
          onClick={clickHandler}
        >
          <ShoppingCartOutlined />
          {routes[routesNames.cart].name}
          <Badge count={100} showZero={false} />
        </Link>
      ) : (
        <Badge count={100} showZero={false}>
          <Link href={routes[routesNames.cart].path} className={styles.link}>
            <ShoppingCartOutlined />
          </Link>
        </Badge>
      )}
    </>
  );
};

export default CartLink;
