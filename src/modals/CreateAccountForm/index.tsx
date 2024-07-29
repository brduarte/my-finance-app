import React, {useState} from 'react';
import Layout from './Layout.tsx';
import {IAccountService} from '../../services/core/interfaces/AccountServiceInterface.ts';
import {AccountService} from '../../services/core/services/AccountService.ts';
import {AccountTypeEnum} from '../../services/core/enums/AccountTypeEnum.ts';
import {MoneyHelper} from '../../helpers/MoneyHelper.ts';
import {DateHelper} from '../../helpers/DateHelper.ts';
import {useNavigation} from '@react-navigation/native';
import {useActiveIndicator} from '../../contexts/ActiveIndicatorContext.tsx';

export default function CreateAccountForm(): React.JSX.Element {
  const navigate = useNavigation();

  const [amount, setAmount] = useState<string>('R$ 0,00');
  const [typeAccountId, setTypeAccountId] = useState<string>();
  const [firstDate, setFistDate] = useState<Date>(new Date());
  const [installments, setInstallments] = useState<number>(1);
  const [name, setName] = useState<string>();

  const activeIndicator = useActiveIndicator();

  function handleInputValueChange(value: string) {
    setAmount(MoneyHelper.stringToReal(value));
  }

  function handleInputTypeAccountChange(value: string) {
    setTypeAccountId(value);
  }

  function handleInputFirstDate(value: Date) {
    setFistDate(value);
  }

  function handleInputInstallmentChange(value: string) {
    setInstallments(+value);
  }

  function handleInputNameChange(value: string) {
    setName(value);
  }

  async function handleSummit() {
    activeIndicator.active();

    const accountService: IAccountService = new AccountService();

    if (!amount || !name || !typeAccountId) {
      return;
    }

    try {
      await accountService.create({
        name: name,
        amount: MoneyHelper.brToInt(amount),
        dueDate: DateHelper.toUsa(firstDate),
        type: typeAccountId as AccountTypeEnum,
        recurrence: Number(installments),
      });

      navigate.goBack();
    } catch (e) {
      console.log(e);
    } finally {
      activeIndicator.disabled();
    }
  }

  return (
    <Layout
      handleSummit={handleSummit}
      inputValue={{value: amount, handleInputValueChange}}
      inputDate={{
        value: firstDate,
        handleInputDateChange: handleInputFirstDate,
      }}
      inputInstallment={{
        handleInputInstallmentChange,
        value: installments?.toString(),
      }}
      inputTypeAccount={{
        value: typeAccountId,
        handleInputTypeAccountChange,
      }}
      inputName={{
        value: name,
        handleInputNameChange,
      }}
    />
  );
}
