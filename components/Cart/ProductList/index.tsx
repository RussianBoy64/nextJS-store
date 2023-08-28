"use client";

import { useStore } from "zustand";
import { useCartStore } from "@/store/cartStore";

import CartProduct from "../CartProduct";
import { Empty } from "antd";

import styles from "./productList.module.scss";
import useMounted from "@/hooks/useMounted";

const ProductList = () => {
  const mounted = useMounted();
  const productsInCart = useStore(useCartStore, (state) => state.productsInCart);

  if (!mounted) return null;

  return (
    <div className={styles.productList}>
      <span className={styles.productList__listHeader}>Product</span>
      <span className={styles.productList__listHeader}>Amount</span>
      <span className={styles.productList__listHeader}>Price</span>
      {productsInCart.length ? (
        productsInCart.map((product) => (
          <CartProduct product={product} key={product.id} />
        ))
      ) : (
        <div className={styles.empty}>
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          <span>No products in Cart yeat!</span>
        </div>
      )}
    </div>
  );
};

export default ProductList;
