import {Text, TouchableOpacity, View} from 'react-native';
import {X} from 'lucide-react-native';
import {MStyles} from '../../views/style';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

type ModalHeaderProps = {
  children?: React.ReactNode;
};

export function ModalHeader({children}: ModalHeaderProps): React.JSX.Element {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
        <X color={MStyles.colors.greyColor} strokeWidth={2.5} />
      </TouchableOpacity>
      {children ? <Text style={styles.title}>{children}</Text> : <></>}
    </View>
  );
}
