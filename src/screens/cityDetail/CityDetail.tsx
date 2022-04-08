import { Button, Texts } from 'atoms';
import { useClientStore, useDate, useTheme } from 'hooks';
import { NavsProps } from 'navigation/stacks/root/rootParamList';
import { initialCitiesId } from 'particules/clientStore/clientStore';
import React from 'react';
import styled from 'styled-components/native';
import { Column, Row } from 'utils/layout/Layout';

type ICityDetailProps = NavsProps<'CityDetail'>;

const CityDetail: React.FC<ICityDetailProps> = ({ route }) => {
  const theme = useTheme();
  const todayDate = new Date();
  const { dayNumber, dayString, month, year } = useDate(todayDate);
  const { citiesId, dispatch } = useClientStore();
  const city = route.params.city;

  const Image = styled.Image`
    width: 80px;
    height: 80px;
    border-color: black;
    border-width: 1px;
    border-radius: 8px;
    border-color: ${theme.palette.texts.title};
  `;

  const Container = styled.View`
    background-color: ${theme.palette.weatherCard.background};
    justify-content: center;
    align-items: center;
    flex: 1;
  `;

  return (
    <Container>
      <Texts variants='bigTitle'>{`${city.name} - ${city.country}`}</Texts>
      <Texts style={{ marginBottom: 24 }}>
        Fecha: {`${dayString} ${dayNumber} de ${month} del ${year}`}
      </Texts>
      <Row style={{ marginBottom: 24 }}>
        <Image
          source={{
            uri: `http://openweathermap.org/img/wn/${city.weather.summary.icon}@2x.png`,
          }}
        />
        <Column
          style={{
            marginLeft: 16,
          }}
        >
          <Texts variants='bigTitle'>
            {`${city.weather.temperature.actual}°C`}
          </Texts>
          <Texts variants='bigRegular'>
            {city.weather.summary.description}
          </Texts>
        </Column>
      </Row>
      <Texts variants='bigRegular'>Max: {city.weather.temperature.max}</Texts>
      <Texts variants='bigRegular'>Min: {city.weather.temperature.min}</Texts>
      <Button
        title={
          citiesId.includes(city.id)
            ? 'Eliminar de favoritos'
            : 'Agregar a favoritos'
        }
        containerStyle={{ alignSelf: 'center', marginTop: 24 }}
        disabled={initialCitiesId.includes(city.id)}
        onPress={() => {
          if (citiesId.includes(city.id)) {
            dispatch({ type: 'DELETE_CITY', payload: { id: city.id } });
          } else {
            dispatch({ type: 'ADD_CITY_ID', payload: { id: city.id } });
          }
        }}
      />
    </Container>
  );
};

export default CityDetail;
