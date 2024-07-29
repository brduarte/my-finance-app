import {View, Text, FlatList} from 'react-native';
import {styles} from './styles';
import {TransactionsModel} from '../../services/core/models/TransactionsModel.ts';
import {TransactionTypeEnum} from '../../services/core/enums/TransactionTypeEnum.ts';
import {MStyles} from '../../views/style';
import React from 'react';
import {ArrowDown, ArrowUp} from 'lucide-react-native';
import {DateHelper} from '../../helpers/DateHelper.ts';
import {MoneyHelper} from '../../helpers/MoneyHelper.ts';

type TransactionsListProps = {
  transactions: TransactionsModel[];
};

const Item = (transaction: TransactionsModel): React.JSX.Element => {
  let valueStyle = {...styles.valueText, color: MStyles.colors.greenColor};
  let subText = 'Recebe em:';
  let value = MoneyHelper.intToReal(transaction.amount);

  let icon: React.JSX.Element = (
    <ArrowUp strokeWidth={2.5} size={24} color={MStyles.colors.blackColor} />
  );

  if (transaction.type === TransactionTypeEnum.DEBIT) {
    valueStyle = {...valueStyle, color: MStyles.colors.redColor};
    subText = 'Vence em:';
    icon = (
      <ArrowDown
        strokeWidth={2.5}
        size={24}
        color={MStyles.colors.blackColor}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconSession}>{icon}</View>
      <View style={styles.text}>
        <Text style={styles.itemTile}>{transaction.name}</Text>
        <Text>{`${subText} ${DateHelper.toBr(
          new Date(transaction.dueDate),
        )}`}</Text>
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
          name={item.account ? item.account.name : ''}
          amount={item.amount}
          dueDate={item.dueDate}
          id={item.id}
        />
      )}
      keyExtractor={(item, index) => (item.id ? item.id : index.toString())}
    />
  );
}
