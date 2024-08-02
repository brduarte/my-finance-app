import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {useMemo, useRef} from 'react';
import {styles} from './styles';

import {CircleArrowLeft, CircleArrowRight} from 'lucide-react-native';
import {MStyles} from '../../views/style';

type ItemProps = {
  id: number;
  title: string;
  selected?: boolean;
  onPress: (month: number) => void;
};

const Item = ({title, selected, onPress, id}: ItemProps) => (
  <TouchableOpacity onPress={() => onPress(id)}>
    <Text
      style={
        selected
          ? {...styles.itemText, ...styles.itemSelectedText}
          : styles.itemText
      }>
      {title}
    </Text>
  </TouchableOpacity>
);

type MonthSelectProps = {
  value: number;
  onChange: (month: number) => void;
};

export function MonthSelect({value, onChange}: MonthSelectProps) {
  const flatListRef = useRef<FlatList>(null);

  const months = [
    {id: 0, name: 'Janeiro'},
    {id: 1, name: 'Fevereiro'},
    {id: 2, name: 'Março'},
    {id: 3, name: 'Abril'},
    {id: 4, name: 'Maio'},
    {id: 5, name: 'Junho'},
    {id: 6, name: 'Julho'},
    {id: 7, name: 'Agosto'},
    {id: 8, name: 'Setembro'},
    {id: 9, name: 'Outubro'},
    {id: 10, name: 'Novembro'},
    {id: 11, name: 'Dezembro'},
  ];

  useMemo(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        animated: true,
        index: value,
        viewPosition: 0.5,
      });
    }
  }, [value]);

  function handleOnPress(month: number) {
    onChange(month);
  }

  function nextMonth() {
    if (value < 11) {
      onChange(value + 1);
    }
  }

  function backMonth() {
    if (value > 0) {
      onChange(value - 1);
    }
  }

  const getItemLayout = (data: any, index: number) => {
    return {
      length: 95,
      offset: 95 * index,
      index,
    };
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icons} onPress={backMonth}>
        <CircleArrowLeft color={MStyles.colors.blackColor} />
      </TouchableOpacity>
      <FlatList
        data={months}
        ref={flatListRef}
        horizontal={true}
        scrollEnabled={false}
        getItemLayout={getItemLayout}
        showsHorizontalScrollIndicator={false}
        snapToAlignment={'center'}
        initialScrollIndex={value}
        renderItem={({item}) => {
          if (item.id === value) {
            return (
              <Item
                id={item.id}
                title={item.name}
                selected={true}
                onPress={handleOnPress}
              />
            );
          }
          return (
            <Item id={item.id} title={item.name} onPress={handleOnPress} />
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
      <TouchableOpacity style={styles.icons} onPress={nextMonth}>
        <CircleArrowRight color={MStyles.colors.blackColor} />
      </TouchableOpacity>
    </View>
  );
}
