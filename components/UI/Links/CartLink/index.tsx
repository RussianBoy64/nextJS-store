"use client";

import Link from "next/link";
import routes, { routesNames } from "routes";
import useStore from "@/hooks/useStore";
import { useCartStore } from "@/store/cartStore";

import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { ProfileLinkProps } from "@/components/UI/Links/";

import styles from "@/components/UI/Links/link.module.scss";

const CartLink = ({ showName = false, clickHandler }: ProfileLinkProps) => {
  const productsInCartLength = useStore(
    useCartStore,
    (state) => state.productsInCart.length
  );

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
          <Badge count={productsInCartLength} showZero={false} />
        </Link>
      ) : (
        <Badge count={productsInCartLength} showZero={false}>
          <Link href={routes[routesNames.cart].path} className={styles.link}>
            <ShoppingCartOutlined />
          </Link>
        </Badge>
      )}
    </>
  );
};

export default CartLink;
