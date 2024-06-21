import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';

type LoginProps = {
  navigation: () => any;
};

export default function Layout({navigation}: LoginProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../../assets/imgs/onboarding.png')}
      />
      <View style={styles.text}>
        <Text style={styles.title}>Make Your Financial </Text>
        <Text style={styles.title}>Management</Text>
        <Text style={styles.title}>Easier</Text>
        <Text style={styles.content}>
          Financy is a mobile application that can help you manage your finances
          in a simple way.
        </Text>
      </View>
      <TouchableOpacity onPress={navigation}>
        <View style={styles.buttonLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
