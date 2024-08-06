import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {TransactionsModel} from '../../../../services/core/models/TransactionsModel.ts';
import {MStyles} from '../../../style';

type AlertDeleteProps = {
  transaction: TransactionsModel;
};

export function AlertDelete({
  transaction,
}: AlertDeleteProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        borderRadius={8}
        resizeMode={'contain'}
        source={require('../../../../assets/icons/alert-money.png')}
      />

      <Text style={styles.title}>
        Esta é a parcela {transaction.installment} de
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
          <TouchableOpacity style={{flex: 1}}>
            <View style={[styles.buttonDefault]}>
              <Text style={[styles.buttonDefaultText]}>Remover todas</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{flex: 1}}>
            <View style={[styles.buttonDefault, styles.buttonDefault]}>
              <Text style={styles.buttonDefaultText}>Remover esta</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <View style={[styles.buttonDefault, styles.buttonCancelAction]}>
            <Text
              style={[styles.buttonDefaultText, styles.buttonCancelActionText]}>
              Cancelar
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
