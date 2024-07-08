import {View, Text, FlatList} from 'react-native';
import {styles} from './styles';
import {TransactionsModel} from '../../services/core/models/Transactions.ts';
import {TransactionTypeEnum} from '../../services/core/enums/TransactionTypeEnum.ts';
import {MStyles} from '../../views/style';
import React from 'react';
import {ArrowDown, ArrowUp, ChevronDown, ChevronUp} from 'lucide-react-native';

type TransactionsListProps = {
  transactions: TransactionsModel[];
};

const Item = (transaction: TransactionsModel): React.JSX.Element => {
  let valueStyle = styles.valueText;
  let value = transaction.amount.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  let icon: React.JSX.Element = (
    <ArrowUp size={24} color={MStyles.colors.greenColor} />
  );

  if (transaction.type === TransactionTypeEnum.DEBIT) {
    valueStyle = {...valueStyle, color: MStyles.colors.redColor};
    value = `${value}`;
    icon = <ArrowDown size={24} color={MStyles.colors.redColor} />;
  } else {
    valueStyle = {...valueStyle, color: MStyles.colors.greenColor};
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconSession}>{icon}</View>
      <View style={styles.text}>
        <Text style={styles.itemTile}>{transaction.name}</Text>
        <Text>By Bruno</Text>
      </View>
      <View style={styles.value}>
        <Text style={valueStyle}>{value}</Text>
      </View>
    </View>
  );
};

export function TransactionsList({
  transactions,
}: TransactionsListProps): React.JSX.Element {
  return (
    <FlatList
      data={transactions}
      renderItem={({item}) => (
        <Item
          type={item.type}
          name={item.name}
          amount={item.amount}
          id={item.id}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
}
