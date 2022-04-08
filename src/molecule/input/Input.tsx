import { Texts } from 'atoms';
import useTheme from 'hooks/useTheme';
import React, { useState } from 'react';
import {
  ColorValue,
  StyleProp,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import InputStyle from './input.styles';

interface IInputProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  containerInputStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  placeholderColor?: ColorValue;
  rightIcon?: JSX.Element;
  leftIcon?: JSX.Element;
  label?: string;
  message?: string;
  messageType?: 'error' | 'succes';
  disabled?: boolean;
}

const Input: React.FC<IInputProps> = ({
  containerStyle,
  containerInputStyle,
  placeholderColor,
  inputStyle,
  rightIcon,
  leftIcon,
  label,
  message,
  disabled,
  messageType = 'error',
  ...rest
}) => {
  const theme = useTheme();
  const [isFocus, setIsFocus] = useState(false);
  const handleFocus = (): void => setIsFocus(true);
  const handleBlur = (): void => setIsFocus(false);
  const styles = InputStyle(isFocus, disabled);
  return (
    <View style={[styles.absoluteContainer, containerStyle]}>
      {label ? (
        <Texts variants='smallBold' style={styles.textLabel}>
          {label}
        </Texts>
      ) : null}
      <View style={[styles.container, containerInputStyle]}>
        {leftIcon ?? null}
        <TextInput
          style={[styles.containerInput, inputStyle]}
          placeholderTextColor={placeholderColor ?? theme.palette.texts.regular}
          onFocus={() => handleFocus()}
          onBlur={() => handleBlur()}
          editable={!disabled}
          {...rest}
        />
        {rightIcon ?? null}
      </View>
      {message ? (
        <Texts
          variants='smallBold'
          style={{
            color:
              messageType === 'error'
                ? theme.palette.error
                : theme.palette.success,
          }}
        >
          {message}
        </Texts>
      ) : null}
    </View>
  );
};

export default Input;
