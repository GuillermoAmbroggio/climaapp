import { useQuery } from '@apollo/client';
import { TCity } from 'particules/clientStore/clientStore.types';
import { WEATHER_GET_ID } from './weather.queries';

const useSearchCityById = (id: string) => {
  return useQuery<{ getCityById: TCity[] }>(WEATHER_GET_ID, {
    variables: { id },
  });
};

export default useSearchCityById;
