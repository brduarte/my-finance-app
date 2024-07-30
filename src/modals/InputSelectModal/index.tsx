import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {ModalHeader} from '../../navigate/modal/ModalHeader.tsx';

type InputSelectModal = {
  route: any;
};

export default function InputSelectModal({
  route,
}: InputSelectModal): React.JSX.Element {
  return (
    <View style={styles.container}>
      <ModalHeader title={route.params.title} icon={'exit'} />
      {route.params.component ? route.params.component : <></>}
    </View>
  );
}
