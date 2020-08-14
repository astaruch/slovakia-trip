export const DarkTheme = {
  color: {
    primary: "#EC407A",
    background: "#ffffff",
    lighterBackground: "#292A31",
    border: "#4A4B57",
    gradientBackground: "linear-gradient(90deg, #F4977B 0%, #F9567E 100%)",
    white: "#ffffff",
    black: "#000000",
    gray100: "#19191D",
    gray50: "#787885",
    gray40: "#9696A0",
    gray30: "#B4B4BB",
    gray10: "#E1E1E3",
    gray5: "#F0F0F1",
    gray0: "#F9F9FA",
    red: "#f44336",
    blue: "#2194f3",
    darkBlue: "#302c43",
  },
};

export type DarkThemeType = typeof DarkTheme;
// export type ThemeTextColorsKeys = keyof DarkThemeType["color"]["text"];
// export type ThemeFontSizeKeys = keyof DarkThemeType["font"]["size"];

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `screen and (min-width: ${size.mobileS})`,
  mobileM: `screen and (min-width: ${size.mobileM})`,
  mobileL: `screen and (min-width: ${size.mobileL})`,
  tablet: `screen and (min-width: ${size.tablet})`,
  laptop: `screen and (min-width: ${size.laptop})`,
  laptopL: `screen and (min-width: ${size.laptopL})`,
  desktop: `screen and (min-width: ${size.desktop})`,
  desktopL: `screen and (min-width: ${size.desktop})`,
};
