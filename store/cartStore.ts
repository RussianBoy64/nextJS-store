import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "api/productsData";

interface CartState {
  productId: number[];
  productsInCart: Product[];
  addProductToCart: (productToAdd: Product) => void;
  removeProductFromCart: (productToRemove: Product) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      productId: [],
      productsInCart: [],
      addProductToCart: (productToAdd) =>
        set((state) => ({
          productId: [...state.productId, productToAdd.id],
          productsInCart: [...state.productsInCart, productToAdd],
        })),
      removeProductFromCart: (productToRemove) =>
        set((state) => ({
          productId: state.productId.filter((id) => id !== productToRemove.id),
          productsInCart: state.productsInCart.filter(
            (product) => product.id !== productToRemove.id
          ),
        })),
    }),
    { name: "cart-storage" }
  )
);
