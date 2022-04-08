import { Texts } from 'atoms';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Center } from 'utils/layout/Layout';

interface ILoaderProps {
  size?: number;
}

const Loader: React.FC<ILoaderProps> = ({ size }) => {
  return (
    <Center>
      <ActivityIndicator size={size ?? 100} color={'blue'} />
      <Texts variants='title'>Cargando</Texts>
    </Center>
  );
};

export default Loader;
