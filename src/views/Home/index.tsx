import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Layout from './Layout.tsx';
import {TransactionsModel} from '../../services/core/models/TransactionsModel.ts';
import {useBottomSheet} from '../../contexts/BottomSheetContext.tsx';
import {UserModel} from '../../services/core/models/UserModel.ts';
import {useAuthProfileContext} from '../../contexts/AuthProfileContext.tsx';
import {RefreshControl} from 'react-native';
import {ITransactionService} from '../../services/core/interfaces/TransactionServiceInterface.ts';
import {TransactionService} from '../../services/core/services/TransactionService.ts';
import {
  ParamListBase,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {DateHelper} from '../../helpers/DateHelper.ts';
import {useSharedValue, withSpring} from 'react-native-reanimated';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function Home(): React.JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [refreshing, setRefreshing] = React.useState(false);
  const heightFilterMonth = useSharedValue(100);
  const [isFilterMonthOpen, setFilterMonthOpen] = useState(false);

  const [transactions, setTransactions] = useState<TransactionsModel[]>([]);
  const [user, setUser] = useState<UserModel>();
  const bottomSheet = useBottomSheet();
  const authSession = useAuthProfileContext();

  function redirectToWalletPage() {
    bottomSheet.open();
  }

  function openOrCloseFilterMonth() {
    console.log(isFilterMonthOpen);

    setFilterMonthOpen(!isFilterMonthOpen);
  }

  const fadeInFilterMonth = () => {
    heightFilterMonth.value = withSpring(50);
  };

  const fadeOutFilterMonth = () => {
    heightFilterMonth.value = withSpring(0);
  };

  async function loadTransactions() {
    const transactionService: ITransactionService = new TransactionService();
    const transactions: TransactionsModel[] = await transactionService.getAll(
      3,
      DateHelper.getCurrentMonthNumber(),
    );

    setTransactions(transactions);
  }

  async function loadProfile() {
    const response = await authSession.getProfile();
    setUser(response);
  }

  useMemo(() => {
    if (isFilterMonthOpen) {
      fadeInFilterMonth();
    } else {
      fadeOutFilterMonth();
    }
  }, [isFilterMonthOpen]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await Promise.all([loadProfile(), loadTransactions()]);
    setRefreshing(false);
  }, []);

  useFocusEffect(
    useCallback(() => {
      Promise.all([loadTransactions(), loadProfile()]).finally(() => {});
    }, []),
  );

  return (
    <Layout
      user={user}
      transactions={transactions}
      actionBtnCardTotalBalance={redirectToWalletPage}
      openFilterMonth={openOrCloseFilterMonth}
      isFilterMonthOpen={isFilterMonthOpen}
      animatedFilterMonth={heightFilterMonth}
      navigation={navigation}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
}
