import {Text, View} from 'react-native';
import {styles} from '../styles';
import Input from '../../../components/Input';
import React from 'react';
import {InputDateSheet} from '../../../components/InputDateSheet';

type SimpleTransactionFormProps = {
  inputValue: {
    handleInputValueChange: (value: string) => void;
    value?: string;
    isError?: boolean;
    errorMessage?: string;
  };
  inputDate: {
    handleInputDateChange: (value: any) => void;
    value?: Date;
  };
  inputInstallment: {
    handleInputInstallmentChange: (value: string) => void;
    value?: string;
    isError?: boolean;
    errorMessage?: string;
  };
};

export function SimpleTransactionForm({
  inputValue,
  inputDate,
  inputInstallment,
}: SimpleTransactionFormProps): React.JSX.Element {
  return (
    <>
      <View style={styles.session}>
        <Text style={styles.label}>Valor total do lançamento:</Text>
        <Input
          keyboardType={'numeric'}
          style={styles.inputMoney}
          placeholder={'0'}
          caretHidden={true}
          onChangeText={inputValue.handleInputValueChange}
          value={inputValue.value}
          isError={inputValue.isError}
          errorText={inputValue.errorMessage}
        />
      </View>

      <View style={styles.sessionColum}>
        <View style={{flex: 1}}>
          <Text style={styles.label}>Parcelas</Text>
          <Input
            maxLength={4}
            keyboardType="numeric"
            placeholder={'1'}
            value={inputInstallment.value}
            onChangeText={inputInstallment.handleInputInstallmentChange}
            isError={inputInstallment.isError}
            errorText={inputInstallment.errorMessage}
          />
        </View>

        <View style={{flex: 3, marginLeft: 5}}>
          <Text style={styles.label}>Data do primeiro pagamento:</Text>
          <InputDateSheet
            placeholder={new Date()}
            value={inputDate.value}
            onChange={inputDate.handleInputDateChange}
          />
        </View>
      </View>
    </>
  );
}
