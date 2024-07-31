import React from 'react';
import {SafeAreaView} from '../../components/SafeAreaView/SafeAreaView.tsx';
import {ModalHeader} from '../../navigate/modal/ModalHeader.tsx';
import {styles} from './styles';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {TransactionsList} from '../../components/TransactionsList/transactionsList.tsx';
import {TransactionsModel} from '../../services/core/models/TransactionsModel.ts';
import {MonthSelect} from '../../components/MonthSelect/MonthSelect.tsx';
import {ResumeCard} from '../Home/components/ResumeCard/ResumeCard.tsx';

type LayoutProps = {
  transactions: TransactionsModel[];
};

export function Layout({transactions}: LayoutProps): React.JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ModalHeader title={'Lançamentos'} />

        <TransactionsList transactions={transactions} />

        <ResumeCard expenditure={1000} revenue={2000} />

        <View style={styles.filterContainer}>
          <MonthSelect />
        </View>
      </View>
    </SafeAreaView>
  );
}
