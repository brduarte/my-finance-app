import {Image, View} from 'react-native';
import React from 'react';
import {horizontalScale, verticalScale} from '../../helpers/MetricsHelper.ts';

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
        style={{
          width: horizontalScale(125),
          height: verticalScale(125),
          marginBottom: verticalScale(2.5),
          resizeMode: 'contain',
        }}
        source={require('../../assets/imgs/empty.png')}
      />

      {children}
    </View>
  );
}
