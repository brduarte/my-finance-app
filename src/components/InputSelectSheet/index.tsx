import {Layout, LayoutOptionsList, SelectItemsProps} from './Layout.tsx';

import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {LucideIcon} from 'lucide-react-native';

type SelectSheetProps = {
  onSelect?: (value: string | number) => void;
  value?: number | string;
  noSelectedValue?: {
    text: string;
    icon?: LucideIcon;
  };
  optionsList: SelectItemsProps[];
};

export type RootStackParamList = {
  InputSelectModal: {component: React.JSX.Element};
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
      component: (
        <LayoutOptionsList optionsList={optionsList} onSelect={onSelect} />
      ),
    });
  }

  function handleTemplateSelected() {
    if (!value) {
      return noSelectedValue;
    }

    let templateSelected = optionsList.find(item => item.value === value);

    return {
      text: templateSelected?.name || '',
      icon: templateSelected?.icon,
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
