import { useScreenSize, useTheme } from 'hooks';
import { StyleSheet } from 'react-native';

interface IStyleProps {
  absoluteContainer: {
    width: '100%';
    minHeight: 44;
    opacity: number;
  };
  container: {
    flexDirection: 'row';
    alignItems: 'center';
    backgroundColor: string;
    borderRadius: 4;
    paddingHorizontal: 16;
    borderColor: string;
    borderWidth: number;
    width: '100%';
    minHeight: 44;
  };
  containerInput: {
    height: 44;
    fontFamily: string;
    fontSize: 16;
    lineHeight: 17;
    width: '100%';
  };
  textLabel: {
    marginBottom: 4;
  };
}

const InputStyle = (isFocus: boolean, disabled?: boolean): IStyleProps => {
  const screen = useScreenSize();
  const theme = useTheme();
  const inputBorder = screen === 'big' ? { outlineWidth: 0 } : {};
  const montserrat = 'montserrat-regular';

  return StyleSheet.create({
    absoluteContainer: {
      width: '100%',
      minHeight: 44,
      opacity: disabled ? 0.3 : 1,
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.palette.background,
      borderRadius: 4,
      paddingHorizontal: 16,
      borderColor: isFocus
        ? theme.palette.primary
        : theme.palette.texts.regular,
      borderWidth: isFocus ? 2 : 1,
      width: '100%',
      minHeight: 44,
    },
    containerInput: {
      ...inputBorder,
      height: 44,
      // outlineWidth: 0, no reconoce android
      fontFamily: montserrat,
      fontSize: 16,
      lineHeight: 17,
      width: '100%',
      color: theme.palette.primary,
    },
    textLabel: {
      marginBottom: 4,
    },
  });
};

export default InputStyle;
