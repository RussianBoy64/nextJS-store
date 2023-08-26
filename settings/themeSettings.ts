import { theme } from "antd";

export enum themeTypes {
  light = "light",
  dark = "dark",
}

export enum buttonTypes {
  default = "default",
  primary = "primary",
  link = "link",
}

// COLORS

const WHITE = "#ffffff";
const BLACK = "#000c22";
const PURPL = "#a332f2";
const POWDER = "#eee9dc";
const PURPL_DARK = "#6705ab";

const themeSettings = {
  [themeTypes.light]: {
    token: {
      colorPrimary: PURPL,
      colorInfo: PURPL,
      colorTextBase: BLACK,
      colorBgBase: WHITE,
      colorLink: BLACK,
    },
    algorithm: theme.defaultAlgorithm,
  },
  [themeTypes.dark]: {
    token: {
      colorPrimary: PURPL,
      colorInfo: PURPL,
      colorTextBase: WHITE,
      colorLink: WHITE,
      colorBgBase: BLACK,
      colorBorder: PURPL,
      colorBorderSecondary: PURPL_DARK,
      colorBgContainer: BLACK,
      colorBgSpotlight: PURPL,
      colorBgElevated: PURPL_DARK,
    },
    algorithm: theme.darkAlgorithm,
  },
};

export default themeSettings;
