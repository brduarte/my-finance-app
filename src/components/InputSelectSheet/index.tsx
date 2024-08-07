import {
  ItemProps,
  Layout,
  LayoutOptionsList,
  SelectItemsProps,
} from './Layout.tsx';

import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {LucideIcon} from 'lucide-react-native';

type SelectSheetProps = {
  onSelect: (item: ItemProps) => void;
  value?: ItemProps;
  noSelectedValue?: {
    text: string;
    icon?: LucideIcon;
  };
  optionsList: SelectItemsProps[];
};

export type RootStackParamList = {
  InputSelectModal: {component: React.JSX.Element; title: string};
};

export function SelectSheet({
  onSelect,
  optionsList,
  noSelectedValue,
  value,
}: SelectSheetProps): React.JSX.Element {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function onPress() {
    navigation.navigate('InputSelectModal', {
      title: 'Escolha o tipo de lançamento?',
      component: (
        <LayoutOptionsList optionsList={optionsList} onSelect={onSelect} />
      ),
    });
  }

  function handleTemplateSelected() {
    if (!value) {
      return noSelectedValue;
    }

    return {
      text: value?.name || '',
      icon: value?.icon,
    };
  }

  return (
    <Layout
      onPress={onPress}
      selected={handleTemplateSelected()}
      value={value}
    />
  );
}
