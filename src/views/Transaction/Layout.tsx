import React from 'react';
import {SafeAreaView} from '../../components/SafeAreaView/SafeAreaView.tsx';
import {ModalHeader} from '../../navigate/modal/ModalHeader.tsx';
import {styles} from './styles';
import {Text, View} from 'react-native';
import {TransactionsList} from '../../components/TransactionsList/transactionsList.tsx';
import {TransactionsModel} from '../../services/core/models/TransactionsModel.ts';
import {MonthSelect} from '../../components/MonthSelect/MonthSelect.tsx';
import {ResumeCard} from '../Home/components/ResumeCard/ResumeCard.tsx';
import {horizontalScale} from '../../helpers/MetricsHelper.ts';
import {ActivityIndicator} from '../../components/ActivityIndicator/ActivityIndicator.tsx';
import {ResumeModel} from '../../services/core/models/ResumeModel.ts';
import {EmptyState} from '../../components/EmptyState/EmptyState.tsx';

type LayoutProps = {
  transactions: TransactionsModel[];
  monthSelect: number;
  onChangedMonthFilter: (value: number) => void;
  isLoading: boolean;
  resume: ResumeModel;
  onDeleteTransaction?: (transaction: TransactionsModel) => void;
};

export function Layout({
  transactions,
  monthSelect,
  onChangedMonthFilter,
  isLoading,
  resume,
  onDeleteTransaction,
}: LayoutProps): React.JSX.Element {
  return (
    <SafeAreaView>
      <>
        <View style={styles.container}>
          <View style={styles.sessionTitle}>
            <ModalHeader title={'Lançamentos'} />
          </View>

          {isLoading ? (
            <ActivityIndicator />
          ) : !transactions.length ? (
            <EmptyState>
              <Text style={styles.textEmpty}>
                <Text style={{fontWeight: 'bold'}}>nenhum</Text> lançamento
                encontrado
              </Text>
              <Text style={styles.subTextEmpty}>
                cadastre lançamentos para visualizar as transações filtradas
              </Text>
            </EmptyState>
          ) : (
            <TransactionsList
              transactions={transactions}
              onDeleteAction={onDeleteTransaction}
            />
          )}
        </View>

        <View style={styles.filterContainer}>
          <View style={{marginBottom: horizontalScale(10)}}>
            <ResumeCard
              expenditure={resume.expenses}
              revenue={resume.revenue}
            />
          </View>

          <MonthSelect value={monthSelect} onChange={onChangedMonthFilter} />
        </View>
      </>
    </SafeAreaView>
  );
}
