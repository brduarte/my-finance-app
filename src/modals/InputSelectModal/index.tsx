import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

type InputSelectModal = {
  route: any;
};

export default function InputSelectModal({
  route,
}: InputSelectModal): React.JSX.Element {
  return <View style={styles.container}>{route.params.component}</View>;
}
