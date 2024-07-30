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
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: verticalScale(16),
    paddingHorizontal: horizontalScale(21),
  },
  sessionTitleText: {
    flex: 1,
    fontFamily: MStyles.fontFamilyPrimarySemiBold,
    fontSize: moderateScale(20),
    color: MStyles.colors.blackColor,
  },

  sessionSessionTitleTag: {
    fontFamily: MStyles.fontFamilyInterSemiBold,
    fontSize: moderateScale(14),
    color: MStyles.colors.blueColor,
  },

  session: {
    marginBottom: verticalScale(32),
    paddingHorizontal: horizontalScale(21),
  },
});
