import React from 'react';
import {SafeAreaView} from '../../components/SafeAreaView/SafeAreaView.tsx';
import {ModalHeader} from '../../navigate/modal/ModalHeader.tsx';
import {styles} from './styles';
import {View} from 'react-native';
import {TransactionsList} from '../../components/TransactionsList/transactionsList.tsx';
import {TransactionsModel} from '../../services/core/models/TransactionsModel.ts';

type LayoutProps = {
  transactions: TransactionsModel[];
};

export function Layout({transactions}: LayoutProps): React.JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ModalHeader title={'Lançamentos'} />
        <TransactionsList transactions={transactions} />
      </View>
    </SafeAreaView>
  );
}
