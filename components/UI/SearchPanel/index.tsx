"use client";

import { ChangeEventHandler, useState } from "react";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import SearchResults from "./SearchResults";

import styles from "./searchPanel.module.scss";
import { useSearchParams } from "next/navigation";

const SearchPanel = () => {
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState<string>(
    searchParams.get("search") || ""
  );

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    const input = event.target as HTMLInputElement;
    setSearchValue(input.value);
  };

  return (
    <div className={styles.searchPanel}>
      <Input
        value={searchValue}
        placeholder="Search"
        bordered={false}
        prefix={<SearchOutlined />}
        onChange={onChangeHandler}
        allowClear
        className={styles.searchPanel__input}
      />
      {searchValue && <SearchResults searchValue={searchValue} />}
    </div>
  );
};

export default SearchPanel;
