import React from 'react';
import {SafeAreaView} from '../../components/SafeAreaView/SafeAreaView.tsx';
import {ModalHeader} from '../../navigate/modal/ModalHeader.tsx';

export function Layout(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ModalHeader title={'Lançamentos'} />
    </SafeAreaView>
  );
}
