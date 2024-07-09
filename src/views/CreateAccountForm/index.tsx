import React, {useState} from 'react';
import Layout from './Layout.tsx';
import {useBottomSheet} from '../../contexts/BottomSheetContext.tsx';

export default function CreateAccountForm(): React.JSX.Element {
  const [value, setValue] = useState<string>('0');
  const bottomSheet = useBottomSheet();

  function handleInputValueChange(value: string) {
    setValue(value);
  }

  function openModalToSelectTypeTransaction() {
    bottomSheet.open();
  }

  return (
    <Layout
      inputValue={{value, handleInputValueChange}}
      openModalToSelectTypeTransaction={openModalToSelectTypeTransaction}
    />
  );
}
