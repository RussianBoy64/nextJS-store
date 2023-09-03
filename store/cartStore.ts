import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product, ProductInCart } from "api/productsData";

export enum promoCodes {
  cheap = "CHeAP",
}

interface CartState {
  productId: number[];
  productsInCart: ProductInCart[];
  totalProducts: number;
  total: number;
  promoCode: string;
  isPromoCodeValid: boolean;
  addProductToCart: (productToAdd: Product) => void;
  removeProductFromCart: (productToRemove: Product) => void;
  increaseAmount: (productToIncreace: Product) => void;
  decreaseAmount: (productToDecreace: Product) => void;
  addPromoCode: (promoCodeToAdd: string) => void;
  setIsPromoCodeValid: (isValid: boolean) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      productId: [],
      productsInCart: [],
      totalProducts: 0,
      total: 0,
      promoCode: "",
      isPromoCodeValid: false,
      addProductToCart: (productToAdd) =>
        set((state) => ({
          productId: [...state.productId, productToAdd.id],
          productsInCart: [...state.productsInCart, productToAdd],
          totalProducts: state.totalProducts + productToAdd.price,
        })),
      removeProductFromCart: (productToRemove) =>
        set((state) => ({
          productId: state.productId.filter((id) => id !== productToRemove.id),
          productsInCart: state.productsInCart.filter(
            (product) => product.id !== productToRemove.id
          ),
          totalProducts: state.totalProducts - productToRemove.price,
        })),
      increaseAmount: (productToIncreace) =>
        set((state) => {
          const productsInCart = state.productsInCart.map((product) => {
            if (product.id === productToIncreace.id && product.amount) product.amount++;
            return product;
          });
          return {
            productsInCart: productsInCart,
            totalProducts: state.totalProducts + productToIncreace.price,
          };
        }),
      decreaseAmount: (productToDecreace) =>
        set((state) => {
          const productsInCart = state.productsInCart.map((product) => {
            if (product.id === productToDecreace.id && product.amount) product.amount--;
            return product;
          });
          return {
            productsInCart: productsInCart,
            totalProducts: state.totalProducts - productToDecreace.price,
          };
        }),
      addPromoCode: (promoCodeToAdd) =>
        set(() => ({
          promoCode: promoCodeToAdd,
        })),
      setIsPromoCodeValid: (isValid) => set(() => ({ isPromoCodeValid: isValid })),
    }),
    { name: "cart-storage" }
  )
);
