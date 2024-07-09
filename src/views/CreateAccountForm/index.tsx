import React, {useState} from 'react';
import Layout from './Layout.tsx';

export default function CreateAccountForm(): React.JSX.Element {
  const [value, setValue] = useState<string>('0');

  function handleInputValueChange(value: string) {
    setValue(value);
  }

  return <Layout inputValue={{value, handleInputValueChange}} />;
}
