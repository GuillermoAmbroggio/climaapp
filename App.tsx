import { StatusBar } from 'expo-status-bar';
import {
  Platform,
  StatusBar as RNStatusBar,
  SafeAreaView,
  ImageBackground,
  useColorScheme,
} from 'react-native';
import { ApolloProvider } from '@apollo/client';
import client from 'particules/serverStore/ApolloClient';
import { useCachedResources, useClientStore } from 'hooks';
import { Loader } from 'organisms';
import Navigation from 'navigation/Navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const { theme, isLoading } = useClientStore();

  const image = {
    uri:
      theme === 'lightTheme'
        ? 'https://www.wallpaperup.com/uploads/wallpapers/2015/11/15/836794/a8285a3466896bd74ea3ed2ab43ee04c.jpg'
        : 'https://s1.1zoom.me/b6742/381/Sky_Night_Moon_Clouds_542827_1920x1080.jpg',
  };

  if (!isLoadingComplete || isLoading) {
    return <Loader />;
  }
  return (
    <ApolloProvider client={client}>
      <SafeAreaView
        style={{
          paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
          flex: 1,
        }}
      >
        <ImageBackground source={image} style={{ flex: 1, width: '100%' }}>
          <StatusBar style='auto' />
          <Navigation colorScheme={colorScheme} />
        </ImageBackground>
      </SafeAreaView>
    </ApolloProvider>
  );
}
