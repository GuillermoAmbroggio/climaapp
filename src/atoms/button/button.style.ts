import { useTheme } from 'hooks';
import { Platform, StyleSheet } from 'react-native';

export type ButtonType = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'default' | 'big' | 'small';

type containerSize = {
  paddingVertical: number;
  paddingHorizontal: number;
  cursor?: string;
};

type containerType = {
  borderRadius: number;
  backgroundColor: string;
  borderColor?: string;
  borderWidth?: number;
};

type ICssType = {
  container: {
    alignSelf: 'flex-start';
  };
  containerDisabled: {
    alignSelf: 'flex-start';
    borderRadius: 14;
    backgroundColor: string;
  };
  text: { color: string };
};

const ButtonStyle = (type: ButtonType): ICssType => {
  const theme = useTheme();

  const containerSize: containerSize = {
    paddingVertical: 16,
    paddingHorizontal: 26,
    cursor: 'pointer',
  };
  const containerType: containerType = {
    borderRadius: 14,
    backgroundColor: theme.palette.primary,
  };
  const textType = { color: theme.palette.button.text };
  if (type === 'secondary') {
    textType.color = theme.palette.primary;
    containerType.backgroundColor = 'transparent';
    containerType.borderWidth = 1;
  }
  if (type === 'tertiary') {
    textType.color = theme.palette.primary;
    containerType.backgroundColor = 'transparent';
  }
  if (Platform.OS !== 'web') {
    delete containerSize.cursor;
  }
  return StyleSheet.create({
    container: {
      ...containerSize,
      ...containerType,
      alignSelf: 'flex-start',
    },
    containerDisabled: {
      ...containerSize,
      alignSelf: 'flex-start',
      borderRadius: 14,
      backgroundColor: theme.palette.secondary,
      opacity: 0.4,
    },
    text: {
      ...textType,
    },
  });
};

export default ButtonStyle;
