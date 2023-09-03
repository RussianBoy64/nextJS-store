"use client";

import validateEmail from "helpers/validateEmail";
import { ChangeEventHandler, KeyboardEventHandler, useState } from "react";

import { GiftFilled, ArrowRightOutlined } from "@ant-design/icons";
import { Input, Space, Button } from "antd";

import styles from "./subscribeForm.module.scss";
import { useUserStore } from "@/store/userStore";
import { promoCodes, useCartStore } from "@/store/cartStore";

const successMessageStyles = [
  styles.subscribeInput__message,
  styles.subscribeInput__message_success,
].join(" ");
const errorMessageStyles = [
  styles.subscribeInput__message,
  styles.subscribeInput__message_error,
].join(" ");

const suffix = <ArrowRightOutlined className={styles.subscribeForm__suffix} />;

const SubscribeForm = () => {
  const [subscribeInputValue, setSubscribeInputValue] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isMessageShown, setIsMessageShown] = useState(false);
  const addEmail = useUserStore((state) => state.addEmail);
  const [addPromoCode, setIsPromoCodeValid] = useCartStore((state) => [
    state.addPromoCode,
    state.setIsPromoCodeValid,
  ]);

  const showMessage = () => {
    if (isMessageShown) return;
    setIsMessageShown(true);
    setTimeout(() => setIsMessageShown(false), 3000);
  };

  const onChandeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    const input = event.target as HTMLInputElement;
    setSubscribeInputValue(input.value);
  };

  const onPressEnterHandler: KeyboardEventHandler<HTMLInputElement> = (event) => {
    const input = event.target as HTMLInputElement;

    setIsEmailValid(validateEmail(input.value));
    showMessage();

    if (isEmailValid) {
      addEmail(input.value);
      addPromoCode(promoCodes.cheap);
      setIsPromoCodeValid(true);
      setSubscribeInputValue("");
    }
  };

  const onClickHandler = () => {
    setIsEmailValid(validateEmail(subscribeInputValue));
    showMessage();

    if (isEmailValid) {
      addEmail(subscribeInputValue);
      addPromoCode(promoCodes.cheap);
      setIsPromoCodeValid(true);
      setSubscribeInputValue("");
    }
  };

  return (
    <div className={styles.subscribeForm}>
      <span className={styles.subscribeForm__discount}>
        <GiftFilled /> Get -10% on any order
      </span>
      <span className={styles.subscribeForm__title}>
        On your first purchase by subscribing
      </span>
      <Space.Compact className={styles.subscribeInput} size="large">
        {isMessageShown && isEmailValid && (
          <span className={successMessageStyles}>Subscribed!</span>
        )}
        {isMessageShown && !isEmailValid && (
          <span className={errorMessageStyles}>E-mail not valid!</span>
        )}
        <Input
          className={styles.subscribeInput__input}
          placeholder="YOUR E-MAIL"
          suffix={suffix}
          value={subscribeInputValue}
          onChange={onChandeHandler}
          onPressEnter={onPressEnterHandler}
        />

        <Button
          className={styles.subscribeInput__btn}
          type="primary"
          onClick={onClickHandler}
        >
          Subscribe
        </Button>
      </Space.Compact>
    </div>
  );
};

export default SubscribeForm;
