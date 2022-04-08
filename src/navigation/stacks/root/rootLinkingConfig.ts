import * as Linking from 'expo-linking';

const config = {
  screens: {
    Home: 'home',
    NotFound: '*',
    Orders: 'account/orders',
    CityDetail: 'detail',
  },
};

export const RootLinkingConfig = {
  prefixes: [Linking.makeUrl('/')],
  config,
};
