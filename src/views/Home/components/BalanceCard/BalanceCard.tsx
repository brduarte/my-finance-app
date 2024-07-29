import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {ArrowRight} from 'lucide-react-native';
import {MStyles} from '../../../style';
import React from 'react';
import {MoneyHelper} from '../../../../helpers/MoneyHelper.ts';
import {moderateScale} from '../../../../helpers/MetricsHelper.ts';

type BalanceCardProps = {
  total?: number;
  action?: () => void;
};

export default function BalanceCard(
  props: BalanceCardProps,
): React.JSX.Element {
  return (
    <ImageBackground
      imageStyle={styles.backgroundImage}
      source={require('../../../../assets/imgs/balance.png')}
      resizeMode="stretch"
      style={styles.container}>
      <Text style={styles.cardTitle}>Saldo Total</Text>

      <Text style={styles.value}>{MoneyHelper.intToReal(props.total)}</Text>

      <TouchableOpacity onPress={props.action}>
        <View style={styles.walletBottom}>
          <Text style={styles.walletBottomText}>Minha Carteira</Text>
          <View style={styles.icon}>
            <ArrowRight
              size={moderateScale(25)}
              color={MStyles.colors.blackColor}
              strokeWidth={3}
            />
          </View>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
}
