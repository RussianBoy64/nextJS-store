"use client";

import { ChangeEventHandler, KeyboardEventHandler, useState } from "react";
import { promoCodes, useCartStore } from "@/store/cartStore";
import useStore from "@/hooks/useStore";

import { Space, Input, Button } from "antd";

import styles from "./discountInput.module.scss";

const DiscountInput = () => {
  const promoCode = useStore(useCartStore, (state) => state.promoCode);
  const isPromoCodeValid = useStore(useCartStore, (state) => state.isPromoCodeValid);
  const [isMessageShown, setIsMessageShown] = useState(false);

  const { addPromoCode, setIsPromoCodeValid } = useCartStore((state) => ({
    addPromoCode: state.addPromoCode,
    setIsPromoCodeValid: state.setIsPromoCodeValid,
  }));

  const showMessage = () => {
    if (isMessageShown) return;
    setIsMessageShown(true);
    setTimeout(() => setIsMessageShown(false), 3000);
  };
  const successMessageStyles = [
    styles.discountInput__message,
    styles.discountInput__message_success,
  ].join(" ");
  const errorMessageStyles = [
    styles.discountInput__message,
    styles.discountInput__message_error,
  ].join(" ");

  const onChandeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    const input = event.target as HTMLInputElement;
    addPromoCode(input.value);
  };

  const onPressEnterHandler: KeyboardEventHandler<HTMLInputElement> = (event) => {
    const input = event.target as HTMLInputElement;
    const isInputValid = input.value === promoCodes.cheap;
    showMessage();
    // setIsMessageShown(true);
    if (isInputValid) setIsPromoCodeValid(true);
  };

  const onClickHandler = () => {
    if (isPromoCodeValid) {
      setIsMessageShown(false);
      setIsPromoCodeValid(false);
    } else {
      const isInputValid = promoCode === promoCodes.cheap;

      showMessage();
      if (isInputValid) setIsPromoCodeValid(true);
    }
  };

  return (
    <Space.Compact className={styles.discountInput}>
      {isMessageShown && isPromoCodeValid && (
        <span className={successMessageStyles}>Promo-code applied!</span>
      )}
      {isMessageShown && !isPromoCodeValid && (
        <span className={errorMessageStyles}>Wrong promo-code!</span>
      )}
      {isPromoCodeValid ? (
        <>
          <Input
            placeholder="PROMO-CODE"
            value={promoCode}
            onChange={onChandeHandler}
            onPressEnter={onPressEnterHandler}
            className={styles.discountInput__input}
            disabled
          />
          <Button
            className={styles.discountInput__btn}
            type="primary"
            onClick={onClickHandler}
          >
            Remove
          </Button>
        </>
      ) : (
        <>
          <Input
            placeholder="PROMO-CODE"
            value={promoCode}
            onChange={onChandeHandler}
            onPressEnter={onPressEnterHandler}
            className={styles.discountInput__input}
          />
          <Button
            className={styles.discountInput__btn}
            type="primary"
            onClick={onClickHandler}
          >
            Apply
          </Button>
        </>
      )}
    </Space.Compact>
  );
};

export default DiscountInput;
