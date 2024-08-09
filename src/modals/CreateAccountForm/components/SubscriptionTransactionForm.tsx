import React from 'react';
import {
  InputTabSelect,
  TabOptionType,
} from '../../../components/InputTabSelect/InputTabSelect.tsx';
import {Text, View} from 'react-native';
import {styles} from '../styles';
import Input from '../../../components/Input';
import {InputDateSheet} from '../../../components/InputDateSheet';

type SubscriptionTransactionFormProps = {
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
  inputRecurrence: {
    handleInputRecurrenceChange: (value: TabOptionType) => void;
    value?: TabOptionType;
    data: TabOptionType[];
  };
};

export function SubscriptionTransactionForm({
  inputValue,
  inputDate,
  inputInstallment,
  inputRecurrence,
}: SubscriptionTransactionFormProps): React.JSX.Element {
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

      <View style={styles.session}>
        <Text style={styles.label}>Data do primeiro pagamento:</Text>
        <InputDateSheet
          placeholder={new Date()}
          value={inputDate.value}
          onChange={inputDate.handleInputDateChange}
        />
      </View>

      <View style={styles.session}>
        <Text style={styles.label}>Recorrência:</Text>
        <InputTabSelect
          buttons={inputRecurrence.data}
          selectedTab={inputRecurrence.value}
          setSelectedTab={inputRecurrence.handleInputRecurrenceChange}
        />
      </View>
    </>
  );
}
