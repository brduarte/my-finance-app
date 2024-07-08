import {StyleSheet} from 'react-native';
import {MStyles as mStyles, MStyles} from '../../views/style';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#f5f7f9',
    marginBottom: 12,
    borderRadius: 8,
  },
  value: {
    alignSelf: 'center',
    borderRadius: 1,
  },
  valueText: {
    fontFamily: MStyles.fontFamilyPrimarySemiBold,
    fontSize: 16,
    color: MStyles.colors.blackColor,
  },
  iconSession: {
    marginRight: 12,
    padding: 8,
    justifyContent: 'center',
  },
  text: {
    flex: 1,
  },
  itemTile: {
    fontSize: 16,
    fontFamily: MStyles.fontFamilyPrimarySemiBold,
    color: mStyles.colors.blackColor,
  },
  tagTitle: {
    fontSize: 14,
    fontFamily: MStyles.fontFamilyInterRegular,
    color: mStyles.colors.blackColor,
  },
});
