import "styled-components/native";
import { DefaultTheme } from "styled-components/native";
import { DarkThemeType } from "styles/theme";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends DarkThemeType {}
}
