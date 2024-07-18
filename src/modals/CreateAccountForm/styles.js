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
    paddingHorizontal: horizontalScale(21),
  },
  session: {
    marginVertical: verticalScale(5),
  },

  sessionColum: {
    flexDirection: 'row',
    marginVertical: verticalScale(5),
  },
  label: {
    marginBottom: verticalScale(5),
    color: MStyles.colors.blackColor,
  },
  inputMoney: {
    fontSize: moderateScale(20),
    fontFamily: MStyles.fontFamilyInterSemiBold,
  },

  buttonConfirm: {
    borderRadius: 8,
    paddingVertical: verticalScale(14),
    backgroundColor: MStyles.colors.greenColor,
    marginBottom: verticalScale(20),
    marginTop: verticalScale(20),
  },
  buttonText: {
    fontSize: moderateScale(18),
    textAlign: 'center',
    fontFamily: MStyles.fontFamilyInterSemiBold,
    color: MStyles.colors.whiteColor,
  },
});
