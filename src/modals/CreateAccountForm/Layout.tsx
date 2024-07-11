import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import Input from '../../components/Input';
import {MoneyHelper} from '../../helpers/MoneyHelper.ts';

import {SelectSheet} from '../../components/SelectSheet';
import {BookDown, BookUp, Hospital, X} from 'lucide-react-native';

type LayoutProps = {
  inputValue: {
    handleInputValueChange: (value: string) => void;
    value: string;
  };
};

export default function Layout({inputValue}: LayoutProps): React.JSX.Element {
  const optionsTypeAccount = [
    {
      name: 'A pagar',
      value: 1,
      description:
        "Contas 'A pagar' irão criar uma ou mais transações de débito no seu extrato.",
      icon: BookDown,
    },
    {
      name: 'A receber',
      value: 1,
      description:
        "Contas 'A receber' irão criar uma ou mais transações de crédito.",
      icon: BookUp,
    },
  ];

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
        <SelectSheet
          optionsList={optionsTypeAccount}
          noSelectedValue={{
            text: 'Escolha uma opção',
            icon: X,
          }}
        />
      </View>
    </View>
  );
}
