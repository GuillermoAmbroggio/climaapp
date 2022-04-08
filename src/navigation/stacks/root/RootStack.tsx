import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ColorSchemeName } from 'react-native';
import { RootLinkingConfig } from './rootLinkingConfig';
import { RootParamList } from './rootParamList';
import { Home, CityDetail, NotFound } from 'screens';
import HeaderGoBack from 'navigation/headers/headerGoBack/HeaderGoBack';

const Stack = createNativeStackNavigator<RootParamList>();

interface IRootStackProps {
  colorScheme: ColorSchemeName;
}

const navThemeDef = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const navThemeDark = {
  ...DarkTheme,
  colors: { ...DarkTheme.colors, background: 'transparent' },
};

const RootStack = ({ colorScheme }: IRootStackProps): JSX.Element => {
  return (
    <NavigationContainer
      linking={RootLinkingConfig}
      theme={colorScheme === 'dark' ? navThemeDark : navThemeDef}
    >
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}
      >
        {/* -----------Screen principales----------- */}
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'App del clima' }}
        />
        <Stack.Screen
          name='CityDetail'
          component={CityDetail}
          options={({ navigation }) => ({
            header: () => (
              <HeaderGoBack navigation={navigation} title='Detalle de ciudad' />
            ),
            headerShown: true,
            title: 'Detalle - App del clima',
          })}
        />

        <Stack.Screen
          name='NotFound'
          component={NotFound}
          options={{ title: 'Oops!' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
