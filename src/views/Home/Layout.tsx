import React from 'react';
import {SectionList, Text, View} from 'react-native';
import BalanceCard from './components/BalanceCard/BalanceCard.tsx';
import {styles} from './styles';
import {HeaderProfile} from '../../components/HeaderProfile';
import {TransactionsList} from '../../components/TransactionsList/transactionsList.tsx';
import {TransactionsModel} from '../../services/core/models/Transactions.ts';
import {ResumeCard} from './components/ResumeCard/ResumeCard.tsx';

type Props = {
  resume: {
    balance: number;
    revenue: number;
    expenditures: number;
  };
  transactions: TransactionsModel[];
  actionBtnCardTotalBalance: () => void;
};

export default function Layout({
  resume,
  transactions,
  actionBtnCardTotalBalance,
}: Props): React.JSX.Element {
  const DATA = [
    {
      data: [<HeaderProfile name={'Bruno Duarte'} />],
    },
    {
      data: [
        <BalanceCard
          total={resume.balance}
          action={actionBtnCardTotalBalance}
        />,
        <ResumeCard
          revenue={resume.revenue}
          expenditure={resume.expenditures}
        />,
      ],
    },
    {
      title: 'Transações',
      data: [<TransactionsList transactions={transactions} />],
    },
    {
      title: 'Transações',
      data: [<TransactionsList transactions={transactions} />],
    },
    {
      title: 'Transações',
      data: [<TransactionsList transactions={transactions} />],
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
