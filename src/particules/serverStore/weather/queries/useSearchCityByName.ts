import { useQuery } from '@apollo/client';
import { TCity } from 'particules/clientStore/clientStore.types';
import { WEATHER_GET_NAME } from './weather.queries';

const useSearchCityByName = (name: string) => {
  return useQuery<{ getCityByName: TCity | null }>(WEATHER_GET_NAME, {
    variables: { name },
  });
};

export default useSearchCityByName;
