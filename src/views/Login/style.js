import {StyleSheet} from 'react-native';
import {MStyles} from '../style';

export const styles = StyleSheet.create({
  title: {
    fontFamily: MStyles.fontFamilyPrimaryBold,
    color: MStyles.colors.blackColor,
    fontSize: 28,
    marginBottom: 24,
    marginTop: 74,
  },
  label: {
    fontFamily: MStyles.fontFamilyPrimaryRegular,
    fontSize: 13,
    color: MStyles.colors.blackColor,
    marginBottom: 12,
  },
  container: {
    flex: 1,
    marginHorizontal: 23,
  },
  sections: {
    marginBottom: 30,
  },
  buttonLogin: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    paddingVertical: 14,
    backgroundColor: MStyles.colors.blackColor,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: MStyles.fontFamilyPrimaryRegular,
    color: MStyles.colors.whiteColor,
  },
});
