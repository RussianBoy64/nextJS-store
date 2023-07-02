import { create } from "zustand";
import { persist } from "zustand/middleware";

import { themeTypes } from "settings/themeSettings";

interface SettingsState {
  themeStyle: themeTypes;
  setThemeStyle: (theme: themeTypes) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      themeStyle: themeTypes.light,
      setThemeStyle: (theme) => set(() => ({ themeStyle: theme })),
    }),
    { name: "settings-storage" }
  )
);
