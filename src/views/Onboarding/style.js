import {Dimensions, StyleSheet} from 'react-native';
import {MStyles} from '../style';
import {moderateScale, verticalScale} from '../../helpers/MetricsHelper';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MStyles.colors.blackColor,
    padding: verticalScale(32),
  },
  image: {
    alignSelf: 'center',
    width: '100%',
    height: verticalScale(width),
  },
  buttonLogin: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    paddingVertical: verticalScale(14),
    backgroundColor: MStyles.colors.whiteColor,
  },
  text: {
    marginBottom: verticalScale(44),
  },
  title: {
    fontSize: moderateScale(32, 0.5),
    fontFamily: MStyles.fontFamilyPrimarySemiBold,
    color: MStyles.colors.whiteColor,
  },
  content: {
    fontSize: moderateScale(14, 0.2),
    color: '#CFCFCF',
  },
  buttonText: {
    fontSize: moderateScale(18),
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: MStyles.fontFamilyPrimaryRegular,
    color: MStyles.colors.blackColor,
  },
});
