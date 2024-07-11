import React from 'react';
import {disabledStyles, styles} from './styles';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {LucideIcon, X} from 'lucide-react-native';
import {MStyles} from '../../views/style';
import {moderateScale} from '../../helpers/MetricsHelper.ts';
import {ListRenderItemInfo} from '@react-native/virtualized-lists/Lists/VirtualizedList';
import {useNavigation} from '@react-navigation/native';

type LayoutProps = {
  onPress?: () => void;
  noSelectedValue?: {text: string; icon?: LucideIcon};
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

export function Layout({
  onPress,
  noSelectedValue,
}: LayoutProps): React.JSX.Element {
  const baseStyle = false ? styles : disabledStyles;
  const iconColor = false ? MStyles.colors.blackColor : '#a0a0a0';

  return (
    <TouchableOpacity style={baseStyle.selectType} onPress={onPress}>
      {noSelectedValue ? (
        <>
          <View style={baseStyle.selectItemIcon}>
            {noSelectedValue.icon ? (
              <noSelectedValue.icon color={iconColor} />
            ) : (
              <></>
            )}
          </View>
          <Text style={baseStyle.selectItemText}>{noSelectedValue.text}</Text>
        </>
      ) : (
        <>
          <View style={baseStyle.selectItemIcon}>
            <X color={MStyles.colors.blackColor} />
          </View>
          <Text style={baseStyle.selectItemText}>Escolha uma opção</Text>
        </>
      )}

      <View style={baseStyle.selectItemTag}>
        <Text style={baseStyle.selectItemTagText}>Selecionar</Text>
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
