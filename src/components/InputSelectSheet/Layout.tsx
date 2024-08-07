import React from 'react';
import {disabledStyles, styles} from './styles';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {ChevronRight, LucideIcon, X} from 'lucide-react-native';
import {MStyles} from '../../views/style';
import {ListRenderItemInfo} from '@react-native/virtualized-lists/Lists/VirtualizedList';
import {useNavigation} from '@react-navigation/native';

type LayoutProps = {
  onPress?: () => void;
  value?: number | string;
  selected?: {text: string; icon?: LucideIcon};
};

export type SelectItemsProps = {
  name: string;
  value: string | number;
  description: string;
  icon?: LucideIcon;
};

type LayoutOptionsListProps = {
  onSelect?: (value: string | number) => void;
  optionsList: SelectItemsProps[];
};

type LayoutOptionsListItemProps = {
  onPress?: (value: string | number) => void;
  item: SelectItemsProps;
  navigate: any;
};

export function Layout({
  onPress,
  selected,
  value,
}: LayoutProps): React.JSX.Element {
  const baseStyle = value ? styles : disabledStyles;
  const iconColor = value ? MStyles.colors.blackColor : '#a0a0a0';
  const tagText = value ? 'Mudar' : 'Selecionar';

  return (
    <TouchableOpacity style={baseStyle.selectType} onPress={onPress}>
      {selected ? (
        <>
          <View style={baseStyle.selectItemIcon}>
            {selected.icon ? <selected.icon color={iconColor} /> : <></>}
          </View>
          <Text style={baseStyle.selectItemText}>{selected.text}</Text>
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
        <Text style={baseStyle.selectItemTagText}>{tagText}</Text>
      </View>
    </TouchableOpacity>
  );
}

export function LayoutOptionsList({
  optionsList,
  onSelect,
}: LayoutOptionsListProps) {
  const navigation = useNavigation();

  return (
    <View style={styles.selectOptionItemContainer}>
      <FlatList
        data={optionsList}
        renderItem={({item}: ListRenderItemInfo<SelectItemsProps>) => (
          <LayoutItem item={item} onPress={onSelect} navigate={navigation} />
        )}
      />
    </View>
  );
}

function LayoutItem({item, onPress, navigate}: LayoutOptionsListItemProps) {
  return (
    <TouchableOpacity
      style={styles.selectOptionItem}
      onPress={() => {
        onPress
          ? onPress(item.value)
          : console.log('No Action implemented to selection');

        navigate.goBack();
      }}>
      {item.icon ? (
        <View style={styles.selectOptionItemIcon}>
          <item.icon strokeWidth={2.2} color={MStyles.colors.greyColor} />
        </View>
      ) : (
        <></>
      )}
      <View style={styles.selectOptionItemText}>
        <View style={{flex: 1}}>
          <Text style={styles.selectOptionItemTextTitle}>{item.name}</Text>
          <Text style={styles.selectOptionItemTextDescription}>
            {item.description}
          </Text>
        </View>

        <View style={{marginLeft: 5}}>
          <ChevronRight color={MStyles.colors.greyColor} strokeWidth={1.5} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
