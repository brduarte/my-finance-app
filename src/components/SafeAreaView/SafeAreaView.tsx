import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import React from 'react';

type SafeAreaProps = {
  children: React.JSX.Element;
};

export function SafeAreaView({children}: SafeAreaProps): React.JSX.Element {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      {children}
    </View>
  );
}
