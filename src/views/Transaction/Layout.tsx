import React from 'react';
import {SafeAreaView} from '../../components/SafeAreaView/SafeAreaView.tsx';
import {ModalHeader} from '../../navigate/modal/ModalHeader.tsx';
import {styles} from './styles';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {TransactionsList} from '../../components/TransactionsList/transactionsList.tsx';
import {TransactionsModel} from '../../services/core/models/TransactionsModel.ts';
import {MStyles} from '../style';
import {moderateScale} from '../../helpers/MetricsHelper.ts';
import {MonthSelect} from '../../components/MonthSelect/MonthSelect.tsx';

type LayoutProps = {
  transactions: TransactionsModel[];
};

export function Layout({transactions}: LayoutProps): React.JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ModalHeader title={'Lançamentos'} />
        <View style={styles.filterContainer}>
          <MonthSelect />
        </View>
        <TransactionsList transactions={transactions} />
      </View>
    </SafeAreaView>
  );
}
