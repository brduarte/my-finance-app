import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {ArrowRight} from 'lucide-react-native';
import {MStyles} from '../../../style';
import React from 'react';

type BalanceCardProps = {
  total: number;
  action?: () => void;
};

export default function BalanceCard(
  props: BalanceCardProps,
): React.JSX.Element {
  return (
    <ImageBackground
      imageStyle={styles.backgroundImage}
      source={require('../../../../assets/imgs/balance.png')}
      resizeMode="cover"
      style={styles.container}>
      <Text style={styles.cardTitle}>Saldo Total</Text>

      <Text style={styles.value}>
        {props.total
          ? props.total.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })
          : (0).toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
      </Text>

      <TouchableOpacity onPress={props.action}>
        <View style={styles.walletBottom}>
          <Text style={styles.walletBottomText}>Minha Carteira</Text>
          <Text style={styles.icon}>
            <ArrowRight
              size={25}
              color={MStyles.colors.blackColor}
              strokeWidth={3}
            />
          </Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
}
