import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../helpers/MetricsHelper';
import {MStyles} from '../../views/style';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: horizontalScale(19),
    paddingVertical: verticalScale(19),
    borderWidth: 2,
    borderColor: '#E7EAEB',
    borderRadius: MStyles.border.defaultRadius,
    color: MStyles.colors.blackColor,
    fontFamily: MStyles.fontFamilyInterRegular,
    fontSize: moderateScale(16),
  },
  focus: {
    borderColor: MStyles.colors.blackColor,
  },
  error: {
    borderColor: '#cb0000',
  },
  buttonText: {
    fontSize: moderateScale(18),
    textAlign: 'center',
    fontFamily: MStyles.fontFamilyInterSemiBold,
    color: MStyles.colors.whiteColor,
  },
  buttonConfirm: {
    borderRadius: 8,
    paddingVertical: verticalScale(14),
    backgroundColor: MStyles.colors.greenColor,
    marginBottom: verticalScale(20),
    marginTop: verticalScale(20),
  },
});
