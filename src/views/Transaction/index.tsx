import {Layout} from './Layout.tsx';
import React, {useCallback, useEffect, useState} from 'react';
import {TransactionsModel} from '../../services/core/models/TransactionsModel.ts';
import {useFocusEffect} from '@react-navigation/native';
import {ITransactionService} from '../../services/core/interfaces/TransactionServiceInterface.ts';
import {TransactionService} from '../../services/core/services/TransactionService.ts';
import {useActiveIndicator} from '../../contexts/ActiveIndicatorContext.tsx';
import {DateHelper} from '../../helpers/DateHelper.ts';

export function Transaction(): React.JSX.Element {
  const activeIndicator = useActiveIndicator();

  const [transactions, setTransactions] = useState<TransactionsModel[]>([]);
  const [filterMonth, setFilterMonth] = useState<number>(
    DateHelper.getCurrentMonthNumber() - 1,
  );

  useFocusEffect(
    useCallback(() => {
      activeIndicator.active();
      Promise.all([loadTransactions()]).finally(() => {
        activeIndicator.disabled();
      });
    }, []),
  );

  useEffect(() => {
    loadTransactions().then();
  }, [filterMonth]);

  async function loadTransactions(): Promise<void> {
    const transactionService: ITransactionService = new TransactionService();
    setTransactions(await transactionService.getAll(30, filterMonth));
  }

  async function onChangedMonthFilter(value: number) {
    setFilterMonth(value);
  }

  return (
    <Layout
      transactions={transactions}
      monthSelect={filterMonth}
      onChangedMonthFilter={onChangedMonthFilter}
    />
  );
}
