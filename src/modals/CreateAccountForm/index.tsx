import React, {useState} from 'react';
import Layout from './Layout.tsx';
import {IAccountService} from '../../services/core/interfaces/AccountServiceInterface.ts';
import {AccountService} from '../../services/core/services/AccountService.ts';
import {AccountTypeEnum} from '../../services/core/enums/AccountTypeEnum.ts';
import {MoneyHelper} from '../../helpers/MoneyHelper.ts';
import {DateHelper} from '../../helpers/DateHelper.ts';
import {useNavigation} from '@react-navigation/native';
import {useActiveIndicator} from '../../contexts/ActiveIndicatorContext.tsx';
import {ItemProps} from '../../components/InputSelectSheet/Layout.tsx';
import {showMessage} from 'react-native-flash-message';
import {RecurrenceEnum} from '../../services/core/enums/RecurrenceEnum.ts';
import {TabOptionType} from '../../components/InputTabSelect/InputTabSelect.tsx';

type Error = {
  isError: boolean;
  text?: string;
};

export const recurrenceOptions: TabOptionType[] = [
  {title: 'Mensal', value: RecurrenceEnum.MONTHLY},
  {title: 'Semestral', value: RecurrenceEnum.SEMIANNUAL},
  {title: 'Anual', value: RecurrenceEnum.ANNUAL},
];

export default function CreateAccountForm(): React.JSX.Element {
  const navigate = useNavigation();

  const [amount, setAmount] = useState<string>('R$ 0,00');
  const [transactionType, setTransactionType] = useState<ItemProps>();
  const [firstDate, setFistDate] = useState<Date>(new Date());
  const [installments, setInstallments] = useState<number>(1);
  const [name, setName] = useState<string>();
  const [recurrence, setRecurrence] = useState<TabOptionType>();

  const [enableSubmit, setEnableSubmit] = useState<boolean>(false);

  const [errorInputName, setErrorInputName] = useState<Error>();
  const [errorInputAmount, setErrorInputAmount] = useState<Error>();
  const [errorInstallment, setErrorInstallment] = useState<Error>();

  const activeIndicator = useActiveIndicator();

  function handleInputValueChange(value: string) {
    setErrorInputAmount({isError: false});
    setAmount(MoneyHelper.stringToReal(value));
  }

  function handleInputRecurrenceChange(value: TabOptionType) {
    setRecurrence(value);
  }

  function handleInputTypeAccountChange(item: ItemProps) {
    if (item) {
      setEnableSubmit(true);
    }

    switch (item.value) {
      case AccountTypeEnum.SUBSCRIPTION:
        setRecurrence(recurrenceOptions[0]);
        break;
      default:
        if (recurrence) {
          setRecurrence(undefined);
        }
    }

    setTransactionType(item);
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
        text: 'Por favor, informe um nome para o lançamento.',
      });
    } else if (name.length <= 4) {
      setErrorInputName({
        isError: true,
        text: 'Por favor, o nome precisa ter pelo menos 5 letras.',
      });
    }

    if (value <= 0) {
      setErrorInputAmount({
        isError: true,
        text: 'Por favor, insira um valor válido para o lançamento.',
      });
    }

    if (!amount || !name || !transactionType || name.length <= 4) {
      return;
    }

    try {
      activeIndicator.active();

      await accountService.create({
        name: name,
        amount: MoneyHelper.brToInt(amount),
        dueDate: DateHelper.toUsa(firstDate),
        type: transactionType.value as AccountTypeEnum,
        installments: Number(installments),
      });

      navigate.goBack();
    } catch (e) {
      showMessage({
        message: 'Erro ao salvar lançamento',
        description:
          'Ocorreu um problema ao salvar seu lançamento. Por favor, tente novamente mais tarde.',
        type: 'danger',
        duration: 5000,
      });
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
      inputTransactionType={{
        value: transactionType,
        handleInputTransactionTypeChange: handleInputTypeAccountChange,
      }}
      inputName={{
        value: name,
        handleInputNameChange,
        isError: errorInputName?.isError,
        errorMessage: errorInputName?.text,
      }}
      inputRecurrence={{
        data: recurrenceOptions,
        value: recurrence,
        handleInputRecurrenceChange,
      }}
    />
  );
}
