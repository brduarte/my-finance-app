import React, {useState} from 'react';
import Layout from './Layout.tsx';

export default function CreateAccountForm(): React.JSX.Element {
  const [value, setValue] = useState<string>();
  const [typeAccountId, setTypeAccountId] = useState<number>();
  const [firstDate, setFistDate] = useState<Date>(new Date());
  const [installments, setInstallments] = useState<number>(1);

  function handleInputValueChange(value: string) {
    setValue(value);
  }

  function handleInputTypeAccountChange(value: number) {
    setTypeAccountId(value);
  }

  function handleInputFirstDate(value: Date) {
    setFistDate(value);
  }

  function handleInputInstallmentChange(value: string) {
    setInstallments(+value);
  }

  return (
    <Layout
      inputValue={{value, handleInputValueChange}}
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
    />
  );
}
