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
  onDeleteConfirm: () => void;
  onCancel: () => void;
};

export function AlertDeleteNoInstallment({
  transaction,
  onDeleteConfirm,
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
        source={require('../../../../assets/icons/alert-bin.png')}
      />

      <Text style={styles.title}>
        Deseja remover o lançamento
        <Text
          style={{
            color: MStyles.colors.redColor,
            fontFamily: MStyles.fontFamilyInterBold,
          }}>
          {' '}
          {transaction.account?.name}
        </Text>
        ?
      </Text>

      <Text style={styles.subtext}>
        Você está prestes a excluir um lançamento financeiro. Tem certeza de que
        deseja continuar? Esta ação não pode ser desfeita.
      </Text>

      <View style={styles.containerButtons}>
        <View style={styles.sessionButtons}>
          <RectButton
            style={[styles.buttonDefault, styles.buttonDefault]}
            delayLongPress={delayLongPress}
            rippleColor={MStyles.colors.redColor}
            underlayColor={MStyles.colors.redColor}
            onLongPress={onDeleteConfirm}>
            <Text style={[styles.buttonDefaultText]}>Remover</Text>
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
