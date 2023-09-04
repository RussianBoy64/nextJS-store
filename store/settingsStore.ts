import { create } from "zustand";
import { persist } from "zustand/middleware";

import { themeTypes } from "settings/themeSettings";
import { currencyTypes } from "settings/currencySettings";

interface SettingsState {
  themeStyle: themeTypes;
  setThemeStyle: (theme: themeTypes) => void;
  currensy: currencyTypes;
  setCurrency: (currency: currencyTypes) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      themeStyle: themeTypes.light,
      setThemeStyle: (theme) => set({ themeStyle: theme }),
      currensy: currencyTypes.USD,
      setCurrency: (currencyToSet) => set({ currensy: currencyToSet }),
    }),
    { name: "settings-storage" }
  )
);
