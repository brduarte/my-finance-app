import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Input from '../../components/Input';

import {SelectSheet} from '../../components/InputSelectSheet';
import {BookDown, BookUp, CalendarRange, X} from 'lucide-react-native';
import {InputDateSheet} from '../../components/InputDateSheet';
import {ModalHeader} from '../../navigate/modal/ModalHeader.tsx';
import {SafeAreaView} from '../../components/SafeAreaView/SafeAreaView.tsx';
import {ItemProps} from '../../components/InputSelectSheet/Layout.tsx';
import {AccountTypeEnum} from '../../services/core/enums/AccountTypeEnum.ts';
import {InputTabSelect} from '../../components/InputTabSelect/InputTabSelect.tsx';
import {InputOption} from '../../components/InputTabSelect/InputOption.tsx';

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
  handleSummit: () => void;
  enableSubmit: boolean;
};

export default function Layout({
  inputValue,
  inputTransactionType,
  inputDate,
  inputInstallment,
  inputName,
  handleSummit,
  enableSubmit,
}: LayoutProps): React.JSX.Element {
  const optionsTypeAccount = [
    {
      title: 'Simples',
      data: [
        {
          name: 'Débito',
          value: 'PAYABLE',
          description:
            "Lamçamentos de 'Débito' irão criar uma ou mais transações de débito no seu extrato.",
          icon: BookDown,
        },
        {
          name: 'Crédito',
          value: 'RECEIVABLE',
          description:
            "Lançamentos de 'Crédito' irão criar uma ou mais transações de crédito.",
          icon: BookUp,
        },
      ],
    },
    {
      title: 'Contratos',
      data: [
        {
          name: 'Assinatura',
          value: 'SUBSCRIPTION',
          description:
            'As cobranças da assinatura serão feitas automaticamente conforme a frequência escolhida, até que você cancele a assinatura.',
          icon: CalendarRange,
        },
      ],
    },
  ];

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ModalHeader title={'Crie um novo lançamento'} icon={'arrow-back'} />

        <ScrollView>
          <View style={styles.session}>
            <Text style={styles.label}>Valor do lançamento:</Text>
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

          <View style={styles.sessionColum}>
            <View style={{flex: 1}}>
              <Text style={styles.label}>
                {inputTransactionType.value?.value ===
                AccountTypeEnum.SUBSCRIPTION
                  ? 'Recorrência:'
                  : 'Parcelas:'}
              </Text>
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
              <Text style={styles.label}>Primeiro pagamento em:</Text>
              <InputDateSheet
                placeholder={new Date()}
                value={inputDate.value}
                onChange={inputDate.handleInputDateChange}
              />
            </View>
          </View>

          <View>
            <InputOption />
          </View>

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
