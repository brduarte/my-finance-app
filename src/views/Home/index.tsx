import React, {useCallback, useEffect, useState} from 'react';
import Layout from './Layout.tsx';
import {TransactionsModel} from '../../services/core/models/TransactionsModel.ts';
import {useBottomSheet} from '../../contexts/BottomSheetContext.tsx';
import {UserModel} from '../../services/core/models/UserModel.ts';
import {useAuthProfileContext} from '../../contexts/AuthProfileContext.tsx';
import {RefreshControl} from 'react-native';
import {ITransactionService} from '../../services/core/interfaces/TransactionServiceInterface.ts';
import {TransactionService} from '../../services/core/services/TransactionService.ts';

export default function Home(): React.JSX.Element {
  const [refreshing, setRefreshing] = React.useState(false);

  const [transactions, setTransactions] = useState<TransactionsModel[]>([]);
  const [user, setUser] = useState<UserModel>();
  const bottomSheet = useBottomSheet();
  const authSession = useAuthProfileContext();

  const onRefresh = useCallback(async () => {
    setRefreshing(true);

    await Promise.all([loadProfile(), loadTransactions()]);

    setRefreshing(false);
  }, []);

  useEffect(() => {
    Promise.all([loadTransactions(), loadProfile()]).finally(() => {});
  }, []);

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
