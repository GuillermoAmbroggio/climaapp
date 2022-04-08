import { Texts } from 'atoms';
import WeatherCard from 'molecule/weatherCard/WeatherCard';
import { NavsProps } from 'navigation/stacks/root/rootParamList';
import { useSearchCityById } from 'particules/serverStore/weather/queries';
import React from 'react';

interface ISearchByIdProps extends Omit<NavsProps<'Home'>, 'route'> {
  id: string;
}

const SearchById: React.FC<ISearchByIdProps> = ({ id, navigation }) => {
  const { data } = useSearchCityById(id);
  const city = data?.getCityById[0];
  if (!city) {
    return <Texts>No existen datos para {id}</Texts>;
  }
  return (
    <WeatherCard
      city={city}
      onPressCard={() => navigation.navigate('CityDetail', { city })}
    />
  );
};

export default SearchById;
