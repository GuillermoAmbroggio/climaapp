import { useTheme } from 'hooks';
import { StyleSheet } from 'react-native';

interface IStyleProps {
  containerCard: {
    flexDirection: 'row';
    paddingTop: 4;
    paddingHorizontal: 24;
    paddingBottom: 8;
    alignItems: 'center';
    backgroundColor: string;
  };
  containerText: {
    position: 'absolute';
    left: 50;
    right: 50;
    alignItems: 'center';
    justifyContent: 'center';
  };
}

const HeaderGoBackStyle = (): IStyleProps => {
  const theme = useTheme();

  return StyleSheet.create({
    containerCard: {
      flexDirection: 'row',
      paddingTop: 4,
      paddingHorizontal: 24,
      paddingBottom: 8,
      alignItems: 'center',
      backgroundColor: theme.palette.header.background,
    },
    containerText: {
      position: 'absolute',
      left: 50,
      right: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};

export default HeaderGoBackStyle;
