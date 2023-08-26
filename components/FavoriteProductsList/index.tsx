"use client";

import { fetchAllProducts } from "api/productsData";

import ProductCard from "../productCard";

import styles from "./favoriteProductsList.module.scss";

const FavoriteProductsList = () => {
  const { data } = fetchAllProducts();
  console.log(data);

  return (
    <div className={styles.favoriteProducts}>
      {data?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default FavoriteProductsList;
