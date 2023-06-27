export enum themeTypes {
  light = "light",
  dark = "dark",
}

// COLORS

const TRANSPARENT = "transperent";
const WHITE = "#ffffff";
const BLACK = "#000c22";
const BLACK25 = "#000c2225";
const BLACK45 = "#000c2245";
const POWDER = "#eee9dc";
const POWDER30 = "#eee9dc30";
const POWDER50 = "#eee9dc50";
const POWDER80 = "#eee9dc80";
const PURPL_DARK = "#491e4b";
const PURPL_DARK30 = "#491e4b30";
const PURPL_DARK50 = "#491e4b50";
const PURPL_DARK80 = "#491e4b80";

const themeSettings = {
  [themeTypes.light]: {
    token: {
      // colorPrimary: PURPL_DARK,
    },
    components: {
      Switch: {
        colorPrimary: PURPL_DARK80,
        colorPrimaryHover: PURPL_DARK,
        colorTextQuaternary: POWDER30,
        colorTextTertiary: POWDER50,
      },
      Select: {
        colorText: BLACK,
        colorPrimaryHover: TRANSPARENT,
        colorBgContainer: TRANSPARENT,
        controlItemBgActive: PURPL_DARK50,
        colorTextQuaternary: PURPL_DARK,
        lineWidth: 0,
      },
      Input: {
        lineWidth: 0,
        colorText: BLACK,
        colorTextPlaceholder: BLACK25,
        colorTextQuaternary: BLACK25,
        colorTextTertiary: BLACK45,
      },
      Button: {
        lineWidth: 0,
        colorPrimary: "yellow",
        colorBgContainer: WHITE,
        colorPrimaryText: "red",
      },
    },
  },
  [themeTypes.dark]: {
    token: {
      // colorPrimary: PURPL_DARK,
    },
    components: {
      Switch: {
        colorPrimary: PURPL_DARK80,
        colorPrimaryHover: PURPL_DARK,
        colorTextQuaternary: POWDER30,
        colorTextTertiary: POWDER50,
      },
      Select: {
        colorText: WHITE,
        colorPrimaryHover: TRANSPARENT,
        colorBgContainer: TRANSPARENT,
        colorBgElevated: PURPL_DARK,
        controlItemBgActive: POWDER50,
        controlItemBgHover: POWDER30,
        colorTextQuaternary: WHITE,
        lineWidth: 0,
      },
      Input: {
        lineWidth: 0,
        colorText: WHITE,
        colorTextPlaceholder: WHITE,
        colorTextQuaternary: POWDER50,
        colorTextTertiary: POWDER80,
      },
      Button: {
        lineWidth: 0,
        colorBgContainer: PURPL_DARK,
      },
    },
  },
};

export default themeSettings;
