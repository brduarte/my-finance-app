import React, {useState} from 'react';

import {NativeSyntheticEvent, StyleProp, TextInput} from 'react-native';
import {
  KeyboardTypeOptions,
  TextInputChangeEventData,
} from 'react-native/Libraries/Components/TextInput/TextInput';
import {styles} from './style';
import {TextStyle} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type Props = {
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  type?: 'password';
  maxLength?: number;
  value?: string;
  isError?: boolean;
  errorText?: string;
  onChangeText?: (text: string) => void;
  style?: StyleProp<TextStyle>;
  onFocus?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onChanged?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
};

export default function Input({
  placeholder,
  type,
  onChangeText,
  onBlur,
  value,
  style,
  keyboardType,
  maxLength,
}: Props): React.JSX.Element {
  const [isFocus, setFocus] = useState<boolean>(false);

  let secureTextEntry = false;

  if (type === 'password') {
    secureTextEntry = true;
  }

  function handleStyleChange() {
    // @ts-ignore
    let result = {...styles.input, ...style};

    if (isFocus) {
      // @ts-ignore
      result = {...styles.input, ...style, ...styles.focus};
    }

    return result;
  }

  function handleFocus() {
    setFocus(true);
  }

  function handleBlur(e: NativeSyntheticEvent<TextInputChangeEventData>) {
    setFocus(false);
    if (onBlur) {
      onBlur(e);
    }
  }

  return (
    <TextInput
      keyboardType={keyboardType}
      placeholder={placeholder}
      onChangeText={onChangeText}
      onFocus={handleFocus}
      onBlur={handleBlur}
      value={value}
      secureTextEntry={secureTextEntry}
      style={handleStyleChange()}
      maxLength={maxLength}
    />
  );
}
