import React from 'react';
import {SafeAreaView} from '../../components/SafeAreaView/SafeAreaView.tsx';
import {ModalHeader} from '../../navigate/modal/ModalHeader.tsx';
import {styles} from './styles';
import {View} from 'react-native';
import {TransactionsList} from '../../components/TransactionsList/transactionsList.tsx';
import {TransactionsModel} from '../../services/core/models/TransactionsModel.ts';
import {MonthSelect} from '../../components/MonthSelect/MonthSelect.tsx';
import {ResumeCard} from '../Home/components/ResumeCard/ResumeCard.tsx';
import {horizontalScale} from '../../helpers/MetricsHelper.ts';
import {ActivityIndicator} from '../../components/ActivityIndicator/ActivityIndicator.tsx';
import {ResumeModel} from '../../services/core/models/ResumeModel.ts';

type LayoutProps = {
  transactions: TransactionsModel[];
  monthSelect: number;
  onChangedMonthFilter: (value: number) => void;
  isLoading: boolean;
  resume: ResumeModel;
};

export function Layout({
  transactions,
  monthSelect,
  onChangedMonthFilter,
  isLoading,
  resume,
}: LayoutProps): React.JSX.Element {
  return (
    <SafeAreaView>
      <>
        <View style={styles.container}>
          <ModalHeader title={'Lançamentos'} />
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <TransactionsList transactions={transactions} />
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
