import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../helpers/MetricsHelper';
import {MStyles} from '../../views/style';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 0.1,
    paddingHorizontal: horizontalScale(MStyles.padding.horizontal),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
