import AsyncStorage from '@react-native-async-storage/async-storage';
import { Actions } from './actions';
import { initialCitiesId } from './clientStore';
import { ClientStore } from './clientStore.types';

const reducer = (draft: ClientStore, action: Actions): void => {
  switch (action.type) {
    case 'ADD_CITY_ID': {
      const id = action.payload.id;
      /** Primero reviso que no este entre el array inicial de ciudades. (Si esta, no hago nada) */
      if (!draft.citiesId.includes(id)) {
        /** Agrego la ciudad al clientState y la guardo en el storage del usuario  */
        draft.citiesId.unshift(id);
        /** Antes de guardarla reviso por las dudas que no exista la id en el storage. */
        AsyncStorage.getItem('citiesFav').then((citiesFav) => {
          if (citiesFav) {
            const cities: string[] = JSON.parse(citiesFav);
            if (!cities.includes(id)) {
              /** si no esta, la agrego al comienzo del array.*/
              cities.unshift(id);
              void AsyncStorage.setItem('citiesFav', JSON.stringify(cities));
            }
          } else {
            void AsyncStorage.setItem('citiesFav', JSON.stringify([id]));
          }
        });
      }
      break;
    }

    case 'DELETE_CITY': {
      const { id } = action.payload;
      /** Si la ciudad no es una de las iniciales y esta agregada en el clientState, la elimino*/
      if (!initialCitiesId.includes(id) && draft.citiesId.includes(id)) {
        AsyncStorage.getItem('citiesFav').then((citiesFav) => {
          if (citiesFav) {
            const cities: string[] = JSON.parse(citiesFav);
            if (cities.includes(id)) {
              /** si no esta, la agrego al comienzo del array.*/
              const newsFavs = cities.filter((cityId) => cityId !== id);
              void AsyncStorage.setItem('citiesFav', JSON.stringify(newsFavs));
            }
          }
        });
        const newStateFavs = draft.citiesId.filter((cityId) => cityId !== id);
        draft.citiesId = newStateFavs;
      }
      break;
    }

    case 'CHANGE_THEME': {
      const theme = action.payload;
      if (theme === 'darkTheme') {
        void AsyncStorage.setItem('theme', theme);
      } else {
        void AsyncStorage.removeItem('theme');
      }
      draft.theme = theme;
      break;
    }

    case 'LOADING': {
      draft.isLoading = action.payload;
      break;
    }
    default:
      throw new Error('Invalid action type');
  }
};

export default reducer;
