import React from 'react';
import {SectionList, Text, View, VirtualizedList} from 'react-native';
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
  const DATA = [
    {
      data: [<HeaderProfile name={'Bruno Duarte'} />],
    },
    {
      data: [
        <BalanceCard
          total={props.totalBalance}
          action={props.actionBtnCardTotalBalance}
        />,
      ],
    },
    {
      title: 'Transações',
      data: [<TransactionsList transactions={props.transactions} />],
    },
    {
      title: 'Transações',
      data: [<TransactionsList transactions={props.transactions} />],
    },
    {
      title: 'Transações',
      data: [<TransactionsList transactions={props.transactions} />],
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.session} />

      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => index + index.toString()}
        renderItem={({item}) => <View style={styles.session}>{item}</View>}
        renderSectionHeader={({section: {title}}) => {
          return title ? (
            <Text style={styles.sessionTitle}>{title}</Text>
          ) : (
            <></>
          );
        }}
      />
    </View>
  );
}
