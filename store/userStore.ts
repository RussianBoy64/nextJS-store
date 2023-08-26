import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  favoriteProduct: number[];
  addProductToFavorite: (favoriteProductId: number) => void;
  removeProductFromFavorite: (idToRemove: number) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      favoriteProduct: [],
      addProductToFavorite: (favoriteProductId) =>
        set((state) => ({
          favoriteProduct: [...state.favoriteProduct, favoriteProductId],
        })),
      removeProductFromFavorite: (idToRemove) =>
        set((state) => ({
          favoriteProduct: state.favoriteProduct.filter(
            (productId) => productId !== idToRemove
          ),
        })),
    }),
    { name: "user-storage" }
  )
);
