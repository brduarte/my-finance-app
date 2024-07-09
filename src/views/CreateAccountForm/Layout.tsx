import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Input from '../../components/Input';
import {MoneyHelper} from '../../helpers/MoneyHelper.ts';
import {HandCoins} from 'lucide-react-native';
import {MStyles} from '../style';

type LayoutProps = {
  inputValue: {
    handleInputValueChange: (value: string) => void;
    value: string;
  };
  openModalToSelectTypeTransaction: () => void;
};

export default function Layout({
  inputValue,
  openModalToSelectTypeTransaction,
}: LayoutProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.session}>
        <Text style={styles.label}>Valor</Text>
        <Input
          keyboardType={'numeric'}
          style={styles.inputMoney}
          placeholder={'0'}
          onChangeText={inputValue.handleInputValueChange}
          value={MoneyHelper.stringToReal(inputValue.value)}
        />
      </View>

      <View style={styles.session}>
        <Text style={styles.label}>Tipo de Lançamento</Text>
        <TouchableOpacity
          style={styles.selectType}
          onPress={openModalToSelectTypeTransaction}>
          <View style={styles.selectItemIcon}>
            <HandCoins color={MStyles.colors.blackColor} />
          </View>
          <Text style={styles.selectItemText}>A Pagar</Text>
          <View style={styles.selectItemTag}>
            <Text style={styles.selectItemTagText}>Mudar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
