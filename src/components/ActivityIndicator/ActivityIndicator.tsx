import {
  ActivityIndicator as AIReact,
  Image,
  Modal,
  StatusBar,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import {MStyles} from '../../views/style';
import {Video} from 'lucide-react-native';

export function ActivityIndicator() {
  return (
    <Modal transparent={true}>
      <StatusBar
        backgroundColor={MStyles.colors.whiteColor}
        barStyle={'dark-content'}
      />
      <View style={styles.container}>
        <Image
          style={{width: 80, height: 80, resizeMode: 'contain'}}
          source={require('../../assets/imgs/loading.gif')}
        />
      </View>
    </Modal>
  );
}
