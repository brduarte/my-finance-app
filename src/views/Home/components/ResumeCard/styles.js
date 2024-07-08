import {StyleSheet} from 'react-native';
import {MStyles} from '../../../style';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 12,
  },
  session: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: MStyles.fontFamilyInterRegular,
    color: MStyles.colors.whiteColor,
    fontSize: 12,
  },
  text: {
    fontFamily: MStyles.fontFamilyInterSemiBold,
    fontSize: 15,
    color: MStyles.colors.whiteColor,
  },
  line: {
    borderWidth: 0.5,
    marginHorizontal: 15,
    borderColor: MStyles.colors.whiteColor,
  },
});
