import React, {useEffect, useState} from 'react';
import Layout from './Layout.tsx';

export default function CreateAccountForm(): React.JSX.Element {
  const [value, setValue] = useState<string>();
  const [typeAccountId, setTypeAccountId] = useState<number>();

  function handleInputValueChange(value: string) {
    setValue(value);
  }

  function handleInputTypeAccountChange(value: number) {
    setTypeAccountId(value);
  }

  return (
    <Layout
      inputValue={{value, handleInputValueChange}}
      inputTypeAccount={{
        value: typeAccountId,
        handleInputTypeAccountChange,
      }}
    />
  );
}
