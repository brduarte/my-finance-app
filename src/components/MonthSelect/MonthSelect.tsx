import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {styles} from './styles';

import {DateHelper} from '../../helpers/DateHelper.ts';
import {CircleArrowLeft, CircleArrowRight} from 'lucide-react-native';
import {MStyles} from '../../views/style';

type ItemProps = {
  id: number;
  title: string;
  selected?: boolean;
  onPress: (month: number) => void;
};

const Item = ({title, selected, onPress, id}: ItemProps) => (
  <TouchableOpacity style={{marginHorizontal: 10}} onPress={() => onPress(id)}>
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

export function MonthSelect() {
  const flatListRef = useRef<FlatList>(null);

  const [selectedId, setSelectedId] = useState<number>(
    +DateHelper.getCurrentMonthNumber(),
  );

  useMemo(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        animated: true,
        index: selectedId,
        viewPosition: 0.5,
      });
    }
  }, [selectedId]);

  function handleOnPress(month: number) {
    setSelectedId(month);
  }

  function nextMonth() {
    if (selectedId < 11) {
      setSelectedId(selectedId + 1);
    }
  }

  function backMonth() {
    if (selectedId > 0) {
      setSelectedId(selectedId - 1);
    }
  }

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
        showsHorizontalScrollIndicator={false}
        snapToAlignment={'center'}
        renderItem={({item}) => {
          if (item.id === selectedId) {
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
