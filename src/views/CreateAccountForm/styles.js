import {StyleSheet} from 'react-native';
import {MStyles as Mstyles, MStyles} from '../style';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../helpers/MetricsHelper';

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
    color: Mstyles.colors.blackColor,
  },
  inputMoney: {
    fontSize: moderateScale(20),
    fontFamily: MStyles.fontFamilyInterSemiBold,
  },
  selectType: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(16),
    borderRadius: 9,
    backgroundColor: '#f2f2f2',
  },
  selectItemIcon: {
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    marginRight: verticalScale(12),
    borderWidth: 1.5,
    borderRadius: 100,
    borderColor: '#bfbcbc',
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
});
