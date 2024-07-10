import {StyleSheet} from 'react-native';
import {MStyles} from '../style';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../helpers/MetricsHelper';

export const styles = StyleSheet.create({
  title: {
    fontFamily: MStyles.fontFamilyPrimaryBold,
    color: MStyles.colors.blackColor,
    fontSize: moderateScale(28),
    marginBottom: verticalScale(24),
    marginTop: verticalScale(74),
  },
  label: {
    fontFamily: MStyles.fontFamilyPrimaryRegular,
    fontSize: moderateScale(13),
    color: MStyles.colors.blackColor,
    marginBottom: verticalScale(12),
  },
  container: {
    flex: 1,
    marginHorizontal: horizontalScale(23),
  },
  sections: {
    marginBottom: verticalScale(30),
  },
  buttonLogin: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    paddingVertical: verticalScale(14),
    backgroundColor: MStyles.colors.blackColor,
  },
  buttonText: {
    fontSize: moderateScale(18),
    textAlign: 'center',
    fontFamily: MStyles.fontFamilyPrimarySemiBold,
    color: MStyles.colors.whiteColor,
  },
});
