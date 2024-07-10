import {StyleSheet} from 'react-native';
import {MStyles} from '../../../style';
import {FontSizeHelper} from '../../../../helpers/FontSizeHelper';
import {moderateScale, verticalScale} from '../../../../helpers/MetricsHelper';

export const styles = StyleSheet.create({
  container: {
    marginBottom: verticalScale(16),
    paddingHorizontal: verticalScale(16),
    paddingVertical: verticalScale(16),
  },
  value: {
    color: MStyles.colors.whiteColor,
    fontFamily: MStyles.fontFamilyPrimarySemiBold,
    fontSize: moderateScale(30),
  },
  cardTitle: {
    fontFamily: MStyles.fontFamilyInterRegular,
    fontSize: moderateScale(14),
    color: MStyles.colors.whiteColor,
  },
  backgroundImage: {
    borderRadius: 10,
  },
  icon: {
    backgroundColor: MStyles.colors.whiteColor,
    paddingHorizontal: verticalScale(4),
    paddingVertical: verticalScale(4),
    borderRadius: 20,
  },
  walletBottom: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(14),
    color: MStyles.colors.whiteColor,
  },
  walletBottomText: {
    fontFamily: MStyles.fontFamilyInterRegular,
    fontSize: moderateScale(12),
    marginRight: 8,
    color: MStyles.colors.whiteColor,
  },
  walletBottomTextIcon: {
    backgroundColor: MStyles.colors.whiteColor,
    borderRadius: 100,
    paddingHorizontal: verticalScale(12),
    paddingVertical: verticalScale(12),
  },
});
