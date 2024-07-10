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
        <View style={styles.session}>
          <BalanceCard
            total={resume.balance}
            action={actionBtnCardTotalBalance}
          />
          <ResumeCard
            revenue={resume.revenue}
            expenditure={resume.expenditures}
          />
        </View>,
      ],
    },
    {
      title: 'Transações',
      data: [
        <View style={styles.session}>
          <TransactionsList transactions={transactions} />
        </View>,
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => index + index.toString()}
        renderItem={({item}) => <>{item}</>}
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
