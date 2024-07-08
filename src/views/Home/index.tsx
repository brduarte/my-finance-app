import React, {useEffect, useState} from 'react';
import Layout from './Layout.tsx';
import {TransactionsModel} from '../../services/core/models/Transactions.ts';

export default function Home(): React.JSX.Element {
  const [transactions, setTransactions] = useState<TransactionsModel[]>([]);

  function redirectToWalletPage() {
    console.log('redirectToWalletPage');
  }

  function loadTransactions() {
    setTransactions([
      {
        id: '6f1a07fe-ae8c-4132-9bfb-5d84e4c5cfa9',
        name: 'Amber Cole',
        amount: 265.97,
        type: 'DEBIT',
      },
      {
        id: 'dba9b409-98d6-4d05-8361-a0515af752a6',
        name: 'Jamie Carter',
        amount: 680.31,
        type: 'CREDIT',
      },

      {
        id: 'fdcc1622-8182-4828-9dc1-a9472c1e85e9',
        name: 'Jason Robinson',
        amount: 303.81,
        type: 'DEBIT',
      },
    ]);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <Layout
      resume={{
        revenue: 13000,
        balance: 9000,
        expenditures: 4000,
      }}
      transactions={transactions}
      actionBtnCardTotalBalance={redirectToWalletPage}
    />
  );
}
