import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../helpers/MetricsHelper';
import {MStyles} from '../../views/style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontSize: moderateScale(35),
    color: MStyles.colors.blackColor,
    fontFamily: MStyles.fontFamilyInterSemiBold,
  },
  backButton: {
    width: 38,
    height: 38,
    backgroundColor: MStyles.colors.greyColorBackground,
    paddingHorizontal: horizontalScale(5),
    paddingVertical: verticalScale(5),
    borderRadius: 50,
    marginVertical: verticalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
