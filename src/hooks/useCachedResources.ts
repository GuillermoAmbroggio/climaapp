import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import fonts from 'assets/fonts/fonts';
import useClientStore from './useClientStore';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useCachedResources(): boolean {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const unmounted = React.useRef(false);

  const { dispatch } = useClientStore();
  React.useEffect(() => {
    async function loadResourcesAndDataAsync(): Promise<void> {
      try {
        void SplashScreen.preventAutoHideAsync();

        // Cargo las fuentes
        await Font.loadAsync({
          ...Ionicons.font,
          ...fonts,
        });
        //reviso si esta seleccionado el darktheme
        const theme = await AsyncStorage.getItem('theme');
        if (theme && theme === 'darkTheme') {
          dispatch({ type: 'CHANGE_THEME', payload: theme });
        }

        //reviso si tengo guardado en el storage alguna ciudad:
        const citiesFav = await AsyncStorage.getItem('citiesFav');
        if (citiesFav) {
          const cities: string[] = JSON.parse(citiesFav);
          cities.forEach((cityId) => {
            // Guardo el id en el clientState (en el reducer verifica si ya existe, no lo agrega)
            dispatch({ type: 'ADD_CITY_ID', payload: { id: cityId } });
          });
        }
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        void SplashScreen.hideAsync();
      }
    }
    if (!unmounted.current) {
      void loadResourcesAndDataAsync();
    }

    return () => {
      unmounted.current = true;
    };
  });

  return isLoadingComplete;
}
