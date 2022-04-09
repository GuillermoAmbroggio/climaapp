import React from 'react';
import SkeletonContent from 'react-native-skeleton-content';
import { useWindowDimensions, View } from 'react-native';

const WeatherCardLoader: React.FC = () => {
  const windowWidth = useWindowDimensions().width;
  const isBig = windowWidth > 1000;
  return (
    <View>
      <SkeletonContent
        containerStyle={{ flex: 1, width: 300 }}
        animationDirection='horizontalLeft'
        layout={[{ width: isBig ? 400 : windowWidth - 32, height: 140 }]}
        isLoading={true}
      />
    </View>
  );
};

export default WeatherCardLoader;
