import { Product } from "api/productsData";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  favoriteProduct: Pick<Product, "id">[];
  addProductToFavorite: (favoriteProductId: Pick<Product, "id">) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      favoriteProduct: [],
      addProductToFavorite: (favoriteProductId) =>
        set((state) => ({
          favoriteProduct: [...state.favoriteProduct, favoriteProductId],
        })),
    }),
    { name: "user-storage" }
  )
);
