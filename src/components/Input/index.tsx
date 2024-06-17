import React from 'react';

import {NativeSyntheticEvent, TextInput} from 'react-native';
import {
  KeyboardTypeOptions,
  TextInputChangeEventData,
} from 'react-native/Libraries/Components/TextInput/TextInput';
import {styles} from './style';

type Props = {
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  onFocus?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onChanged?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  type?: 'password';
  maxLength?: number;
};

export default function Input({
  placeholder,
  type,
  onFocus,
  keyboardType,
  maxLength,
}: Props): React.JSX.Element {
  let secureTextEntry = false;

  if (type === 'password') {
    secureTextEntry = true;
  }

  return (
    <TextInput
      keyboardType={keyboardType}
      placeholder={placeholder}
      onFocus={onFocus}
      secureTextEntry={secureTextEntry}
      style={styles.input}
      maxLength={maxLength}
    />
  );
}
