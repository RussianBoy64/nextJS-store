"use client";

import { GiftFilled, ArrowRightOutlined } from "@ant-design/icons";
import { Input } from "antd";

import styles from "./subscribeForm.module.scss";

const { Search } = Input;

const suffix = <ArrowRightOutlined className={styles.subscribeForm__suffix} />;

const onSearch = (value: string) => console.log(value);

const SubscribeForm = () => {
  return (
    <div className={styles.subscribeForm}>
      <span className={styles.subscribeForm__discount}>
        <GiftFilled /> Get -10% on any order
      </span>
      <span className={styles.subscribeForm__title}>
        On your first purchase by subscribing
      </span>
      <Search
        placeholder="Your e-mail"
        type="e-mail"
        enterButton="Subscribe"
        size="large"
        suffix={suffix}
        onSearch={onSearch}
      />
    </div>
  );
};

export default SubscribeForm;
