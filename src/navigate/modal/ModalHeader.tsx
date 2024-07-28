import {Text, TouchableOpacity, View} from 'react-native';
import {X} from 'lucide-react-native';
import {MStyles} from '../../views/style';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

type ModalHeaderProps = {
  title?: string;
};

export function ModalHeader({title}: ModalHeaderProps): React.JSX.Element {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
        <X color={MStyles.colors.greyColor} strokeWidth={2.5} />
      </TouchableOpacity>
      {title ? <Text style={styles.title}>{title}</Text> : <></>}
    </View>
  );
}
