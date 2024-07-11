import React, {useLayoutEffect} from 'react';
import {styles} from './styles';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {HandCoins, LucideIcon} from 'lucide-react-native';
import {MStyles} from '../../views/style';
import {moderateScale} from '../../helpers/MetricsHelper.ts';
import {ListRenderItemInfo} from '@react-native/virtualized-lists/Lists/VirtualizedList';
import {useNavigation} from '@react-navigation/native';

type LayoutProps = {
  onPress?: () => void;
  onChange?: (value: string) => void;
};

export type SelectItemsProps = {
  name: string;
  value: string | number;
  description: string;
  icon?: LucideIcon;
};

type SelectItemProps = {
  onChange?: (value: string) => void;
  optionsList: SelectItemsProps[];
};

export function Layout({onPress}: LayoutProps): React.JSX.Element {
  return (
    <TouchableOpacity style={styles.selectType} onPress={onPress}>
      <View style={styles.selectItemIcon}>
        <HandCoins color={MStyles.colors.blackColor} />
      </View>
      <Text style={styles.selectItemText}>A Pagar</Text>
      <View style={styles.selectItemTag}>
        <Text style={styles.selectItemTagText}>Mudar</Text>
      </View>
    </TouchableOpacity>
  );
}

export function LayoutOptionsList({optionsList}: SelectItemProps) {
  const navigation = useNavigation();
  navigation.setOptions({
    title: 'Escolha o tipo de conta?',
  });

  return (
    <View style={styles.selectOptionItemContainer}>
      <FlatList data={optionsList} renderItem={LayoutItem} />
    </View>
  );
}

function LayoutItem({item}: ListRenderItemInfo<SelectItemsProps>) {
  return (
    <TouchableOpacity style={styles.selectOptionItem}>
      {item.icon ? (
        <View style={styles.selectOptionItemIcon}>
          <item.icon
            size={moderateScale(28)}
            strokeWidth={2.5}
            color={MStyles.colors.greyColor}
          />
        </View>
      ) : (
        <></>
      )}
      <View style={styles.selectOptionItemText}>
        <Text style={styles.selectOptionItemTextTitle}>{item.name}</Text>
        <Text style={styles.selectOptionItemTextDescription}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
