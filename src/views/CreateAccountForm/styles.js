import {StyleSheet} from 'react-native';
import {MStyles as Mstyles, MStyles} from '../style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 21,
  },
  session: {
    marginVertical: 5,
  },
  label: {
    marginBottom: 10,
    color: Mstyles.colors.blackColor,
  },
  inputMoney: {
    fontSize: 20,
    fontFamily: MStyles.fontFamilyInterSemiBold,
  },
  selectType: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 9,
    backgroundColor: '#f2f2f2',
  },
  selectItemIcon: {
    padding: 10,
    marginRight: 12,
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
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#d5d1d1',
  },
});
