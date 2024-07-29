import {
  ActivityIndicator as AIReact,
  Modal,
  StatusBar,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './style';

export function ActivityIndicator() {
  return (
    <Modal transparent={true}>
      <StatusBar
        backgroundColor={'rgba(100, 100, 100, 0.6)'}
        barStyle={'dark-content'}
      />
      <View style={styles.container}>
        <AIReact size="large" style={styles.indicator} />
      </View>
    </Modal>
  );
}
