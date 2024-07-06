import React from 'react';
import {View} from 'react-native';
import BalanceCard from './components/BalanceCard/BalanceCard.tsx';
import {styles} from './styles';
import {HeaderProfile} from '../../components/HeaderProfile';

type Props = {
  totalBalance: number;
  actionBtnCardTotalBalance: () => void;
};

export default function Layout(props: Props): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.session}>
        <HeaderProfile />
      </View>
      <View style={styles.session}>
        <BalanceCard
          total={props.totalBalance}
          action={props.actionBtnCardTotalBalance}
        />
      </View>
    </View>
  );
}
