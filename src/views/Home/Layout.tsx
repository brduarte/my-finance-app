import React from 'react';
import {SectionList, StatusBar, Text, View} from 'react-native';
import BalanceCard from './components/BalanceCard/BalanceCard.tsx';
import {styles} from './styles';
import {HeaderProfile} from '../../components/HeaderProfile';
import {TransactionsList} from '../../components/TransactionsList/transactionsList.tsx';
import {TransactionsModel} from '../../services/core/models/TransactionsModel.ts';
import {ResumeCard} from './components/ResumeCard/ResumeCard.tsx';
import {UserModel} from '../../services/core/models/UserModel.ts';
import {MStyles} from '../style';
import {SafeAreaView} from '../../components/SafeAreaView/SafeAreaView.tsx';

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
            total={user?.resume.balance}
            action={actionBtnCardTotalBalance}
          />
          <ResumeCard
            revenue={user?.resume.revenue}
            expenditure={user?.resume.expenses}
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
      <SafeAreaView>
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
      </SafeAreaView>
    </>
  );
}
