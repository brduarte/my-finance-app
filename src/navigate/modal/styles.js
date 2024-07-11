import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../helpers/MetricsHelper';
import {MStyles} from '../../views/style';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: MStyles.colors.greyColorBackground,
    paddingHorizontal: horizontalScale(5),
    paddingVertical: verticalScale(5),
    borderRadius: 50,
    marginRight: verticalScale(10),
  },
});
