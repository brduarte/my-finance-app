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
    marginBottom: verticalScale(10),
  },
  title: {
    fontSize: moderateScale(28),
    color: MStyles.colors.blackColor,
    fontFamily: MStyles.fontFamilyInterBold,
  },
  backButton: {
    width: 38,
    height: 38,
    backgroundColor: MStyles.colors.greyColorBackground,
    paddingHorizontal: horizontalScale(5),
    paddingVertical: verticalScale(5),
    borderRadius: 50,
    marginTop: verticalScale(10),
    marginBottom: verticalScale(15),

    alignItems: 'center',
    justifyContent: 'center',
  },
});
