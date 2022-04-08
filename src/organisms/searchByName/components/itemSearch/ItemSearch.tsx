import { Icon, Texts } from 'atoms';
import React from 'react';
import styled from 'styled-components/native';

interface IItemSearchProps {
  itemName: string;
  onPressItem: () => void;
}

const ItemSearch: React.FC<IItemSearchProps> = ({ itemName, onPressItem }) => {
  const ContainerItemSearch = styled.Pressable`
    flex-direction: row;
    justify-content: space-between;
  `;
  return (
    <ContainerItemSearch
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
      onPress={() => onPressItem()}
    >
      <Texts>{itemName}</Texts>
      <Icon name={'chevron-right'} />
    </ContainerItemSearch>
  );
};

export default ItemSearch;
