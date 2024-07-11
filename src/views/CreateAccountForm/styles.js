import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../helpers/MetricsHelper';
import {MStyles} from '../style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(21),
  },
  session: {
    marginVertical: verticalScale(5),
  },
  label: {
    marginBottom: verticalScale(10),
    color: MStyles.colors.blackColor,
  },
  inputMoney: {
    fontSize: moderateScale(20),
    fontFamily: MStyles.fontFamilyInterSemiBold,
  },
});
