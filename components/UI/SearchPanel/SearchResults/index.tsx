"use client";

import { Product, fetchAllProducts, productsCategories } from "api/productsData";
import routes, { routesNames } from "routes";

import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import FindProduct from "./FindProduct";
import { NavLink, NavLinkColors } from "../../Links";

import styles from "./searchResults.module.scss";

interface searchResultsProps {
  searchValue: string;
}

const SearchResults = ({ searchValue }: searchResultsProps) => {
  const { data, isLoading } = fetchAllProducts();
  const catalogRoute = routes[routesNames.catalog].path + `?search=${searchValue}`;
  let productsFind: Product[] = [];

  if (data) {
    const products = data.filter(
      (product) => product.category !== productsCategories.electronics
    );
    productsFind = products
      .filter((product) =>
        product.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      )
      .slice(0, 5);
  }

  return (
    <div className={styles.searchResults}>
      {isLoading && (
        <>
          <Spin indicator={<LoadingOutlined spin />} />
          <span className={styles.searchResults__spintip}>Loading...</span>
        </>
      )}

      {!isLoading && productsFind.length ? (
        <>
          {productsFind.map((product) => {
            return <FindProduct product={product} key={product.id} />;
          })}
          <NavLink href={catalogRoute} text={"View all"} color={NavLinkColors.purple} />
        </>
      ) : (
        <span className={styles.searchResults__notFound}>Products not found!</span>
      )}
    </div>
  );
};

export default SearchResults;
