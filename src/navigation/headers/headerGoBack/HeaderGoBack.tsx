import { Icon, Texts } from 'atoms';
import { useTheme } from 'hooks';
import { NavsProps } from 'navigation/stacks/root/rootParamList';
import React from 'react';
import { Pressable, View } from 'react-native';
import { Row } from 'utils/layout/Layout';
import HeaderGoBackStyle from './headerGoBack.styles';

interface IHeaderGoBackProps extends Omit<NavsProps<'Home'>, 'route'> {
  title?: string;
}

const HeaderGoBack: React.FC<IHeaderGoBackProps> = ({ navigation, title }) => {
  const styles = HeaderGoBackStyle();
  const theme = useTheme();

  return (
    <Row style={styles.containerCard}>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? theme.palette.primary : undefined,
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            opacity: pressed ? 0.5 : 1,
          },
        ]}
        onPress={() => navigation.goBack()}
      >
        <Icon name='arrow-left' />
      </Pressable>
      {title ? (
        <View style={[styles.containerText]}>
          <Texts variants='title'>{title}</Texts>
        </View>
      ) : null}
    </Row>
  );
};

export default HeaderGoBack;
