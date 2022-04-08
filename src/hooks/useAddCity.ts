import { useClientStore } from 'hooks';
import { useSearchCityById } from 'particules/serverStore/weather/queries';

const useAddCity = (id: string) => {
  const { dispatch, citiesId } = useClientStore();

  dispatch({ type: 'LOADING', payload: true });
  if (!citiesId.includes(id)) {
    const { data } = useSearchCityById(id);
    if (data) {
      // dispatch({ type: 'ADD_CITY', payload: data.getCityById. });
      // dispatch({ type: 'ADD_CITY_ID', payload: { id: data.city.id } });
    }
  }
  dispatch({ type: 'LOADING', payload: false });
};

export default useAddCity;
