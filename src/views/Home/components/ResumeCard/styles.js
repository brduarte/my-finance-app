import {StyleSheet} from 'react-native';
import {MStyles} from '../../../style';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../helpers/MetricsHelper';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingVertical: horizontalScale(12),
    paddingHorizontal: horizontalScale(12),
    flexDirection: 'row',
  },
  icon: {
    marginRight: horizontalScale(10),
  },
  session: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: MStyles.fontFamilyInterRegular,
    color: MStyles.colors.whiteColor,
    fontSize: moderateScale(12),
  },
  text: {
    fontFamily: MStyles.fontFamilyInterSemiBold,
    fontSize: moderateScale(15),
    color: MStyles.colors.whiteColor,
  },
  line: {
    borderWidth: 0.5,
    marginHorizontal: horizontalScale(12),
    borderColor: MStyles.colors.whiteColor,
  },
});
