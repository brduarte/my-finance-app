import {StyleSheet} from 'react-native';
import {MStyles} from '../../../style';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../helpers/MetricsHelper';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: verticalScale(24),
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontFamily: MStyles.fontFamilyInterSemiBold,
    color: MStyles.colors.blackColor,
    marginBottom: verticalScale(12),
    fontSize: moderateScale(20),
  },
  subtext: {
    textAlign: 'center',
    fontFamily: MStyles.fontFamilyPrimaryRegular,
    fontSize: moderateScale(14),
    marginBottom: verticalScale(26),
  },

  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: horizontalScale(80),
    height: horizontalScale(80),
    borderRadius: moderateScale(10),
  },
  icon: {
    marginBottom: verticalScale(18),
    width: horizontalScale(62),
    height: verticalScale(62),
  },

  containerButtons: {
    width: '100%',
  },

  sessionButtons: {
    flexDirection: 'row',
  },

  buttonDefault: {
    borderRadius: 8,
    marginHorizontal: horizontalScale(2.5),
    paddingVertical: verticalScale(14),
    backgroundColor: MStyles.colors.redColorBackground,
    marginBottom: verticalScale(12),
  },

  buttonDefaultText: {
    fontSize: moderateScale(16),
    textAlign: 'center',
    fontFamily: MStyles.fontFamilyInterSemiBold,
    color: MStyles.colors.greyColor,
  },

  buttonCancelAll: {
    backgroundColor: MStyles.colors.greyColorBackground,
  },

  buttonCancelAction: {
    backgroundColor: MStyles.colors.greenColor,
  },

  buttonCancelActionText: {
    color: MStyles.colors.greyColorBackground,
  },
});
