import { Texts } from 'atoms';
import { useScreenSize } from 'hooks';
import useTheme from 'hooks/useTheme';
import { TCity } from 'particules/clientStore/clientStore.types';
import React from 'react';
import styled from 'styled-components/native';
import { Column, Row } from 'utils/layout/Layout';

interface IWeatherCardProps {
  city: TCity;
  onPressCard: () => void;
}

const WeatherCard: React.FC<IWeatherCardProps> = ({ city, onPressCard }) => {
  const theme = useTheme();
  const isBig = useScreenSize() === 'big';

  const Container = styled.Pressable`
    background-color: ${theme.palette.weatherCard.background};
    align-self: ${isBig ? 'flex-start' : 'stretch'};
    align-items:center;
    border-radius: 8px;
    border-color: ${theme.palette.texts.title};
    border-width: 2px;
    shadow-color: #000;
    shadow-offset: {width: 0, height: 2};
    shadow-opacity: 0.8;
    shadow-radius: 2px;
    elevation: 1;
    padding: 16px;
    width: ${isBig ? 400 : 'auto'}
  `;

  const Image = styled.Image`
    width: 65px;
    height: 65px;
    border-color: black;
    border-width: 1px;
    border-radius: 8px;
    border-color: ${theme.palette.texts.title};
  `;

  return (
    <Container onPress={() => onPressCard()}>
      <Texts variants='title'>{`${city.name} - ${city.country}`}</Texts>
      <Row>
        <Image
          style={{}}
          source={{
            uri: `http://openweathermap.org/img/wn/${city.weather.summary.icon}@2x.png`,
          }}
        />
        <Column
          style={{
            marginLeft: 16,
          }}
        >
          <Texts variants='bigRegular'>
            {`${city.weather.temperature.actual}°C`}
          </Texts>
          <Texts>{city.weather.summary.description}</Texts>
        </Column>
      </Row>
    </Container>
  );
};

export default WeatherCard;
