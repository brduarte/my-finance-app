import {StyleSheet} from 'react-native';
import {MStyles} from '../style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sessionTitle: {
    fontFamily: MStyles.fontFamilyPrimarySemiBold,
    fontSize: 20,
    color: MStyles.colors.blackColor,
    paddingHorizontal: 21,
    marginBottom: 10,
  },
  session: {
    marginVertical: 5,
    paddingHorizontal: 21,
  },
});
