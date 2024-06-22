import {StyleSheet} from 'react-native';
import {MStyles} from '../style';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MStyles.colors.blackColor,
    paddingHorizontal: 32,
  },
  image: {
    width: '100%',
  },
  buttonLogin: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    paddingVertical: 14,
    backgroundColor: MStyles.colors.whiteColor,
  },
  text: {
    marginBottom: 44,
  },
  title: {
    fontSize: 32,
    fontFamily: MStyles.fontFamilyPrimarySemiBold,
    color: MStyles.colors.whiteColor,
  },
  content: {
    fontSize: 14,
    color: '#CFCFCF',
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: MStyles.fontFamilyPrimaryRegular,
    color: MStyles.colors.blackColor,
  },
});
