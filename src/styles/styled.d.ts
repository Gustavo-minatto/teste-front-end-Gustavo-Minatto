import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    COLORS: {
      WHITE: string;
      BLUE: string;
      BLUE_100: string;
      GRAY_200: string;
      GRAY_100: string;
      GRAY: string;
      PURPLE: string;
      YELLOW: string;
    };
  }
}
