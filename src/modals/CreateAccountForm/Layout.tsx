import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
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
  inputName: {
    handleInputNameChange: (value: any) => void;
    value?: string;
  };
  inputTypeAccount: {
    handleInputTypeAccountChange: (value: any) => void;
    value?: string;
  };
  inputDate: {
    handleInputDateChange: (value: any) => void;
    value?: Date;
  };
  inputInstallment: {
    handleInputInstallmentChange: (value: string) => void;
    value?: string;
  };
  handleSummit: () => void;
};

export default function Layout({
  inputValue,
  inputTypeAccount,
  inputDate,
  inputInstallment,
  inputName,
  handleSummit,
}: LayoutProps): React.JSX.Element {
  const optionsTypeAccount = [
    {
      name: 'A pagar',
      value: 'PAYABLE',
      description:
        "Contas 'A pagar' irão criar uma ou mais transações de débito no seu extrato.",
      icon: BookDown,
    },
    {
      name: 'A receber',
      value: 'RECEIVABLE',
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
          value={inputValue.value}
        />
      </View>

      <View style={styles.session}>
        <Text style={styles.label}>Nome:</Text>
        <Input
          placeholder={'Conta de Luz'}
          value={inputName.value}
          onChangeText={inputName.handleInputNameChange}
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

      <View style={styles.sessionColum}>
        <View style={{flex: 1}}>
          <Text style={styles.label}>Parcelas:</Text>
          <Input
            maxLength={4}
            keyboardType="numeric"
            placeholder={'1'}
            value={inputInstallment.value}
            onChangeText={inputInstallment.handleInputInstallmentChange}
          />
        </View>
        <View style={{flex: 3, marginLeft: 5}}>
          <Text style={styles.label}>Primeiro pagamento em:</Text>
          <InputDateSheet
            placeholder={new Date()}
            value={inputDate.value}
            onChange={inputDate.handleInputDateChange}
          />
        </View>
      </View>

      <TouchableOpacity onPress={handleSummit}>
        <View style={styles.buttonConfirm}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}
