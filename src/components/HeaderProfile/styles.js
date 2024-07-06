import {StyleSheet} from 'react-native';
import {MStyles} from '../../views/style';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 9,
  },
  imageSession: {
    marginRight: 12,
    borderRadius: 30,
    flex: 0.6,
    width: '100%',
    height: '100%',
  },
  sectionText: {
    flex: 4,
  },
  subText: {
    color: MStyles.colors.blackColor,
    fontFamily: MStyles.fontFamilyInterRegular,
    fontSize: 12,
  },
  textName: {
    color: MStyles.colors.blackColor,
    fontFamily: MStyles.fontFamilyPrimarySemiBold,
    fontSize: 18,
  },
});
