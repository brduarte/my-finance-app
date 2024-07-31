import {Layout} from './Layout.tsx';
import React, {useCallback, useState} from 'react';
import {TransactionsModel} from '../../services/core/models/TransactionsModel.ts';
import {useFocusEffect} from '@react-navigation/native';
import {ITransactionService} from '../../services/core/interfaces/TransactionServiceInterface.ts';
import {TransactionService} from '../../services/core/services/TransactionService.ts';
import {useActiveIndicator} from '../../contexts/ActiveIndicatorContext.tsx';

export function Transaction(): React.JSX.Element {
  const activeIndicator = useActiveIndicator();

  const [transactions, setTransactions] = useState<TransactionsModel[]>([]);

  useFocusEffect(
    useCallback(() => {
      activeIndicator.active();
      Promise.all([loadTransactions()]).finally(() => {
        activeIndicator.disabled();
      });
    }, []),
  );

  async function loadTransactions(): Promise<void> {
    const transactionService: ITransactionService = new TransactionService();
    setTransactions(await transactionService.getAll(30));
  }

  return <Layout transactions={transactions} />;
}
