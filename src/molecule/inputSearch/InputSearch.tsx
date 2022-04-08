import { Icon } from 'atoms';
import { useTheme } from 'hooks';
import { Input } from 'molecule';
import React from 'react';
import { ActivityIndicator, TextInputProps, View } from 'react-native';
import styled from 'styled-components/native';

interface IInputSearch extends TextInputProps {
  onPress: () => void;
  isLoading?: boolean;
}

const InputSearch: React.FC<IInputSearch> = ({
  onPress,
  isLoading,
  ...rest
}) => {
  const theme = useTheme();

  const ButtonSearch = styled.Pressable`
    background-color: ${theme.palette.background};
    margin-left: 4px;
    align-items: center;
    justify-content: center;
    padding: 0px 16px;
    border-radius: 8px;
    border-color: ${theme.palette.primary};
    border-width: 1px;
  `;

  return (
    <View style={{ flexDirection: 'row', width: '100%' }}>
      <Input containerStyle={{ flex: 1 }} {...rest} />

      <ButtonSearch
        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
        onPress={() => {
          isLoading ? '' : onPress();
        }}
      >
        {isLoading ? (
          <ActivityIndicator size={24} color={theme.palette.primary} />
        ) : (
          <Icon name={'search'} />
        )}
      </ButtonSearch>
    </View>
  );
};

export default InputSearch;
