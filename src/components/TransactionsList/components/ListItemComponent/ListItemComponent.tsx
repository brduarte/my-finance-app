import React from 'react';

import {styleItemList} from '../../styles';
import {MStyles} from '../../../../views/style';
import {MoneyHelper} from '../../../../helpers/MoneyHelper.ts';
import {ArrowDown, ArrowUp} from 'lucide-react-native';
import {TransactionTypeEnum} from '../../../../services/core/enums/TransactionTypeEnum.ts';
import {TransactionsModel} from '../../../../services/core/models/TransactionsModel.ts';
import {Text, View} from 'react-native';
import {DateHelper} from '../../../../helpers/DateHelper.ts';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {LeftActions} from '../LeftActions/LeftActions.tsx';

type TransactionsListProps = {
  transaction: TransactionsModel;
};

export function ListItemComponent({
  transaction,
}: TransactionsListProps): React.JSX.Element {
  let valueStyle = {
    ...styleItemList.valueText,
    color: MStyles.colors.greenColor,
  };
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
    <Swipeable renderLeftActions={LeftActions}>
      <View style={styleItemList.container}>
        <View style={styleItemList.iconSession}>{icon}</View>
        <View style={styleItemList.text}>
          <Text style={styleItemList.itemTile}>
            {transaction.account ? transaction.account.name : 'Lançamento'}
          </Text>
          <Text>{`${subText} ${DateHelper.toBr(transaction.dueDate)}`}</Text>
        </View>
        <View style={styleItemList.value}>
          <Text style={valueStyle}>{value}</Text>
        </View>
      </View>
    </Swipeable>
  );
}
