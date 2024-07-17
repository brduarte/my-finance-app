import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../helpers/MetricsHelper';
import {MStyles} from '../../views/style';

export const styles = StyleSheet.create({
  selectType: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(16),
    borderRadius: 9,
    backgroundColor: MStyles.colors.greyColorBackground,
  },
  selectItemIcon: {
    width: moderateScale(45),
    height: moderateScale(45),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    marginRight: verticalScale(12),
    borderWidth: 1.5,
    borderRadius: 100,
    borderColor: MStyles.colors.greyColor,
  },
  selectItemText: {
    color: MStyles.colors.blackColor,
    fontFamily: MStyles.fontFamilyInterSemiBold,
  },
  selectItemTag: {
    flex: 1,
    alignItems: 'flex-end',
    fontFamily: MStyles.fontFamilyInterSemiBold,
  },
  selectItemTagText: {
    color: MStyles.colors.blackColor,
    fontFamily: MStyles.fontFamilyInterSemiBold,
    paddingHorizontal: horizontalScale(15),
    paddingVertical: horizontalScale(8),
    borderRadius: 20,
    backgroundColor: '#d5d1d1',
  },
  // Option Elment
  selectOptionItemContainer: {
    paddingHorizontal: MStyles.padding.horizontal,
  },
  selectOptionItem: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: horizontalScale(10),
  },
  selectOptionItemIcon: {
    width: moderateScale(45),
    height: moderateScale(45),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(15),
    marginRight: verticalScale(12),
    borderRadius: 100,
    backgroundColor: MStyles.colors.greyColorBackground,
  },
  selectOptionItemTextContainer: {
    marginLeft: verticalScale(15),
  },
  selectOptionItemText: {
    flex: 1,
  },
  selectOptionItemTextTitle: {
    fontFamily: MStyles.fontFamilyInterSemiBold,
    fontSize: moderateScale(15),
    color: MStyles.colors.blackColor,
  },
  selectOptionItemTextDescription: {
    fontFamily: MStyles.fontFamilyInterRegular,
    fontSize: moderateScale(12),
  },
});

export const disabledStyles = StyleSheet.create({
  selectType: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(16),
    borderRadius: 9,
    backgroundColor: '#f0f0f0',
  },
  selectItemIcon: {
    width: moderateScale(45),
    height: moderateScale(45),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    marginRight: verticalScale(12),
    borderWidth: 1.5,
    borderRadius: 50,
    borderColor: '#e0e0e0',
  },
  selectItemText: {
    fontSize: moderateScale(12, 0.5),
    color: '#a0a0a0',
    fontFamily: MStyles.fontFamilyInterSemiBold,
  },
  selectItemTag: {
    flex: 1,
    alignItems: 'flex-end',
    fontFamily: MStyles.fontFamilyInterSemiBold,
  },
  selectItemTagText: {
    color: MStyles.colors.blackColor,
    fontFamily: MStyles.fontFamilyInterSemiBold,
    paddingHorizontal: horizontalScale(15),
    paddingVertical: horizontalScale(8),
    borderRadius: 20,
    backgroundColor: '#d5d1d1',
  },
});
