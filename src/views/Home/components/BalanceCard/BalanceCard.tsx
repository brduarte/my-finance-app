import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {ArrowRight} from 'lucide-react-native';
import {MStyles} from '../../../style';

type BalanceCardProps = {
  total: number;
  action?: () => {};
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
      <Text style={styles.cardTitle}>Total Balance</Text>
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
          <Text style={styles.walletBottomText}>My Wallet</Text>
          <ArrowRight
            size={32}
            color={MStyles.colors.blackColor}
            strokeWidth={2.5}
            style={{backgroundColor: '#fff', padding: 8, borderRadius: 100}}
          />
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
}
