import { Product } from "api/productsData";
import routes, { routesNames } from "routes";
import { useSettingsStore } from "@/store/settingsStore";
import currency from "settings/currencySettings";

import { useStore } from "zustand";
import Link from "next/link";
import Image from "next/image";

import styles from "./findProduct.module.scss";

interface findProductProps {
  product: Product;
}

const FindProduct = ({ product }: findProductProps) => {
  const currentCurrency = useStore(useSettingsStore, (state) => state.currensy);
  const productRoute = `${routes[routesNames.product].path}/${product.id}`;

  const productPrice = currentCurrency
    ? currency[currentCurrency].getPrice(product.price)
    : product.price;
  const productSign = currentCurrency ? currency[currentCurrency].sign : "$";

  return (
    <Link href={productRoute} className={styles.findProduct}>
      <Image
        className={styles.findProduct__image}
        width={50}
        height={50}
        src={product.image}
        alt="product image"
      />
      <span className={styles.findProduct__title}>{product.title}</span>
      <span className={styles.findProduct__category}>{product.category}</span>
      <span className={styles.findProduct__price}>{`${productPrice.toFixed(
        2
      )}${productSign}`}</span>
    </Link>
  );
};

export default FindProduct;
