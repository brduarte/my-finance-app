import React, {useCallback, useEffect, useState} from 'react';
import Layout from './Layout.tsx';
import {TransactionsModel} from '../../services/core/models/TransactionsModel.ts';
import {useBottomSheet} from '../../contexts/BottomSheetContext.tsx';
import {UserModel} from '../../services/core/models/UserModel.ts';
import {useAuthProfileContext} from '../../contexts/AuthProfileContext.tsx';
import {RefreshControl} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TransactionTypeEnum} from '../../services/core/enums/TransactionTypeEnum.ts';

export default function Home(): React.JSX.Element {
  const [refreshing, setRefreshing] = React.useState(false);
  const navigation = useNavigation();

  const [transactions, setTransactions] = useState<TransactionsModel[]>([]);
  const [user, setUser] = useState<UserModel>();
  const bottomSheet = useBottomSheet();
  const authSession = useAuthProfileContext();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    authSession
      .getProfile()
      .then(response => setUser(response))
      .finally(() => {
        setRefreshing(false);
      });
  }, [authSession]);

  useEffect(() => {
    authSession.getProfile().then(response => setUser(response));
    loadTransactions();
  }, [navigation]);

  function redirectToWalletPage() {
    bottomSheet.open();
  }

  function loadTransactions() {
    setTransactions([
      {
        id: '6f1a07fe-ae8c-4132-9bfb-5d84e4c5cfa9',
        name: 'Amber Cole',
        amount: 265.97,
        dueDate: '2020-07-01',
        type: 'DEBIT' as TransactionTypeEnum,
      },
      {
        id: 'dba9b409-98d6-4d05-8361-a0515af752a6',
        name: 'Jamie Carter',
        amount: 680.31,
        dueDate: '2020-07-01',
        type: 'CREDIT' as TransactionTypeEnum,
      },
      {
        id: 'fdcc1622-8182-4828-9dc1-a9472c1e85e9',
        name: 'Jason Robinson',
        amount: 303.81,
        dueDate: '2020-07-01',
        type: 'DEBIT' as TransactionTypeEnum,
      },
    ]);
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
