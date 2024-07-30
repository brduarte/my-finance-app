import {StyleSheet} from 'react-native';
import {MStyles} from '../../views/style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: MStyles.colors.whiteColor,
  },
  indicator: {
    padding: 12,
    backgroundColor: '#555',
    borderRadius: 12,
  },
});
