import { useQuery } from "@tanstack/react-query";
import { getProducts, queryKey } from "api/getProducts";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export enum productsCategories {
  men = "men's clothing",
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

interface ProductsState {
  products: Product[];
  setProducts: () => void;
}

export const useProductsStore = create<ProductsState>()(
  devtools((set) => ({
    products: [],
    setProducts: () => {
      const { data } = useQuery<Product[]>({
        queryKey: [queryKey.products],
        queryFn: getProducts,
      });
      console.log(data);
      const productsData = data?.filter(
        (product) => product.category !== productsCategories.electronics
      );

      set({ products: productsData });
    },
  }))
);
