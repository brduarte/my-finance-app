import React from 'react';
import {SectionList, StatusBar, Text, View} from 'react-native';
import BalanceCard from './components/BalanceCard/BalanceCard.tsx';
import {styles} from './styles';
import {HeaderProfile} from '../../components/HeaderProfile';
import {TransactionsList} from '../../components/TransactionsList/transactionsList.tsx';
import {TransactionsModel} from '../../services/core/models/TransactionsModel.ts';
import {ResumeCard} from './components/ResumeCard/ResumeCard.tsx';
import {UserModel} from '../../services/core/models/UserModel.ts';
import {MoneyHelper} from '../../helpers/MoneyHelper.ts';
import {MStyles} from '../style';

type Props = {
  user?: UserModel;
  refreshControl?: React.JSX.Element;
  transactions: TransactionsModel[];
  actionBtnCardTotalBalance: () => void;
};

export default function Layout({
  user,
  transactions,
  refreshControl,
  actionBtnCardTotalBalance,
}: Props): React.JSX.Element {
  const DATA = [
    {
      data: [<HeaderProfile name={user?.name || ''} />],
    },
    {
      data: [
        <View style={styles.session}>
          <BalanceCard
            total={MoneyHelper.intToDecimal(user?.resume.balance)}
            action={actionBtnCardTotalBalance}
          />
          <ResumeCard
            revenue={MoneyHelper.intToDecimal(user?.resume.revenue)}
            expenditure={MoneyHelper.intToDecimal(user?.resume.expenses)}
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
    <>
      <StatusBar
        backgroundColor={MStyles.colors.whiteColor}
        barStyle={'dark-content'}
      />
      <View style={styles.container}>
        <SectionList
          refreshing={true}
          refreshControl={refreshControl}
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
    </>
  );
}
