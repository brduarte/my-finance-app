import {StyleSheet} from 'react-native';
import {MStyles} from '../style';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../helpers/MetricsHelper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sessionTitle: {
    fontFamily: MStyles.fontFamilyPrimarySemiBold,
    fontSize: moderateScale(20),
    color: MStyles.colors.blackColor,
    marginBottom: verticalScale(16),
    paddingHorizontal: horizontalScale(21),
  },

  session: {
    marginBottom: verticalScale(32),
    paddingHorizontal: horizontalScale(21),
  },
});
