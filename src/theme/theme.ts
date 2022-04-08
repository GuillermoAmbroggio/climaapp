import { DefaultTheme } from 'styled-components';
import { colors, text } from './tokens';
import produce from 'immer';

export const lightTheme: DefaultTheme = {
  borderRadius: 4,
  palette: {
    common: {
      black: colors.common.black,
      white: colors.common.white,
    },
    primary: colors.common.black,
    secondary: colors.gray.gray30,
    tertiary: colors.gray.gray10,
    background: colors.common.white,
    success: colors.green.green50,
    error: colors.red.red50,
    texts: {
      subTitle: colors.common.black,
      regular: colors.common.black,
      title: colors.common.black,
    },
    button: {
      text: colors.common.white,
    },
    weatherCard: {
      background: 'rgba(255,255,255,0.5)',
    },
    header: {
      background: 'rgba(255,255,255,0.9)',
    },
  },
  fontSizes: text.size,
};

export const darkTheme = produce(lightTheme, (draft) => {
  draft.palette.background = colors.common.black;
  draft.palette.texts.regular = colors.common.white;
  draft.palette.texts.title = colors.common.white;
  draft.palette.texts.subTitle = colors.common.white;
  draft.palette.texts.title = colors.common.white;
  draft.palette.primary = colors.blue.ligthBlue;
  draft.palette.secondary = colors.gray.gray30;
  draft.palette.tertiary = colors.gray.gray100;
  draft.palette.button.text = colors.common.black;
  draft.palette.weatherCard.background = 'rgba(0,0,0,0.5)';
  draft.palette.header.background = 'rgba(0,0,0,0.9)';
});
