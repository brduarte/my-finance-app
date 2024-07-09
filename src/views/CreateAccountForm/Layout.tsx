import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import Input from '../../components/Input';
import {MoneyHelper} from '../../helpers/MoneyHelper.ts';

type LayoutProps = {
  inputValue: {
    handleInputValueChange: (value: string) => void;
    value: string;
  };
};

export default function Layout({inputValue}: LayoutProps): React.JSX.Element {
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
        <Text style={styles.label}>Tipo</Text>
        <Input
          keyboardType={'numeric'}
          style={styles.inputMoney}
          placeholder={'0'}
          onChangeText={inputValue.handleInputValueChange}
          value={MoneyHelper.stringToReal(inputValue.value)}
        />
      </View>
    </View>
  );
}
