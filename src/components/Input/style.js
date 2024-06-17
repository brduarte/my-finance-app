import {StyleSheet} from 'react-native';
import {MStyles} from '../../views/style';

export const styles = StyleSheet.create({
  input: {
    padding: 19,
    borderWidth: 2,
    borderColor: '#E7EAEB',
    borderRadius: MStyles.border.defaultRadius,
    fontSize: 13,
    color: MStyles.colors.blackColor,
  },
  focus: {
    borderColor: MStyles.colors.blackColor,
  },
});
