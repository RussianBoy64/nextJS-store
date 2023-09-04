"use client";

import { Product, fetchAllProducts, productsCategories } from "api/productsData";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import routes, { routesNames } from "routes";

import { Checkbox, Empty, Slider } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";

import styles from "./catalogPage.module.scss";
import { useStore } from "zustand";
import { useSettingsStore } from "@/store/settingsStore";
import currency from "settings/currencySettings";
import ProductCard from "@/components/productCard";

export const metadata = {
  title: "NextShop | Catalog",
  description: "Online shop application created with NextJS",
};

const categoriesForParams = [
  productsCategories.man,
  productsCategories.woman,
  productsCategories.jewelery,
];

const ProductPage = () => {
  const initialCategories = [
    productsCategories.man,
    productsCategories.woman,
    productsCategories.jewelery,
  ];

  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const categoriesParams = searchParams.get("categories")
    ? searchParams.get("categories")!.split(",")
    : initialCategories;
  const priceParams = searchParams.get("price")
    ? searchParams.get("price")!.split(",")
    : [];
  const [categories, setCategories] = useState<string[]>(categoriesParams);
  const [price, setPrice] = useState<string[]>(priceParams);
  const currentCurrency = useStore(useSettingsStore, (state) => state.currensy);

  const { data } = fetchAllProducts();

  if (!data) return null;

  const productList = data.filter(
    (product) => product.category !== productsCategories.electronics
  );
  const productPrices = productList.map((product) => product.price);
  const minPrice = Math.min(...productPrices);
  const maxPrice = Math.max(...productPrices);

  if (!price.length) setPrice([minPrice.toFixed(2), maxPrice.toFixed(2)]);

  const minPriceInCurrency = currentCurrency
    ? currency[currentCurrency].getPrice(minPrice)
    : minPrice;
  const maxPriceInCurrency = currentCurrency
    ? currency[currentCurrency].getPrice(maxPrice)
    : maxPrice;

  const currencySign = currentCurrency ? currency[currentCurrency].sign : "$";

  const onCheckboxChangeHandler = (checkedValues: CheckboxValueType[]) => {
    const searchQuery = search ? `search=${search}&` : "";
    const priceQUery = price.length ? `price=${price.join(",")}` : "";
    const catalogRoute =
      routes[routesNames.catalog].path +
      `?${searchQuery}categories=${checkedValues.join(",")}&${priceQUery}`;
    setCategories(checkedValues as string[]);
    router.push(catalogRoute);
  };

  const onSliderChange = (value: [number, number]) => {
    setPrice([value[0].toFixed(2), value[1].toFixed(2)]);
  };

  const onAfterSliderChange = (value: [number, number]) => {
    const searchQuery = search ? `search=${search}&` : "";
    const categoryQuery = categories.length ? `categories=${categories.join(",")}&` : "";
    const catalogRoute =
      routes[routesNames.catalog].path +
      `?${searchQuery}${categoryQuery}price=${value.join(",")}`;

    router.push(catalogRoute);
  };

  let productsToShow: Product[] = [];
  if (search)
    productsToShow = productList.filter((product) =>
      product.title.toUpperCase().includes(search.toUpperCase())
    );
  if (categories.length) {
    productsToShow = productsToShow.filter((product) =>
      categories.includes(product.category)
    );
  } else {
    productsToShow = [];
  }

  if (price.length)
    productsToShow = productsToShow.filter((product) => {
      const productPrice = product.price;
      return Number(price[0]) <= productPrice && productPrice <= Number(price[1]);
    });

  return (
    <section className={styles.catalogPage}>
      <div className={styles.catalogPage__filters}>
        <Checkbox.Group
          options={categoriesForParams}
          value={categories}
          onChange={onCheckboxChangeHandler}
        />
        <div className={styles.catalogPage__slider}>
          <span>{`${minPriceInCurrency}${currencySign}`}</span>
          <Slider
            className={styles.catalogPage__sliderInput}
            range
            min={minPrice}
            max={maxPrice}
            defaultValue={[Number(price[0]), Number(price[1])]}
            onChange={onSliderChange}
            onAfterChange={onAfterSliderChange}
          />
          <span>{`${maxPriceInCurrency}${currencySign}`}</span>
        </div>
      </div>
      {productsToShow?.length ? (
        productsToShow?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))
      ) : (
        <span className={styles.notFound}>
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          <span>No Favorite products yeat!</span>
        </span>
      )}
    </section>
  );
};

export default ProductPage;
