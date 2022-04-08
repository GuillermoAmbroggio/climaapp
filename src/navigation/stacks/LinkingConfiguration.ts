import * as Linking from 'expo-linking';

const config = {
  screens: {
    Root: {
      path: '/',
      screens: {
        Home: {
          path: 'home',
          screens: {
            Home: '',
          },
        },
        CityDetail: {
          path: 'deatil',
          screens: {
            CityDetail: '',
          },
        },
      },
    },
    NotFound: '*',
  },
};

export const LinkingConfiguration = {
  prefixes: [Linking.makeUrl('/')],
  config,
};
