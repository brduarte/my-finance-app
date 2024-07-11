import {Layout, LayoutOptionsList, SelectItemsProps} from './Layout.tsx';

import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type SelectSheetProps = {
  onChange?: (value: string) => void;
  optionsList: SelectItemsProps[];
};

export type RootStackParamList = {
  InputSelectModal: {component: React.JSX.Element} | undefined;
};

export function SelectSheet({
  onChange,
  optionsList,
}: SelectSheetProps): React.JSX.Element {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function onPress() {
    navigation.navigate('InputSelectModal', {
      component: <LayoutOptionsList optionsList={optionsList} />,
    });
  }

  return <Layout onPress={onPress} onChange={onChange} />;
}
