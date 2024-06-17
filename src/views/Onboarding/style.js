import {StyleSheet} from 'react-native';
import {MStyles} from '../style';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse',
    marginHorizontal: 23,
  },

  image: {
    width: 224,
    height: 241,
    alignSelf: 'center',
  },
  buttonLogin: {
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    paddingVertical: 10,
    marginBottom: 27,
    backgroundColor: MStyles.colors.primaryColor,
  },
  text: {
    marginTop: 47.45,
    marginBottom: 104,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 8,
    color: MStyles.colors.primaryColor,
  },
  content: {
    fontSize: 24,
    fontFamily: MStyles.fontFamilyPrimaryRegular,
    color: MStyles.colors.blackColor,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: MStyles.fontFamilyPrimarySemiBold,
    color: MStyles.colors.whiteColor,
  },
});
