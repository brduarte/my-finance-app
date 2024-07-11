import {Layout, LayoutOptionsList, SelectItemsProps} from './Layout.tsx';

import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {LucideIcon} from 'lucide-react-native';

type SelectSheetProps = {
  onChange?: (value: string) => void;
  value?: () => void;
  noSelectedValue?: {
    text: string;
    icon?: LucideIcon;
  };
  optionsList: SelectItemsProps[];
};

export type RootStackParamList = {
  InputSelectModal: {component: React.JSX.Element} | undefined;
};

export function SelectSheet({
  onChange,
  optionsList,
  noSelectedValue,
}: SelectSheetProps): React.JSX.Element {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function onPress() {
    navigation.navigate('InputSelectModal', {
      component: <LayoutOptionsList optionsList={optionsList} />,
    });
  }

  return (
    <Layout
      onPress={onPress}
      onChange={onChange}
      noSelectedValue={noSelectedValue}
    />
  );
}
