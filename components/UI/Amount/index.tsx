"use client";

import { useCartStore } from "@/store/cartStore";
import { Product } from "api/productsData";

import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, InputNumber, Space } from "antd";

import styles from "./amount.module.scss";

interface AmountProps {
  product: Product;
  value: number;
}

const Amount = ({ product, value }: AmountProps) => {
  const [increaseAmount, decreaseAmount, removeProductFromCart] = useCartStore(
    (state) => [state.increaseAmount, state.decreaseAmount, state.removeProductFromCart]
  );

  const plusClickHandler = () => {
    increaseAmount(product.id);
  };

  const minusClickHandler = () => {
    if (value === 1) {
      removeProductFromCart(product);
    } else {
      decreaseAmount(product.id);
    }
  };

  return (
    <Space.Compact className={styles.amount} block>
      <Button icon={<MinusOutlined />} onClick={minusClickHandler} />
      <InputNumber className={styles.amount__input} value={value} />
      <Button icon={<PlusOutlined />} onClick={plusClickHandler} />
    </Space.Compact>
  );
};

export default Amount;
