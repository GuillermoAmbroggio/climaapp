import { Texts } from 'atoms';
import { useTheme } from 'hooks';
import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import buttonStyle from './button.style';

interface IButtonProps extends Omit<PressableProps, 'style'> {
  type?: 'primary' | 'secondary' | 'tertiary';
  size?: 'default' | 'big' | 'small';
  containerStyle?: StyleProp<ViewStyle>;
  title: string;
  isLoading?: boolean;
  stretch?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  containerStyle,
  title,
  type = 'primary',
  isLoading,
  disabled,
  stretch,
  ...rest
}) => {
  const style = buttonStyle(type);
  const theme = useTheme();
  return (
    <>
      {disabled ? (
        <View style={[style.containerDisabled, containerStyle]}>
          {isLoading ? (
            <ActivityIndicator
              color={
                type === 'primary'
                  ? theme.palette.common.white
                  : theme.palette.primary
              }
              size={20}
            />
          ) : (
            <Texts style={[style.text]} variants='title'>
              {title}
            </Texts>
          )}
        </View>
      ) : (
        <Pressable
          style={({ pressed }) => [
            style.container,
            containerStyle,
            { opacity: pressed ? 0.6 : 1 },
            stretch ? { alignSelf: 'stretch', alignItems: 'center' } : {},
          ]}
          {...rest}
        >
          {isLoading ? (
            <ActivityIndicator
              color={
                type === 'primary'
                  ? theme.palette.common.white
                  : theme.palette.primary
              }
              size={20}
            />
          ) : (
            <Texts style={[style.text]} variants='title'>
              {title}
            </Texts>
          )}
        </Pressable>
      )}
    </>
  );
};

export default Button;
