import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../helpers/MetricsHelper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(21),
  },
  filterContainer: {
    marginVertical: 15,
    marginTop: 5,
  },
});
