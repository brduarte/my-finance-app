import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Input from '../../components/Input';

import {SelectSheet} from '../../components/InputSelectSheet';
import {X} from 'lucide-react-native';
import {ModalHeader} from '../../navigate/modal/ModalHeader.tsx';
import {SafeAreaView} from '../../components/SafeAreaView/SafeAreaView.tsx';
import {ItemProps} from '../../components/InputSelectSheet/Layout.tsx';
import {AccountTypeEnum} from '../../services/core/enums/AccountTypeEnum.ts';
import {TabOptionType} from '../../components/InputTabSelect/InputTabSelect.tsx';
import {optionsTypeAccount} from './data.ts';
import {SimpleTransactionForm} from './components/SimpleTransactionForm.tsx';
import {SubscriptionTransactionForm} from './components/SubscriptionTransactionForm.tsx';

type LayoutProps = {
  inputValue: {
    handleInputValueChange: (value: string) => void;
    value?: string;
    isError?: boolean;
    errorMessage?: string;
  };
  inputName: {
    handleInputNameChange: (value: any) => void;
    value?: string;
    isError?: boolean;
    errorMessage?: string;
  };
  inputTransactionType: {
    handleInputTransactionTypeChange: (item: ItemProps) => void;
    value?: ItemProps;
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
  handleSummit: () => void;
  enableSubmit: boolean;
};

export default function Layout({
  inputValue,
  inputTransactionType,
  inputDate,
  inputInstallment,
  inputName,
  inputRecurrence,
  handleSummit,
  enableSubmit,
}: LayoutProps): React.JSX.Element {
  let formRender = <></>;

  switch (inputTransactionType.value?.value) {
    case AccountTypeEnum.RECEIVABLE:
      formRender = (
        <SimpleTransactionForm
          inputValue={inputValue}
          inputDate={inputDate}
          inputInstallment={inputInstallment}
        />
      );
      break;
    case AccountTypeEnum.PAYABLE:
      formRender = (
        <SimpleTransactionForm
          inputValue={inputValue}
          inputDate={inputDate}
          inputInstallment={inputInstallment}
        />
      );
      break;
    case AccountTypeEnum.SUBSCRIPTION:
      formRender = (
        <SubscriptionTransactionForm
          inputValue={inputValue}
          inputDate={inputDate}
          inputInstallment={inputInstallment}
          inputRecurrence={inputRecurrence}
        />
      );
      break;
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ModalHeader title={'Crie um novo lançamento'} icon={'arrow-back'} />

        <ScrollView>
          <View style={styles.session}>
            <Text style={styles.label}>Nome:</Text>
            <Input
              placeholder={'Conta de Luz'}
              value={inputName.value}
              onChangeText={inputName.handleInputNameChange}
              errorText={inputName.errorMessage}
              isError={inputName.isError}
            />
          </View>

          <View style={styles.session}>
            <Text style={styles.label}>Tipo de lançamento:</Text>
            <SelectSheet
              optionsList={optionsTypeAccount}
              value={inputTransactionType.value}
              onSelect={inputTransactionType.handleInputTransactionTypeChange}
              noSelectedValue={{
                text: 'Escolha uma opção',
                icon: X,
              }}
            />
          </View>

          {formRender}

          <TouchableOpacity onPress={handleSummit} disabled={!enableSubmit}>
            <View
              style={
                enableSubmit
                  ? styles.buttonConfirm
                  : {...styles.buttonConfirm, opacity: 0.5}
              }>
              <Text style={styles.buttonText}>Confirmar</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
