import { UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query";
import getQueryClient from "app/getQueryClient";
import Error from "next/error";

export enum queryKey {
  products = "products",
  man = "man",
  woman = "woman",
  jewelery = "jewelery",
}

export enum productsCategories {
  man = "men's clothing",
  woman = "women's clothing",
  jewelery = "jewelery",
  electronics = "electronics",
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: productsCategories;
  rating: {
    rate: number;
    count: number;
  };
}

export const getAllProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};

export const getWomanProducts = async () => {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${productsCategories.woman}`
  );
  return res.json();
};

export const getManProducts = async () => {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${productsCategories.man}`
  );
  return res.json();
};

export const getJeweleryProducts = async () => {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${productsCategories.jewelery}`
  );
  return res.json();
};

export const prefetchProductsByCategory = async (category: productsCategories) => {
  const queryClient = getQueryClient();

  switch (category) {
    case productsCategories.woman:
      await queryClient.prefetchQuery([queryKey.woman], getWomanProducts);
      break;

    case productsCategories.man:
      await queryClient.prefetchQuery([queryKey.man], getManProducts);
      break;

    case productsCategories.jewelery:
      await queryClient.prefetchQuery([queryKey.jewelery], getJeweleryProducts);
      break;

    default:
      await queryClient.prefetchQuery([queryKey.products], getAllProducts);
      break;
  }

  return queryClient;
};

export const fetchProductsByCategory = (category: productsCategories) => {
  switch (category) {
    case productsCategories.woman:
      return useQuery<Product[]>({
        queryKey: [queryKey.woman],
        queryFn: getWomanProducts,
      });

    case productsCategories.man:
      return useQuery<Product[]>({
        queryKey: [queryKey.man],
        queryFn: getManProducts,
      });

    case productsCategories.jewelery:
      return useQuery<Product[]>({
        queryKey: [queryKey.jewelery],
        queryFn: getJeweleryProducts,
      });

    default:
      return useQuery<Product[]>({
        queryKey: [queryKey.products],
        queryFn: getAllProducts,
      });
  }
};
