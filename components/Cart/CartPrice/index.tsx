"use client";

import DiscountInput from "@/components/UI/DiscountInput";
import { Button, List } from "antd";
import { LockFilled } from "@ant-design/icons";

import styles from "./cartPrice.module.scss";

const CartPrice = () => {
  return (
    <div className={styles.cartPrice}>
      <span className={styles.cartPrice__title}>Total</span>
      <div className={styles.cartPrice__flexRow}>
        <span className={styles.cartPrice__waste}>Products</span>
        <span className={styles.cartPrice__wasteValue}>3999$</span>
      </div>
      <div className={styles.cartPrice__flexRow}>
        <span className={styles.cartPrice__waste}>Delivery</span>
        <span className={styles.cartPrice__wasteValue}>FREE</span>
      </div>
      <div className={styles.cartPrice__flexRow}>
        <span className={styles.cartPrice__waste}>Discount</span>
        <span className={styles.cartPrice__wasteValue}>0%</span>
      </div>
      <span className={styles.cartPrice__total}>
        222.36
        <span className={styles.cartPrice__priceSign}>$</span>
      </span>
      <DiscountInput />
      <Button style={{ width: "100%" }} type="primary">
        Buy now
      </Button>
      <List.Item.Meta
        className={styles.cartPrice__ssl}
        avatar={<LockFilled />}
        title={<span>Payment security SSL</span>}
      />
    </div>
  );
};

export default CartPrice;
