import {StyleSheet} from 'react-native';
import {MStyles as mStyles, MStyles} from '../../views/style';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../helpers/MetricsHelper';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: verticalScale(8),
    marginBottom: verticalScale(5),
    borderRadius: 8,
  },
  value: {
    alignSelf: 'center',
    borderRadius: 1,
  },
  valueText: {
    fontFamily: MStyles.fontFamilyPrimarySemiBold,
    fontSize: moderateScale(16),
    color: MStyles.colors.blackColor,
  },
  iconSession: {
    width: 45,
    height: 45,
    alignItems: 'center',
    marginRight: 12,
    paddingHorizontal: horizontalScale(8),
    paddingVertical: verticalScale(8),
    justifyContent: 'center',
    backgroundColor: MStyles.colors.greyColorBackground,
    borderRadius: 40,
  },
  text: {
    flex: 1,
  },
  itemTile: {
    fontSize: moderateScale(16),
    fontFamily: MStyles.fontFamilyPrimarySemiBold,
    color: mStyles.colors.blackColor,
  },
  tagTitle: {
    fontSize: moderateScale(14),
    fontFamily: MStyles.fontFamilyInterRegular,
    color: mStyles.colors.blackColor,
  },
});
