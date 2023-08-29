"use client";

import { Space, Input, Button } from "antd";

const onSearch = (value: string) => console.log(value);

const DiscountInput = () => {
  return (
    <Space.Compact style={{ width: "100%", marginBottom: "1.5rem" }}>
      <Input placeholder="PROMO-CODE" />
      <Button style={{ fontWeight: 500 }} type="default">
        Apply
      </Button>
    </Space.Compact>
  );
};

export default DiscountInput;
