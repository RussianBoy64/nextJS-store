import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  favoriteProduct: number[];
  email: string | null;
  addProductToFavorite: (favoriteProductId: number) => void;
  removeProductFromFavorite: (idToRemove: number) => void;
  addEmail: (emailToAdd: string) => void;
  removeEmail: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      favoriteProduct: [],
      email: null,
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
      addEmail: (emailToAdd) =>
        set(() => ({
          email: emailToAdd,
        })),
      removeEmail: () =>
        set(() => ({
          email: null,
        })),
    }),
    { name: "user-storage" }
  )
);
