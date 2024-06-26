import React from 'react';
import {View} from 'react-native';
import BalanceCard from './components/BalanceCard/BalanceCard.tsx';
import {styles} from './styles';

export default function Layout(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.session}>
        <BalanceCard total={2750.83} />
      </View>
    </View>
  );
}
