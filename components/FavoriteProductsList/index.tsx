"use client";

import { useUserStore } from "@/store/userStore";
import { fetchAllProducts } from "api/productsData";

import { Empty } from "antd";
import ProductCard from "../productCard";

import styles from "./favoriteProductsList.module.scss";

const FavoriteProductsList = () => {
  const favoriteProductsIds = useUserStore((state) => state.favoriteProduct);
  const { data } = fetchAllProducts();
  const favoriteProducts = data?.filter((product) =>
    favoriteProductsIds.includes(product.id)
  );

  return (
    <div className={styles.favoriteProducts}>
      {favoriteProducts?.length ? (
        favoriteProducts?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))
      ) : (
        <>
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          <span className={styles.notFound}>No Favorite products yeat!</span>
        </>
      )}
    </div>
  );
};

export default FavoriteProductsList;
