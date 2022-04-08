import { StyleSheet } from 'react-native';

interface IInputSearchStyle {
  inputContainer: { borderRadius: 16 };
  inputIcon: {
    marginRight: 16;
  };
}

const InputSearchStyle = (): IInputSearchStyle => {
  return StyleSheet.create({
    inputContainer: { borderRadius: 16 },
    inputIcon: {
      marginRight: 16,
    },
  });
};

export default InputSearchStyle;
