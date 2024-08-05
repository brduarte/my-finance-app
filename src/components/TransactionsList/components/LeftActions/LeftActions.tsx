import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

export function LeftActions(): React.JSX.Element {
  return (
    <RectButton>
      <Animated.Text>Archive</Animated.Text>
    </RectButton>
  );
}
