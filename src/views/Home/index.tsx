import React, {useCallback, useEffect, useState} from 'react';
import Layout from './Layout.tsx';
import {TransactionsModel} from '../../services/core/models/TransactionsModel.ts';
import {useBottomSheet} from '../../contexts/BottomSheetContext.tsx';
import {UserModel} from '../../services/core/models/UserModel.ts';
import {useAuthProfileContext} from '../../contexts/AuthProfileContext.tsx';
import {RefreshControl} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ITransactionService} from '../../services/core/interfaces/TransactionServiceInterface.ts';
import {TransactionService} from '../../services/core/services/TransactionService.ts';
import {log} from 'react-native-reanimated-carousel/lib/typescript/utils/log';

export default function Home(): React.JSX.Element {
  const [refreshing, setRefreshing] = React.useState(false);
  const navigation = useNavigation();

  const [transactions, setTransactions] = useState<TransactionsModel[]>([]);
  const [user, setUser] = useState<UserModel>();
  const bottomSheet = useBottomSheet();
  const authSession = useAuthProfileContext();

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    Promise.all([loadTransactions(), loadProfile()]).finally(() => {
      setRefreshing(false);
    });
  }, [loadProfile]);

  useEffect(() => {
    Promise.all([loadTransactions(), loadProfile()]).finally(() => {});
  }, [authSession, loadProfile, navigation]);

  function redirectToWalletPage() {
    bottomSheet.open();
  }

  async function loadTransactions() {
    const transactionService: ITransactionService = new TransactionService();
    const transactions = await transactionService.getAll();

    setTransactions(transactions);
  }

  async function loadProfile() {
    const response = await authSession.getProfile();
    setUser(response);
  }

  return (
    <Layout
      user={user}
      transactions={transactions}
      actionBtnCardTotalBalance={redirectToWalletPage}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
}
