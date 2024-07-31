import {StyleSheet} from 'react-native';
import {MStyles} from '../../views/style';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../helpers/MetricsHelper';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: verticalScale(10),
    borderRadius: 50,
    backgroundColor: MStyles.colors.greyColorBackground,
  },
  itemText: {
    fontFamily: MStyles.fontFamilyInterSemiBold,
    fontSize: moderateScale(15),
  },

  icons: {
    marginHorizontal: horizontalScale(10),
  },

  itemSelectedText: {
    fontWeight: 'bold',
    fontSize: moderateScale(16.5),
    color: MStyles.colors.blackColor,
  },
});
