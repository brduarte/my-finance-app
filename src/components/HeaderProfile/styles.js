import {StyleSheet} from 'react-native';
import {MStyles} from '../../views/style';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../helpers/MetricsHelper';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: verticalScale(9),
    marginTop: verticalScale(5),
    paddingHorizontal: horizontalScale(21),
    marginBottom: verticalScale(11),
  },
  imageSession: {
    marginRight: 12,
    borderRadius: 30,
    aspectRatio: 4 / 4,
    width: horizontalScale(35.56),
    height: verticalScale(36),
  },
  sectionText: {},
  subText: {
    color: MStyles.colors.blackColor,
    fontFamily: MStyles.fontFamilyInterRegular,
    fontSize: moderateScale(12),
    marginBottom: verticalScale(-6),
  },
  textName: {
    color: MStyles.colors.blackColor,
    fontFamily: MStyles.fontFamilyPrimarySemiBold,
    fontSize: moderateScale(18),
  },
});
