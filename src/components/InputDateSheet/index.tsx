import {Keyboard, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import React, {useEffect, useState} from 'react';
import {useBottomSheet} from '../../contexts/BottomSheetContext.tsx';
import {Calendar} from 'react-native-calendars';
import {MStyles} from '../../views/style';
import {DateHelper} from '../../helpers/DateHelper.ts';
import {moderateScale} from '../../helpers/MetricsHelper.ts';

type InputDateSheetProps = {
  placeholder?: Date;
  value?: Date;
  locale?: 'pt-BR';
  onChange?: (date: Date) => void;
};

export function InputDateSheet({
  placeholder,
  onChange,
  value,
}: InputDateSheetProps): React.JSX.Element {
  const [isFocus, setFocus] = useState<boolean>(false);
  const modal = useBottomSheet();
  const currentDate = DateHelper.toUsa(value || new Date());

  useEffect(() => {
    modal.setChildren(<DataPickerContentModal />);
  }, [value]);

  function onTouchStart() {
    Keyboard.dismiss();
    setFocus(true);
    modal.open();
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

  function handleConfirm() {
    modal.close();
  }

  function DataPickerContentModal(): React.JSX.Element {
    return (
      <>
        <Text style={styles.titleDatePicker}>Selecione a data inicial</Text>
        <Text>
          A data do primeiro pagamento servirá para definir a data de
          recebimento/vencimentos futuros, conforme o tipo de contas e o
          parcelamento selecionado.
        </Text>
        <Calendar
          theme={{
            selectedDayBackgroundColor: MStyles.colors.blackColor,
            arrowColor: MStyles.colors.blackColor,
            textDayStyle: {
              color: MStyles.colors.blackColor,
            },
            todayTextColor: MStyles.colors.greenColor,
            textDayFontSize: moderateScale(18),
          }}
          current={currentDate}
          markedDates={{
            [currentDate]: {
              selected: true,
            },
          }}
          onDayPress={date => {
            onChange
              ? onChange(new Date(date.year, date.month - 1, date.day))
              : console.log('No action implemented');
          }}
        />
        <TouchableOpacity onPress={handleConfirm}>
          <View style={styles.buttonConfirm}>
            <Text style={styles.buttonText}>Confirmar</Text>
          </View>
        </TouchableOpacity>
      </>
    );
  }

  return (
    <TextInput
      focusable={false}
      showSoftInputOnFocus={false}
      value={value ? DateHelper.toBr(value) : undefined}
      caretHidden={true}
      placeholder={placeholder ? DateHelper.toBr(placeholder) : undefined}
      style={handleStyleFocus()}
      onPress={onTouchStart}
      onBlur={handleBlur}
    />
  );
}
