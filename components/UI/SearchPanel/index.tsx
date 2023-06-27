"use client";

import { Input } from "antd";

import styles from "./searchPanel.module.scss";

const SearchPanel = () => {
  const { Search } = Input;

  const onSearch = (value: string) => console.log(value);

  return (
    <Search
      placeholder="Search"
      allowClear
      bordered={false}
      onSearch={onSearch}
      className={styles.searchPanel}
    />
  );
};

export default SearchPanel;
