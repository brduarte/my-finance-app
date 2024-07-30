import React from 'react';
import {SafeAreaView} from '../../components/SafeAreaView/SafeAreaView.tsx';
import {ModalHeader} from '../../navigate/modal/ModalHeader.tsx';
import {styles} from './styles';
import {View} from 'react-native';

export function Layout(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ModalHeader title={'Lançamentos'} />
      </View>
    </SafeAreaView>
  );
}
