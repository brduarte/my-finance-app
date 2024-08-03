import React, {useState} from 'react';
import Layout from './Layout.tsx';
import {IAccountService} from '../../services/core/interfaces/AccountServiceInterface.ts';
import {AccountService} from '../../services/core/services/AccountService.ts';
import {AccountTypeEnum} from '../../services/core/enums/AccountTypeEnum.ts';
import {MoneyHelper} from '../../helpers/MoneyHelper.ts';
import {DateHelper} from '../../helpers/DateHelper.ts';
import {useNavigation} from '@react-navigation/native';
import {useActiveIndicator} from '../../contexts/ActiveIndicatorContext.tsx';

type Error = {
  isError: boolean;
  text?: string;
};

export default function CreateAccountForm(): React.JSX.Element {
  const navigate = useNavigation();

  const [amount, setAmount] = useState<string>('R$ 0,00');
  const [typeAccountId, setTypeAccountId] = useState<string>();
  const [firstDate, setFistDate] = useState<Date>(new Date());
  const [installments, setInstallments] = useState<number>(1);
  const [name, setName] = useState<string>();

  const [enableSubmit, setEnableSubmit] = useState<boolean>(false);

  const [errorInputName, setErrorInputName] = useState<Error>();
  const [errorInputAmount, setErrorInputAmount] = useState<Error>();
  const [errorInstallment, setErrorInstallment] = useState<Error>();

  const activeIndicator = useActiveIndicator();

  function handleInputValueChange(value: string) {
    setErrorInputAmount({isError: false});
    setAmount(MoneyHelper.stringToReal(value));
  }

  function handleInputTypeAccountChange(value: string) {
    if (value) {
      setEnableSubmit(true);
    }

    setTypeAccountId(value);
  }

  function handleInputFirstDate(value: Date) {
    setFistDate(value);
  }

  function handleInputInstallmentChange(value: string) {
    const installment = +value;

    if (installment <= 0) {
      setErrorInstallment({
        isError: true,
        text: 'Valor deve ser maior que 0.',
      });
    } else {
      setErrorInstallment({isError: false});
    }

    setInstallments(installment);
  }

  function handleInputNameChange(value: string) {
    setErrorInputName({isError: false});
    setName(value);
  }

  async function handleSummit() {
    const accountService: IAccountService = new AccountService();
    const value = MoneyHelper.brToInt(amount);

    if (!name) {
      setErrorInputName({
        isError: true,
        text: 'Por favor, informe o nome da transação.',
      });
    } else if (name.length <= 3) {
      setErrorInputName({
        isError: true,
        text: 'Por favor, o nome precisa ter pelo menos 4 letras.',
      });
    }

    if (value <= 0) {
      setErrorInputAmount({
        isError: true,
        text: 'Por favor, insira um valor válido para a transação.',
      });
    }

    if (!amount || !name || !typeAccountId) {
      return;
    }

    try {
      activeIndicator.active();

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
      enableSubmit={enableSubmit}
      inputValue={{
        value: amount,
        handleInputValueChange,
        errorMessage: errorInputAmount?.text,
        isError: errorInputAmount?.isError,
      }}
      inputDate={{
        value: firstDate,
        handleInputDateChange: handleInputFirstDate,
      }}
      inputInstallment={{
        handleInputInstallmentChange,
        value: installments?.toString(),
        errorMessage: errorInstallment?.text,
        isError: errorInstallment?.isError,
      }}
      inputTypeAccount={{
        value: typeAccountId,
        handleInputTypeAccountChange,
      }}
      inputName={{
        value: name,
        handleInputNameChange,
        isError: errorInputName?.isError,
        errorMessage: errorInputName?.text,
      }}
    />
  );
}
