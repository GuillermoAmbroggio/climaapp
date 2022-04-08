import { ClientStore } from './clientStore.types';

export const initialCitiesId = [
  '3435910',
  '2988507',
  '292223',
  '2147714',
  '1850144',
  '1261481',
  '3451190',
  '2643743',
];

export const initialClientStore: ClientStore = {
  citiesId: initialCitiesId,
  isLoading: false,
  theme: 'lightTheme',
};
