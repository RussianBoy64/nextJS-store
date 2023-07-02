"use client";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import styles from "./searchPanel.module.scss";

const SearchPanel = () => {
  const onSearch = (event: React.SyntheticEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log(event.currentTarget.value);
  };

  return (
    <Input
      placeholder="Search"
      bordered={false}
      prefix={<SearchOutlined />}
      onPressEnter={onSearch}
      allowClear
      className={styles.searchPanel}
    />
  );
};

export default SearchPanel;
