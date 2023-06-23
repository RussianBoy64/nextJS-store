"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Switch, Space } from "antd";
import Image from "next/image";
import Sun from "public/sun.png";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  const onChandeHandler = (checked: boolean) =>
    checked ? setTheme("light") : setTheme("dark");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Space direction="horizontal" size={2}>
      <Switch
        checkedChildren={
          <Image
            src={Sun}
            alt="sun"
            style={{
              width: 22,
              height: 22,
              padding: "2px",
              objectFit: "contain",
            }}
          />
        }
        unCheckedChildren={<CloseOutlined />}
        defaultChecked
        onChange={onChandeHandler}
      />
    </Space>
  );
};

export default ThemeSwitch;
