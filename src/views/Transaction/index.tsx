import {Layout} from './Layout.tsx';
import React, {useCallback, useState} from 'react';
import {TransactionsModel} from '../../services/core/models/TransactionsModel.ts';
import {useFocusEffect} from '@react-navigation/native';
import {ITransactionService} from '../../services/core/interfaces/TransactionServiceInterface.ts';
import {TransactionService} from '../../services/core/services/TransactionService.ts';
import {DateHelper} from '../../helpers/DateHelper.ts';
import {ResumeModel} from '../../services/core/models/ResumeModel.ts';
import {IResumeService} from '../../services/core/interfaces/ResumeServiceInterface.ts';
import {ResumeService} from '../../services/core/services/ResumeService.ts';
import {useBottomSheet} from '../../contexts/BottomSheetContext.tsx';
import {AlertDelete} from './components/AlertDelete/AlertDelete.tsx';
import {IAccountService} from '../../services/core/interfaces/AccountServiceInterface.ts';
import {AccountService} from '../../services/core/services/AccountService.ts';

export function Transaction(): React.JSX.Element {
  const transactionService: ITransactionService = new TransactionService();
  const accountService: IAccountService = new AccountService();

  const [loading, setLoading] = useState<boolean>(false);
  const bottomSheet = useBottomSheet();

  const [resume, setResume] = useState<ResumeModel>({
    balance: 0,
    revenue: 0,
    expenses: 0,
  });

  const [transactions, setTransactions] = useState<TransactionsModel[]>([]);
  const [filterMonth, setFilterMonth] = useState<number>(
    DateHelper.getCurrentMonthNumber() - 1,
  );

  async function loadTransactions(): Promise<void> {
    setTransactions(await transactionService.getAll(30, filterMonth + 1));
  }

  async function loadResume(): Promise<void> {
    const resumeService: IResumeService = new ResumeService();
    setResume(await resumeService.getResume(filterMonth + 1));
  }

  async function onChangedMonthFilter(value: number) {
    setFilterMonth(value);
  }

  async function onDeleteAction(transaction: TransactionsModel) {
    async function onDeleteAccount() {
      try {
        if (transaction.account && transaction.account.id) {
          await accountService.delete(transaction.account.id);
        }
        setTransactions(transactions.filter(t => t.id !== transaction.id));
      } finally {
        bottomSheet.close();
      }
    }

    async function onDeleteTransaction() {
      try {
        if (transaction.id) {
          await transactionService.delete(transaction.id);
        }

        setTransactions(transactions.filter(t => t.id !== transaction.id));
      } finally {
        bottomSheet.close();
      }
    }

    function onCancelAction() {
      bottomSheet.close();
    }

    if (transaction.account && transaction.account.installments === 1) {
      bottomSheet.setChildren(
        <AlertDelete
          transaction={transaction}
          onDeleteAll={onDeleteAccount}
          onDeleteOnly={onDeleteTransaction}
          onCancel={onCancelAction}
        />,
      );

      bottomSheet.open();
    }
  }

  const loadCallback = useCallback(() => {
    setLoading(true);
    Promise.all([loadTransactions(), loadResume()]).finally(() => {
      setLoading(false);
    });
  }, [filterMonth]);

  useFocusEffect(loadCallback);

  return (
    <Layout
      transactions={transactions}
      monthSelect={filterMonth}
      isLoading={loading}
      resume={resume}
      onChangedMonthFilter={onChangedMonthFilter}
      onDeleteAction={onDeleteAction}
    />
  );
}
