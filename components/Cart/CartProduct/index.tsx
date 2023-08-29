"use client";

import useStore from "@/hooks/useStore";
import { useSettingsStore } from "@/store/settingsStore";
import { ProductInCart } from "api/productsData";
import currency from "settings/currencySettings";

import { Image } from "antd";

import styles from "./cartProduct.module.scss";
import Amount from "@/components/UI/Amount";

interface CartProductProps {
  product: ProductInCart;
}

const CartProduct = ({ product }: CartProductProps) => {
  const currentCurrency = useStore(useSettingsStore, (state) => state.currensy);
  const productPrice = currentCurrency
    ? currency[currentCurrency].getPrice(product.price)
    : product.price;
  const productSign = currentCurrency ? currency[currentCurrency].sign : "$";

  if (!product) return null;

  return (
    <>
      <div className={styles.cartProduct}>
        <Image className={styles.cartProduct__image} src={product.image} />
        <div className={styles.cartProduct__info}>
          <span className={styles.cartProduct__category}>{product.category}</span>
          <span className={styles.cartProduct__title}>{product.title}</span>
        </div>
      </div>

      <Amount product={product} value={product.amount!} />
      <span className={styles.cartProduct__price}>{`${
        productPrice * product.amount!
      }${productSign}`}</span>
    </>
  );
};

export default CartProduct;
