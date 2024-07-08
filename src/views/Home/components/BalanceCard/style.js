import {StyleSheet} from 'react-native';
import {MStyles} from '../../../style';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  value: {
    color: MStyles.colors.whiteColor,
    fontFamily: MStyles.fontFamilyPrimarySemiBold,
    fontSize: 32,
  },
  cardTitle: {
    fontFamily: MStyles.fontFamilyInterRegular,
    fontSize: 14,
    color: MStyles.colors.whiteColor,
  },
  backgroundImage: {
    borderRadius: 10,
  },
  icon: {
    backgroundColor: MStyles.colors.whiteColor,
    padding: 4,
    borderRadius: 20,
  },
  walletBottom: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
    color: MStyles.colors.whiteColor,
  },
  walletBottomText: {
    fontFamily: MStyles.fontFamilyInterRegular,
    fontSize: 12,
    marginRight: 8,
    color: MStyles.colors.whiteColor,
  },
  walletBottomTextIcon: {
    backgroundColor: MStyles.colors.whiteColor,
    borderRadius: 100,
    padding: 12,
  },
});
