import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import Input from '../../components/Input';
import {MoneyHelper} from '../../helpers/MoneyHelper.ts';

import {SelectSheet} from '../../components/InputSelectSheet';
import {BookDown, BookUp, X} from 'lucide-react-native';
import {InputDateSheet} from '../../components/InputDateSheet';

type LayoutProps = {
  inputValue: {
    handleInputValueChange: (value: string) => void;
    value?: string;
  };
  inputTypeAccount: {
    handleInputTypeAccountChange: (value: any) => void;
    value?: number;
  };
  inputDate: {
    handleInputDateChange: (value: any) => void;
    value?: Date;
  };
};

export default function Layout({
  inputValue,
  inputTypeAccount,
  inputDate,
}: LayoutProps): React.JSX.Element {
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
      value: 2,
      description:
        "Contas 'A receber' irão criar uma ou mais transações de crédito.",
      icon: BookUp,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.session}>
        <Text style={styles.label}>Valor da conta:</Text>
        <Input
          keyboardType={'numeric'}
          style={styles.inputMoney}
          placeholder={'0'}
          onChangeText={inputValue.handleInputValueChange}
          value={MoneyHelper.stringToReal(
            inputValue.value ? inputValue.value : '0',
          )}
        />
      </View>

      <View style={styles.session}>
        <Text style={styles.label}>Tipo de conta:</Text>
        <SelectSheet
          optionsList={optionsTypeAccount}
          value={inputTypeAccount.value}
          onSelect={inputTypeAccount.handleInputTypeAccountChange}
          noSelectedValue={{
            text: 'Escolha uma opção',
            icon: X,
          }}
        />
      </View>

      <View style={styles.session}>
        <Text style={styles.label}>Primeiro pagamento em:</Text>
        <InputDateSheet
          placeholder={new Date()}
          value={inputDate.value}
          onChange={inputDate.handleInputDateChange}
        />
      </View>
    </ScrollView>
  );
}
