import React, {RefObject, useEffect, useRef, useState} from 'react';

import {styleItemList} from '../../styles';
import {MStyles} from '../../../../views/style';
import {MoneyHelper} from '../../../../helpers/MoneyHelper.ts';
import {ArrowDown, ArrowUp} from 'lucide-react-native';
import {TransactionTypeEnum} from '../../../../services/core/enums/TransactionTypeEnum.ts';
import {TransactionsModel} from '../../../../services/core/models/TransactionsModel.ts';
import {Animated as AnimatedNative, Text, View} from 'react-native';
import {DateHelper} from '../../../../helpers/DateHelper.ts';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {LeftActions} from '../LeftActions/LeftActions.tsx';
import {useSharedValue, withTiming} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

type AnimatedInterpolation = ReturnType<AnimatedNative.Value['interpolate']>;

type TransactionsListProps = {
  transaction: TransactionsModel;
  onSwipeableWillOpen?: (direction: 'left' | 'right') => void;
  onSwipeableOpen?: (direction: 'left' | 'right', swipeable: Swipeable) => void;
  onSwipeableClose?: (
    direction: 'left' | 'right',
    swipeable: Swipeable,
  ) => void;
};

export function ListItemComponent({
  transaction,
  onSwipeableOpen,
  onSwipeableClose,
  onSwipeableWillOpen,
}: TransactionsListProps): React.JSX.Element {
  const borderRadio = useSharedValue(0);
  const [swipeableBackGroundColor, setSwipeableBackGroundColor] = useState(
    MStyles.colors.whiteColor,
  );

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

  function handleOnSwipeableWillOpen(direction: 'left' | 'right') {
    setSwipeableBackGroundColor(MStyles.colors.redColor);
    borderRadio.value = withTiming(100, {
      duration: 500,
    });

    if (onSwipeableWillOpen) {
      onSwipeableWillOpen(direction);
    }
  }

  function handleOnSwipeableWillClose(direction: 'left' | 'right') {
    setSwipeableBackGroundColor(MStyles.colors.whiteColor);
    borderRadio.value = withTiming(0, {
      duration: 300,
    });
  }

  function renderLeftActions(
    progressAnimatedValue: AnimatedInterpolation,
    dragAnimatedValue: AnimatedInterpolation,
    swipeable: Swipeable,
  ) {
    function deleteAction() {
      swipeable.close();
    }

    return <LeftActions deleteAction={deleteAction} />;
  }

  return (
    <Swipeable
      renderLeftActions={renderLeftActions}
      friction={3}
      containerStyle={{
        backgroundColor: swipeableBackGroundColor,
      }}
      onSwipeableOpen={onSwipeableOpen}
      onSwipeableClose={onSwipeableClose}
      onSwipeableWillOpen={handleOnSwipeableWillOpen}
      onSwipeableWillClose={handleOnSwipeableWillClose}>
      <Animated.View
        style={{
          ...styleItemList.container,
          borderBottomLeftRadius: borderRadio,
          borderTopLeftRadius: borderRadio,
        }}>
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
      </Animated.View>
    </Swipeable>
  );
}
