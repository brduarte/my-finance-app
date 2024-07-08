import React from 'react';
import {View} from 'react-native';
import BalanceCard from './components/BalanceCard/BalanceCard.tsx';
import {styles} from './styles';
import {HeaderProfile} from '../../components/HeaderProfile';
import {TransactionsList} from '../../components/TransactionsList/transactionsList.tsx';
import {TransactionsModel} from '../../services/core/models/Transactions.ts';

type Props = {
  totalBalance: number;
  transactions: TransactionsModel[];
  actionBtnCardTotalBalance: () => void;
};

export default function Layout(props: Props): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.session}>
        <HeaderProfile name={'Bruno Duarte'} />
      </View>
      <View style={styles.session}>
        <BalanceCard
          total={props.totalBalance}
          action={props.actionBtnCardTotalBalance}
        />
      </View>
      <View style={styles.session}>
        <TransactionsList transactions={props.transactions} />
      </View>
    </View>
  );
}
