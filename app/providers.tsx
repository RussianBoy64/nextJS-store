"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { ConfigProvider } from "antd";
import themeSettings, { themeTypes } from "settings/themeSettings";
import { useSettingsStore } from "@/store/settingsStore";
import useStore from "@/hooks/useStore";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  let themeStyle = useStore(useSettingsStore, (state) => state.themeStyle);

  if (!themeStyle) themeStyle = themeTypes.light;

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        storageKey="theme"
        defaultTheme={themeTypes.light}
        themes={[themeTypes.light, themeTypes.dark]}
      >
        <ConfigProvider theme={themeSettings[themeStyle]}>{children}</ConfigProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
