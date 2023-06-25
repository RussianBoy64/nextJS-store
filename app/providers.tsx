"use client";

import { ThemeProvider } from "next-themes";
import { ConfigProvider } from "antd";
import themeSettings, { themeTypes } from "static/themeSettings";
import { useSettingsStore } from "@/store/settingsStore";

export function Providers({ children }: { children: React.ReactNode }) {
  const themeStyle = useSettingsStore((state) => state.themeStyle);

  return (
    <ThemeProvider
      storageKey="theme"
      defaultTheme={themeTypes.light}
      themes={[themeTypes.light, themeTypes.dark]}
    >
      <ConfigProvider theme={themeSettings[themeStyle]}>{children}</ConfigProvider>
    </ThemeProvider>
  );
}
