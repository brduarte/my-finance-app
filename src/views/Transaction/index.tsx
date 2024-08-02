import {Layout} from './Layout.tsx';
import React, {useCallback, useEffect, useState} from 'react';
import {TransactionsModel} from '../../services/core/models/TransactionsModel.ts';
import {useFocusEffect} from '@react-navigation/native';
import {ITransactionService} from '../../services/core/interfaces/TransactionServiceInterface.ts';
import {TransactionService} from '../../services/core/services/TransactionService.ts';
import {useActiveIndicator} from '../../contexts/ActiveIndicatorContext.tsx';
import {DateHelper} from '../../helpers/DateHelper.ts';
import {ResumeModel} from '../../services/core/models/ResumeModel.ts';
import {IResumeService} from '../../services/core/interfaces/ResumeServiceInterface.ts';
import {ResumeService} from '../../services/core/services/ResumeService.ts';

export function Transaction(): React.JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);

  const [resume, setResume] = useState<ResumeModel>({
    balance: 0,
    revenue: 0,
    expenses: 0,
  });
  const [transactions, setTransactions] = useState<TransactionsModel[]>([]);
  const [filterMonth, setFilterMonth] = useState<number>(
    DateHelper.getCurrentMonthNumber() - 1,
  );

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      Promise.all([loadTransactions(), loadResume()]).finally(() => {
        setLoading(false);
      });
    }, [filterMonth]),
  );

  async function loadTransactions(): Promise<void> {
    const transactionService: ITransactionService = new TransactionService();
    setTransactions(await transactionService.getAll(30, filterMonth + 1));
  }

  async function loadResume(): Promise<void> {
    const resumeService: IResumeService = new ResumeService();
    setResume(await resumeService.getResume(filterMonth + 1));
  }

  async function onChangedMonthFilter(value: number) {
    setFilterMonth(value);
  }

  return (
    <Layout
      transactions={transactions}
      monthSelect={filterMonth}
      isLoading={loading}
      resume={resume}
      onChangedMonthFilter={onChangedMonthFilter}
    />
  );
}
