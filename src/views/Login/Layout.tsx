import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Input from '../../components/Input';
import {styles} from './style';

export default function Layout(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>

      <View style={styles.sections}>
        <Text style={styles.label}>E-mail</Text>
        <Input
          placeholder={'email@example.com'}
          keyboardType={'email-address'}
        />
      </View>

      <View style={styles.sections}>
        <Text style={styles.label}>Senha</Text>
        <Input
          type={'password'}
          placeholder={'*****'}
          keyboardType={'number-pad'}
          maxLength={8}
        />
      </View>

      <View style={styles.sections}>
        <TouchableOpacity>
          <View style={styles.buttonLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
