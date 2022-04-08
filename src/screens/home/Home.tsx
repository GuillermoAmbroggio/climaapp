import { Texts } from 'atoms';
import { useClientStore, useScreenSize } from 'hooks';
import { NavsProps } from 'navigation/stacks/root/rootParamList';
import { SearchByName, SearchById } from 'organisms';
import React from 'react';
import { Pressable, View } from 'react-native';
import styled from 'styled-components/native';
import { Column, Row } from 'utils/layout/Layout';

type IHomeProps = NavsProps<'Home'>;

const Home: React.FC<IHomeProps> = ({ navigation }) => {
  const { citiesId, dispatch, theme } = useClientStore();
  const isBig = useScreenSize() === 'big';

  const VerticalList = styled.ScrollView`
    flex: 1;
  `;

  const CardContainer = styled.View`
    margin-bottom: 16px;
  `;

  const ImageTheme = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 50px;
  `;

  const sunImage = {
    uri: 'https://st.depositphotos.com/1000792/3338/v/600/depositphotos_33381611-stock-illustration-smiling-sun.jpg',
  };
  const moonImage = {
    uri: 'https://media.istockphoto.com/vectors/happy-moon-vector-id165913693?k=20&m=165913693&s=612x612&w=0&h=fB1VhLdFeSdSAH3Ye9j4D8tlWP7f7uNS1EPxnmX1wAc=',
  };

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 16,
        paddingHorizontal: 16,
        alignItems: isBig ? 'center' : undefined,
      }}
    >
      <Column style={{ marginBottom: 8 }}>
        <Row
          style={{
            justifyContent: 'center',
            marginBottom: 8,
            flexWrap: 'wrap',
          }}
        >
          {theme === 'lightTheme' ? (
            <Pressable
              onPress={() => {
                dispatch({ type: 'CHANGE_THEME', payload: 'darkTheme' });
              }}
            >
              <ImageTheme source={moonImage} />
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                dispatch({ type: 'CHANGE_THEME', payload: 'lightTheme' });
              }}
            >
              <ImageTheme source={sunImage} />
            </Pressable>
          )}
          <Texts style={{ marginLeft: 16 }} variants='title'>
            App del clima
          </Texts>
        </Row>

        <SearchByName navigation={navigation} />
      </Column>
      <VerticalList
        showsVerticalScrollIndicator={isBig ? true : false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingVertical: 16,
        }}
      >
        {citiesId.map((cityId, i) => {
          return (
            <CardContainer key={i}>
              <SearchById id={cityId} navigation={navigation} />
            </CardContainer>
          );
        })}
      </VerticalList>
    </View>
  );
};

export default Home;
