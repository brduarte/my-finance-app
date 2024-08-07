import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import {Trash2} from 'lucide-react-native';
import {MStyles} from '../../../../views/style';
import {Animated, Text} from 'react-native';
import {styles} from './styles';
import {moderateScale} from '../../../../helpers/MetricsHelper.ts';

type LeftActionsProps = {
  deleteAction: () => void;
};

export function LeftActions({
  deleteAction,
}: LeftActionsProps): React.JSX.Element {
  return (
    <RectButton onPress={deleteAction}>
      <Animated.View style={styles.container}>
        <Trash2 color={MStyles.colors.whiteColor} size={moderateScale(18)} />
        <Text style={styles.deleteText}>Apagar</Text>
      </Animated.View>
    </RectButton>
  );
}
