import {Image, View} from 'react-native';
import React from 'react';

type EmptyStateProps = {
  children?: React.ReactNode;
};

export function EmptyState({children}: EmptyStateProps): React.ReactElement {
  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
      }}>
      <Image
        resizeMode={'center'}
        source={require('../../assets/imgs/empty.png')}
      />

      {children}
    </View>
  );
}
