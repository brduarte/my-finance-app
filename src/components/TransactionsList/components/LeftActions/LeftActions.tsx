import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {Trash2} from 'lucide-react-native';
import {MStyles} from '../../../../views/style';
import {Text} from 'react-native';
import {styles} from './styles';
import {moderateScale} from '../../../../helpers/MetricsHelper.ts';

export function LeftActions(): React.JSX.Element {
  return (
    <RectButton>
      <Animated.View style={styles.container}>
        <Trash2 color={MStyles.colors.whiteColor} size={moderateScale(18)} />
        <Text style={styles.deleteText}>Apagar</Text>
      </Animated.View>
    </RectButton>
  );
}
