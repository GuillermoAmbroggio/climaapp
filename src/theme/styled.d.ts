import 'styled-components';
import { ISizes, IWeight } from './tokens/text';

interface ITexts {
  subTitle: string;
  regular: string;
  title: string;
}
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: number;
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: string;
      secondary: string;
      tertiary: string;
      background: string;
      error: string;
      success: string;
      texts: ITexts;
      button: {
        text: string;
      };
      weatherCard: {
        background: string;
      };
      header: {
        background: string;
      };
    };
    fontSizes: ISizes;
  }
}
