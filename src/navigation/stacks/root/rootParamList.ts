import { RouteProp } from '@react-navigation/native';
import { TCity } from 'particules/clientStore/clientStore.types';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootParamList = {
  Home: undefined;
  CityDetail: { city: TCity };
  NotFound: undefined;
};

export type NavsProps<T extends keyof RootParamList> = NativeStackScreenProps<
  RootParamList,
  T
>;

export type RootNavProps<T extends keyof RootParamList> = {
  navigation: NativeStackScreenProps<RootParamList, T>;
  route: RouteProp<RootParamList, T>;
};
