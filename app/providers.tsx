"use client";

import { ThemeProvider } from "next-themes";
import { ConfigProvider } from "antd";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ConfigProvider>{children}</ConfigProvider>
    </ThemeProvider>
  );
}
