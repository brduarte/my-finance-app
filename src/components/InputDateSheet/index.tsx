import {Text, TextInput, View} from 'react-native';
import {styles} from './style';
import React, {useMemo, useState} from 'react';
import {useBottomSheet} from '../../contexts/BottomSheetContext.tsx';
import {Calendar} from 'react-native-calendars';
import {MStyles} from '../../views/style';

type InputDateSheetProps = {
  placeholder?: Date;
  locale?: 'pt-BR';
};

export function InputDateSheet({
  placeholder,
}: InputDateSheetProps): React.JSX.Element {
  const [isFocus, setFocus] = useState<boolean>(false);
  const [selected, setSelected] = useState('2024-07-16');
  const modal = useBottomSheet();

  function onTouchStart() {
    setFocus(true);
    modal.open();
    modal.setChildren(
      <Calendar
        theme={{selectedDayBackgroundColor: MStyles.colors.blackColor}}
        current={selected}
        markedDates={{
          [selected]: {
            selected: true,
          },
        }}
        onDayPress={day => setSelected(day.dateString)}
      />,
    );
  }

  function handleStyleFocus() {
    let result = {...styles.container};

    if (isFocus) {
      result = {...styles.container, ...styles.focus};
    }

    return result;
  }

  function handleBlur() {
    setFocus(false);
  }

  return (
    <TextInput
      focusable={false}
      showSoftInputOnFocus={false}
      caretHidden={true}
      style={handleStyleFocus()}
      onPress={onTouchStart}
      onBlur={handleBlur}
    />
  );
}
