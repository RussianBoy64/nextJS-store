import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product, ProductInCart } from "api/productsData";

interface CartState {
  productId: number[];
  productsInCart: ProductInCart[];
  addProductToCart: (productToAdd: Product) => void;
  removeProductFromCart: (productToRemove: Product) => void;
  increaseAmount: (productID: number) => void;
  decreaseAmount: (productID: number) => void;
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
      increaseAmount: (productId) =>
        set((state) => ({
          productsInCart: state.productsInCart.map((product) => {
            if (product.id === productId && product.amount) product.amount++;
            return product;
          }),
        })),
      decreaseAmount: (productId) =>
        set((state) => ({
          productsInCart: state.productsInCart.map((product) => {
            if (product.id === productId && product.amount) product.amount--;
            return product;
          }),
        })),
    }),
    { name: "cart-storage" }
  )
);
