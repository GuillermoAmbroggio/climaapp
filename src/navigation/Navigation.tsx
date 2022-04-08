import React from 'react';
import { ColorSchemeName } from 'react-native';
import RootStack from './stacks/root/RootStack';

interface INavigationProps {
  colorScheme: ColorSchemeName;
}

const Navigation = ({ colorScheme }: INavigationProps): JSX.Element => {
  return <RootStack colorScheme={colorScheme} />;
};

export default Navigation;
