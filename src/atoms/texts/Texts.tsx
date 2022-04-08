import React from 'react';
import useTheme from 'hooks/useTheme';
import { StyleProp, TextStyle } from 'react-native';
import styled from 'styled-components/native';

interface ITextsProps {
  variants?:
    | 'regular'
    | 'bigRegular'
    | 'title'
    | 'bigTitle'
    | 'extraBigTitle'
    | 'smallBold';
  style?: StyleProp<TextStyle>;
}

const Texts: React.FC<ITextsProps> = ({
  variants = 'regular',
  style,
  children,
}) => {
  const theme = useTheme();
  const montserrat = 'montserrat-regular';
  const montserratBold = 'montserrat-bold';

  const textTypes = {
    smallBold: {
      'font-size': theme.fontSizes.s,
      color: theme.palette.texts.regular,
      'font-family': montserratBold,
    },
    regular: {
      'font-size': theme.fontSizes.m,
      color: theme.palette.texts.regular,
      'font-family': montserrat,
    },
    bigRegular: {
      'font-size': theme.fontSizes.l,
      color: theme.palette.texts.regular,
      'font-family': montserrat,
    },
    title: {
      'font-size': theme.fontSizes.l,
      color: theme.palette.texts.title,
      'font-family': montserratBold,
    },
    bigTitle: {
      'font-size': theme.fontSizes.xl,
      color: theme.palette.texts.title,
      'font-family': montserratBold,
    },
    extraBigTitle: {
      'font-size': theme.fontSizes.xxl,
      color: theme.palette.texts.title,
      'font-family': montserratBold,
    },
  };
  const SText = styled.Text`
    ${textTypes[variants]}
  `;
  return <SText style={style}>{children}</SText>;
};

export default Texts;
