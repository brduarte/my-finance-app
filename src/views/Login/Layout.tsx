import React from 'react';
import {
  NativeSyntheticEvent,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Input from '../../components/Input';
import {styles} from './style';
import {TextInputChangeEventData} from 'react-native/Libraries/Components/TextInput/TextInput';
import {MStyles} from '../style';

type LoginProps = {
  handleForm: (text: string, key: string) => void;
  onBlurEmail: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onFormSubmit: () => void;
};

export default function Layout({
  onBlurEmail,
  handleForm,
  onFormSubmit,
}: LoginProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={MStyles.colors.whiteColor}
        barStyle={'dark-content'}
      />
      <Text style={styles.title}>Entrar</Text>

      <View style={styles.sections}>
        <Text style={styles.label}>E-mail</Text>
        <Input
          placeholder={'email@example.com'}
          keyboardType={'email-address'}
          onBlur={onBlurEmail}
          isError={true}
          onChangeText={text => handleForm(text, 'email')}
        />
      </View>

      <View style={styles.sections}>
        <Text style={styles.label}>Senha</Text>
        <Input
          type={'password'}
          placeholder={'*****'}
          keyboardType={'number-pad'}
          maxLength={8}
          onChangeText={text => handleForm(text, 'password')}
        />
      </View>

      <View style={styles.sections}>
        <TouchableOpacity onPress={onFormSubmit}>
          <View style={styles.buttonLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
