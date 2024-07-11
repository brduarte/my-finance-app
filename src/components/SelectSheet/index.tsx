import {Layout, LayoutOptionsList, SelectItemsProps} from './Layout.tsx';

import React from 'react';

import {useNavigation} from '@react-navigation/native';

type SelectSheetProps = {
  onChange?: (value: string) => void;
  optionsList: SelectItemsProps[];
};

export function SelectSheet({
  onChange,
  optionsList,
}: SelectSheetProps): React.JSX.Element {
  const navigation = useNavigation();

  function onPress() {
    // @ts-ignore
    navigation.navigate('InputSelectModal', {
      component: <LayoutOptionsList optionsList={optionsList} />,
    });
  }

  return <Layout onPress={onPress} onChange={onChange} />;
}
