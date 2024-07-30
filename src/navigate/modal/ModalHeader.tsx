import {Text, TouchableOpacity, View} from 'react-native';
import {ArrowLeft, X} from 'lucide-react-native';
import {MStyles} from '../../views/style';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

type ModalHeaderProps = {
  title?: string;
  icon?: 'arrow-back' | 'exit';
};

export function ModalHeader({
  title,
  icon,
}: ModalHeaderProps): React.JSX.Element {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {icon ? (
        <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
          {icon === 'arrow-back' ? (
            <ArrowLeft color={MStyles.colors.greyColor} strokeWidth={2.5} />
          ) : (
            <X color={MStyles.colors.greyColor} strokeWidth={2.5} />
          )}
        </TouchableOpacity>
      ) : (
        <></>
      )}
      {title ? <Text style={styles.title}>{title}</Text> : <></>}
    </View>
  );
}
