export type WeatherActions =
  | { type: 'ADD_CITY_ID'; payload: { id: string } }
  | { type: 'DELETE_CITY'; payload: { id: string } };

export type LoadingActions = {
  type: 'LOADING';
  payload: boolean;
};

export type ThemeActions = {
  type: 'CHANGE_THEME';
  payload: 'lightTheme' | 'darkTheme';
};

export type Actions = WeatherActions | LoadingActions | ThemeActions;
