import {FlatList} from 'react-native';
import {TransactionsModel} from '../../services/core/models/TransactionsModel.ts';

import React from 'react';

import {ListItemComponent} from './components/ListItemComponent/ListItemComponent.tsx';

type TransactionsListProps = {
  transactions: TransactionsModel[];
};

export function TransactionsList({
  transactions,
}: TransactionsListProps): React.JSX.Element {
  return (
    <FlatList
      data={transactions}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <ListItemComponent transaction={item} />}
      keyExtractor={(item, index) => (item.id ? item.id : index.toString())}
    />
  );
}
