import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './style';
import {TransactionsModel} from '../../../../services/core/models/TransactionsModel.ts';
import {MStyles} from '../../../style';
import {RectButton} from 'react-native-gesture-handler';
import {
  horizontalScale,
  verticalScale,
} from '../../../../helpers/MetricsHelper.ts';

type AlertDeleteProps = {
  transaction: TransactionsModel;
  onDeleteAll: () => void;
  onDeleteOnly: () => void;
  onCancel: () => void;
};

export function AlertDelete({
  transaction,
  onDeleteAll,
  onDeleteOnly,
  onCancel,
}: AlertDeleteProps): React.JSX.Element {
  const delayLongPress = 500;

  return (
    <View style={styles.container}>
      <Image
        style={{
          marginBottom: verticalScale(18),
          width: horizontalScale(62),
          height: verticalScale(62),
        }}
        resizeMode={'contain'}
        source={require('../../../../assets/icons/alert-installment.png')}
      />

      <Text style={styles.title}>
        Esta é a parcela {transaction.installment} de{' '}
        {transaction.account?.installments} do lançamento
        <Text
          style={{
            color: MStyles.colors.redColor,
            fontFamily: MStyles.fontFamilyInterBold,
          }}>
          {' '}
          {transaction.account?.name}
        </Text>
        .
      </Text>

      <Text style={styles.subtext}>
        Se você remover essa parcela, o valor total será recalculado e as datas
        de vencimento das outras parcelas serão ajustadas.
      </Text>

      <View style={styles.containerButtons}>
        <View style={styles.sessionButtons}>
          <RectButton
            style={[styles.buttonDefault, styles.buttonDefault]}
            delayLongPress={delayLongPress}
            rippleColor={MStyles.colors.redColor}
            underlayColor={MStyles.colors.redColor}
            onLongPress={onDeleteAll}>
            <Text style={[styles.buttonDefaultText]}>Remover todas</Text>
          </RectButton>

          <RectButton
            style={[styles.buttonDefault, styles.buttonDefault]}
            delayLongPress={delayLongPress}
            rippleColor={MStyles.colors.redColor}
            underlayColor={MStyles.colors.redColor}
            onLongPress={onDeleteOnly}>
            <Text style={styles.buttonDefaultText}>Remover esta</Text>
          </RectButton>
        </View>

        <RectButton
          style={[styles.buttonDefault, styles.buttonCancelAction]}
          onPress={onCancel}>
          <Text
            style={[styles.buttonDefaultText, styles.buttonCancelActionText]}>
            Cancelar
          </Text>
        </RectButton>
      </View>
    </View>
  );
}
