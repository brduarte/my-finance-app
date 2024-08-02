import React, {PropsWithChildren, useEffect, useRef, useState} from 'react';
import {
  SectionList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BalanceCard from './components/BalanceCard/BalanceCard.tsx';
import {styles} from './styles';
import {HeaderProfile} from '../../components/HeaderProfile';
import {TransactionsList} from '../../components/TransactionsList/transactionsList.tsx';
import {TransactionsModel} from '../../services/core/models/TransactionsModel.ts';
import {ResumeCard} from './components/ResumeCard/ResumeCard.tsx';
import {UserModel} from '../../services/core/models/UserModel.ts';
import {MStyles} from '../style';
import {SafeAreaView} from '../../components/SafeAreaView/SafeAreaView.tsx';
import {MonthSelect} from '../../components/MonthSelect/MonthSelect.tsx';
import {ChevronDown, ChevronUp} from 'lucide-react-native';
import Animated, {SharedValue} from 'react-native-reanimated';
import {DateHelper} from '../../helpers/DateHelper.ts';
import {ResumeModel} from '../../services/core/models/ResumeModel.ts';

type Props = {
  user?: UserModel;
  refreshControl?: React.JSX.Element;
  transactions: TransactionsModel[];
  resume: ResumeModel;
  actionBtnCardTotalBalance: () => void;
  navigation?: any;
  isFilterMonthOpen: boolean;
  animatedFilterMonth: SharedValue<number>;
  openFilterMonth: () => void;
  selectMonth: (month: number) => void;
  monthSelected: number;
};

export default function Layout({
  user,
  transactions,
  refreshControl,
  actionBtnCardTotalBalance,
  isFilterMonthOpen,
  animatedFilterMonth,
  openFilterMonth,
  navigation,
  selectMonth,
  monthSelected,
  resume,
}: Props): React.JSX.Element {
  const DATA = [
    {
      data: [<HeaderProfile name={user?.name || ''} />],
    },
    {
      data: [
        <View style={styles.session}>
          <TouchableOpacity
            style={styles.activeFilter}
            onPress={openFilterMonth}>
            <Text style={styles.activeFilterText}>
              {DateHelper.getNameMonth(monthSelected)}
            </Text>

            {isFilterMonthOpen ? (
              <ChevronUp color={MStyles.colors.blackColor} />
            ) : (
              <ChevronDown color={MStyles.colors.blackColor} />
            )}
          </TouchableOpacity>
          <BalanceCard
            total={resume.balance}
            action={actionBtnCardTotalBalance}
          />

          <Animated.View
            style={[styles.filterMonth, {height: animatedFilterMonth}]}>
            {isFilterMonthOpen ? (
              <MonthSelect value={monthSelected} onChange={selectMonth} />
            ) : (
              <></>
            )}
          </Animated.View>

          <ResumeCard revenue={resume.revenue} expenditure={resume.expenses} />
        </View>,
      ],
    },
    {
      title: 'Transações',
      action: () => {
        navigation.navigate('Transaction');
      },
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
            renderSectionHeader={({section: {title, action}}) => {
              return title ? (
                <View style={styles.sessionTitle}>
                  <Text style={styles.sessionTitleText}>{title}</Text>

                  {action ? (
                    <TouchableOpacity onPress={action}>
                      <Text style={styles.sessionSessionTitleTag}>
                        Ver Mais
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <></>
                  )}
                </View>
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
