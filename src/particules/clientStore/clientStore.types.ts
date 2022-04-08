import { Actions } from './actions';

export type ClientDispatch = {
  dispatch: (action: Actions) => void;
};

export type ClientStore = {
  citiesId: string[];
  isLoading: boolean;
  theme: 'lightTheme' | 'darkTheme';
};

export type TCity = {
  id: string;
  name: string;
  country: string;
  weather: {
    summary: {
      title: string;
      description: string;
      icon: string;
    };
    temperature: {
      actual: number;
      min: number;
      max: number;
    };
  };
};
