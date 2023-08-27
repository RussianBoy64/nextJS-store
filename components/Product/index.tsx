"use client";

import { fetchProductsById } from "api/productsData";
import useStore from "@/hooks/useStore";
import { useSettingsStore } from "@/store/settingsStore";
import { useUserStore } from "@/store/userStore";
import currency from "settings/currencySettings";
import { buttonTypes } from "settings/themeSettings";
import type { CollapseProps } from "antd";

import { Button } from "antd";
import Image from "next/image";
import { HeartOutlined, HeartFilled, ShoppingCartOutlined } from "@ant-design/icons";
import { Collapse } from "antd";

import deliverySrc from "public/delivery.svg";
import shippingSvg from "@/public/shipping.svg";

import styles from "./product.module.scss";

interface productProps {
  id: number;
}

const Product = ({ id }: productProps) => {
  const favoriteProductList = useStore(useUserStore, (state) => state.favoriteProduct);
  const [addProductToFavorite, removeProductFromFavorite] = useUserStore((state) => [
    state.addProductToFavorite,
    state.removeProductFromFavorite,
  ]);

  const currentCurrency = useStore(useSettingsStore, (state) => state.currensy);
  const { data } = fetchProductsById(id);

  if (!data) return null;

  const isProductInFavorites = favoriteProductList?.includes(data.id);
  const productPrice = currentCurrency
    ? currency[currentCurrency].getPrice(data.price)
    : data.price;
  const productSign = currentCurrency ? currency[currentCurrency].sign : "$";

  const favoriteClickHander = (event: React.MouseEvent) => {
    event.preventDefault();

    if (isProductInFavorites) {
      removeProductFromFavorite(data.id);
    } else {
      addProductToFavorite(data.id);
    }
  };

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Descriprion",
      children: <p>{data.description}</p>,
    },
  ];

  return (
    <section className={styles.product}>
      <Image
        className={styles.product__image}
        src={data.image}
        alt="product image"
        width={300}
        height={400}
      />
      <div className={styles.product__description}>
        <span className={styles.product__category}>{data.category}</span>
        <span className={styles.product__title}>{data.title}</span>
        <Button
          className={styles.product__favorite}
          type={buttonTypes.default}
          icon={isProductInFavorites ? <HeartFilled /> : <HeartOutlined />}
          onClick={favoriteClickHander}
        />
        <span className={styles.product__price}>{`${productPrice}${productSign}`}</span>
        <Button
          className={styles.product__cart}
          type={buttonTypes.primary}
          icon={<ShoppingCartOutlined />}
          onClick={(event) => {
            event.stopPropagation();
            alert("add to cart");
          }}
        >
          Add
        </Button>

        <div className={styles.product__delivery}>
          <Image
            className={styles.themeIcon}
            src={deliverySrc}
            alt="delivery icon"
            width={50}
            height={50}
          />
          <span>Delivery up to 150 hours</span>
        </div>

        <div className={styles.product__shipping}>
          <Image
            className={styles.themeIcon}
            src={shippingSvg}
            alt="delivery icon"
            width={50}
            height={50}
          />
          <span>Free shipping and returns</span>
        </div>

        <Collapse
          className={styles.product__collapse}
          items={items}
          defaultActiveKey={["0"]}
        />
      </div>
    </section>
  );
};

export default Product;
