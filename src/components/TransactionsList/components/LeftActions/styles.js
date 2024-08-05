import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../helpers/MetricsHelper';
import {MStyles} from '../../../../views/style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    marginRight: verticalScale(5),
    paddingHorizontal: horizontalScale(20),
    backgroundColor: MStyles.colors.redColor,
    justifyContent: 'center',
    alignItems: 'center',
  },

  deleteText: {
    fontSize: moderateScale(10),
    fontFamily: MStyles.fontFamilyInterSemiBold,
    color: MStyles.colors.whiteColor,
  },
});
