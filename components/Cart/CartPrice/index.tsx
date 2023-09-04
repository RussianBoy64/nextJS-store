"use client";

import { useCartStore } from "@/store/cartStore";
import { useSettingsStore } from "@/store/settingsStore";
import useMounted from "@/hooks/useMounted";
import currency, { currencyTypes } from "settings/currencySettings";

import DiscountInput from "@/components/UI/DiscountInput";
import { Modal, Button, List } from "antd";
import { LockFilled } from "@ant-design/icons";

import styles from "./cartPrice.module.scss";
import { redirect } from "next/navigation";
import routes, { routesNames } from "routes";

type Delivery = number | "FREE";

interface ICartInfo {
  productsTotal: number;
  deliveryTotal: Delivery;
  discount: number;
  total: number;
  totalWithDiscount: number;
}

const getTotalPriceStyles = (isPromoCodeValid: boolean) =>
  isPromoCodeValid
    ? [styles.cartPrice__total, styles.cartPrice__total_cross].join(" ")
    : [styles.cartPrice__total].join(" ");

const getTotalWIdthDiscountStyles = (isPromoCodeValid: boolean) =>
  isPromoCodeValid
    ? [styles.cartPrice__discount, styles.cartPrice__discount_visible].join(" ")
    : [styles.cartPrice__discount].join(" ");

const getTotalProductsValue = (currentCurrency: currencyTypes, productsTotal: number) =>
  currentCurrency ? currency[currentCurrency].getPrice(productsTotal) : productsTotal;

const getDeliveryTotalValue = (currentCurrency: currencyTypes, price: number) =>
  price > currency[currentCurrency].getPrice(3000) ? "FREE" : price * 0.04;

const getTotalValue = (productsPrice: number, deliveryPrice: Delivery) =>
  deliveryPrice === "FREE" || 0 ? productsPrice : productsPrice + deliveryPrice;

const getTotalValueWithDiscount = (
  productsPrice: number,
  currentCurrency: currencyTypes
) =>
  productsPrice > currency[currentCurrency].getPrice(3000)
    ? productsPrice
    : productsPrice + productsPrice * 0.04;

const CartPrice = () => {
  const isMounted = useMounted();
  const { productPrice, isPromoCodeValid } = useCartStore((state) => ({
    productPrice: state.totalProducts,
    isPromoCodeValid: state.isPromoCodeValid,
  }));
  const currentCurrency = useSettingsStore((state) => state.currensy);
  const clearCart = useCartStore((state) => state.clearCart);
  const [modal, contextHolder] = Modal.useModal();

  if (!isMounted) return null;

  const productSign = currentCurrency ? currency[currentCurrency].sign : "$";

  const cartInfo: ICartInfo = {
    productsTotal: getTotalProductsValue(currentCurrency, productPrice),
    deliveryTotal: 0,
    discount: 0,
    total: 0,
    totalWithDiscount: 0,
  };

  if (!isPromoCodeValid) {
    cartInfo.deliveryTotal = getDeliveryTotalValue(
      currentCurrency,
      cartInfo.productsTotal
    );
    cartInfo.total = getTotalValue(cartInfo.productsTotal, cartInfo.deliveryTotal);
  } else {
    cartInfo.discount = 10;
    cartInfo.total = getTotalValueWithDiscount(cartInfo.productsTotal, currentCurrency);
    cartInfo.productsTotal = cartInfo.productsTotal - cartInfo.productsTotal * 0.1;
    cartInfo.deliveryTotal = getDeliveryTotalValue(
      currentCurrency,
      cartInfo.productsTotal
    );
    cartInfo.totalWithDiscount = getTotalValue(
      cartInfo.productsTotal,
      cartInfo.deliveryTotal
    );
  }

  const totalStyles = getTotalPriceStyles(isPromoCodeValid);
  const totalWidthDiscountStyles = getTotalWIdthDiscountStyles(isPromoCodeValid);

  const countDown = () => {
    let secondsToGo = 5;

    const instance = modal.success({
      title: "Thank you!",
      content: `You will redirect to catalog in ${secondsToGo} second.`,
      afterClose: () => {
        clearCart();
        redirect(routes[routesNames.catalog].path);
      },
    });

    const timer = setInterval(() => {
      secondsToGo -= 1;
      instance.update({
        content: `This modal will be destroyed after ${secondsToGo} second.`,
      });
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      instance.destroy();
    }, secondsToGo * 1000);
  };

  return (
    <div className={styles.cartPrice}>
      <span className={styles.cartPrice__title}>Total</span>
      <div className={styles.cartPrice__flexRow}>
        <span className={styles.cartPrice__waste}>Products</span>
        <span className={styles.cartPrice__wasteValue}>{`${
          cartInfo.productsTotal.toFixed(2) + productSign
        }`}</span>
      </div>
      <div className={styles.cartPrice__flexRow}>
        <span className={styles.cartPrice__waste}>Delivery</span>
        <span className={styles.cartPrice__wasteValue}>
          {cartInfo.deliveryTotal === "FREE"
            ? cartInfo.deliveryTotal
            : cartInfo.deliveryTotal.toFixed(2)}
        </span>
      </div>
      <div className={styles.cartPrice__flexRow}>
        <span className={styles.cartPrice__waste}>Discount</span>
        <span className={styles.cartPrice__wasteValue}>{`${cartInfo.discount}%`}</span>
      </div>
      <span className={totalStyles}>
        {cartInfo.total.toFixed(2)}
        <span className={styles.cartPrice__priceSign}>{productSign}</span>
      </span>

      <span className={totalWidthDiscountStyles}>
        {cartInfo.totalWithDiscount.toFixed(2)}
        <span className={styles.cartPrice__priceSign}>{productSign}</span>
      </span>

      <DiscountInput />
      {productPrice ? (
        <>
          <Button onClick={countDown} style={{ width: "100%" }} type="primary">
            Buy now
          </Button>
          {contextHolder}
        </>
      ) : (
        <Button style={{ width: "100%" }} disabled type="primary">
          Buy now
        </Button>
      )}

      <List.Item.Meta
        className={styles.cartPrice__ssl}
        avatar={<LockFilled />}
        title={<span>Payment security SSL</span>}
      />
    </div>
  );
};

export default CartPrice;
