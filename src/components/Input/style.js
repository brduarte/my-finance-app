import {StyleSheet} from 'react-native';
import {MStyles} from '../../views/style';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../helpers/MetricsHelper';

export const styles = StyleSheet.create({
  input: {
    paddingHorizontal: horizontalScale(19),
    paddingVertical: verticalScale(19),
    borderWidth: 2,
    borderColor: '#E7EAEB',
    borderRadius: MStyles.border.defaultRadius,
    fontSize: moderateScale(16),
    fontFamily: MStyles.fontFamilyInterRegular,
    color: MStyles.colors.blackColor,
  },
  focus: {
    borderColor: MStyles.colors.blackColor,
  },
  error: {
    borderColor: '#cb0000',
  },
  errorText: {
    fontSize: moderateScale(12),
    marginTop: verticalScale(2),
    fontFamily: MStyles.fontFamilyInterRegular,
    color: '#cb0000',
  },
});
