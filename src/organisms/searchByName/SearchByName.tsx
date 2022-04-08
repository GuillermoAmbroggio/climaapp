import { Texts } from 'atoms';
import { InputSearch } from 'molecule';
import { NavsProps } from 'navigation/stacks/root/rootParamList';
import { useSearchCityByName } from 'particules/serverStore/weather/queries';
import React, { useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import ItemSearch from './components/itemSearch/ItemSearch';

type ISearchProps = Omit<NavsProps<'Home'>, 'route'>;

const SearchByName: React.FC<ISearchProps> = ({ navigation }) => {
  const [nameCity, setNameCity] = useState<string>('');
  const { data, loading, refetch } = useSearchCityByName(nameCity);
  const city = data?.getCityByName;

  const ContainerResults = styled.View`
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 8px;
    padding: 8px 16px;
    margin-top: 2px;
  `;

  return (
    <View>
      <InputSearch
        isLoading={loading}
        value={nameCity ?? ''}
        onChangeText={setNameCity}
        placeholder='Buscar una ciudad...'
        onPress={() => {
          if (nameCity) {
            refetch({ name: nameCity });
          }
        }}
      />
      {nameCity.length ? (
        <ContainerResults>
          {city ? (
            <ItemSearch
              onPressItem={() => {
                navigation.navigate('CityDetail', { city });
              }}
              itemName={`${city?.name} - ${city.country}`}
            />
          ) : (
            <Texts>No se encontraron resultados para {nameCity}</Texts>
          )}
        </ContainerResults>
      ) : null}
      {/*  <WeatherCard city={city} />; */}
    </View>
  );
};

export default SearchByName;
