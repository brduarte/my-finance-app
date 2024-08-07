import {FlatList} from 'react-native';
import {TransactionsModel} from '../../services/core/models/TransactionsModel.ts';

import React, {useState} from 'react';

import {ListItemComponent} from './components/ListItemComponent/ListItemComponent.tsx';
import Swipeable from 'react-native-gesture-handler/Swipeable';

type TransactionsListProps = {
  transactions: TransactionsModel[];
  swipeableActionEnable?: boolean;
  onDeleteAction?: (transaction: TransactionsModel) => void;
};

export function TransactionsList({
  transactions,
  onDeleteAction,
  swipeableActionEnable,
}: TransactionsListProps): React.JSX.Element {
  const [currentSwipeableOpen, setCurrentSwipeableOpen] = useState<Swipeable>();

  function onSwipeableOpen(direction: 'left' | 'right', swipeable: Swipeable) {
    setCurrentSwipeableOpen(swipeable);
  }

  function onSwipeableClose(direction: 'left' | 'right', swipeable: Swipeable) {
    if (swipeable === currentSwipeableOpen) {
      setCurrentSwipeableOpen(undefined);
    }
  }

  function onSwipeableWillOpen(direction: 'left' | 'right') {
    if (currentSwipeableOpen) {
      currentSwipeableOpen.close();
    }
  }

  return (
    <FlatList
      data={transactions}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <ListItemComponent
          transaction={item}
          enabled={swipeableActionEnable}
          onSwipeableOpen={onSwipeableOpen}
          onSwipeableClose={onSwipeableClose}
          onSwipeableWillOpen={onSwipeableWillOpen}
          onDeleteAction={onDeleteAction}
        />
      )}
      keyExtractor={(item, index) => (item.id ? item.id : index.toString())}
    />
  );
}
