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
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MonthSelect} from '../../components/MonthSelect/MonthSelect.tsx';
import {
  ChevronDown,
  ChevronUp,
  CircleArrowDown,
  CircleArrowUp,
} from 'lucide-react-native';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';

type Props = {
  user?: UserModel;
  refreshControl?: React.JSX.Element;
  transactions: TransactionsModel[];
  actionBtnCardTotalBalance: () => void;
  navigation?: any;
};

export default function Layout({
  user,
  transactions,
  refreshControl,
  actionBtnCardTotalBalance,
}: Props): React.JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [filterOpen, setFilterOpen] = useState(false);
  const width = useSharedValue(100);

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    width.value = withSpring(50);
  };

  const fadeOut = () => {
    width.value = withSpring(0);
  };

  const DATA = [
    {
      data: [<HeaderProfile name={user?.name || ''} />],
    },
    {
      data: [
        <View style={styles.session}>
          <TouchableOpacity
            style={styles.activeFilter}
            onPress={() => {
              if (filterOpen) {
                fadeOut();
                setFilterOpen(!filterOpen);
              } else {
                fadeIn();
                setFilterOpen(!filterOpen);
              }
            }}>
            <Text style={styles.activeFilterText}>Junho</Text>

            {filterOpen ? (
              <ChevronUp color={MStyles.colors.blackColor} />
            ) : (
              <ChevronDown color={MStyles.colors.blackColor} />
            )}
          </TouchableOpacity>
          <BalanceCard
            total={user?.resume.balance}
            action={actionBtnCardTotalBalance}
          />

          <Animated.View style={[styles.filterMonth, {height: width}]}>
            {filterOpen ? (
              <MonthSelect value={4} onChange={number => console.log(number)} />
            ) : (
              <></>
            )}
          </Animated.View>

          <ResumeCard
            revenue={user?.resume.revenue}
            expenditure={user?.resume.expenses}
          />
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
