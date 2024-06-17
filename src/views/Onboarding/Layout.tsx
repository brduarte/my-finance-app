import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';

type LoginProps = {
  navigation: () => any;
};

export default function Layout({navigation}: LoginProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigation}>
        <View style={styles.buttonLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.text}>
        <Text style={styles.title}>Domine suas Finanças Hoje</Text>
        <Text style={styles.content}>
          Tenha controle e visibilidade total do seu dinheiro em cada etapa do
          gerenciamento financeiro.
        </Text>
      </View>
      <Image
        style={styles.image}
        source={require('../../assets/icons/money.png')}
      />
    </View>
  );
}
