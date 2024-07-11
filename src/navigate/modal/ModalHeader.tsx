import {TouchableOpacity} from 'react-native';
import {X} from 'lucide-react-native';
import {MStyles} from '../../views/style';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

export function ModalHeaderLeft() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={navigation.goBack} style={styles.container}>
      <X color={MStyles.colors.greyColor} strokeWidth={2.5} />
    </TouchableOpacity>
  );
}
