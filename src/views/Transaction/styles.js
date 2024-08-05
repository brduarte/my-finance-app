import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../helpers/MetricsHelper';
import {MStyles} from '../style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sessionTitle: {
    paddingHorizontal: horizontalScale(21),
  },
  filterContainer: {
    backgroundColor: MStyles.colors.whiteColor,
    shadowColor: MStyles.colors.blackColor,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(21),
  },

  textEmpty: {
    textAlign: 'center',
    fontSize: moderateScale(16),
    color: MStyles.colors.blackColor,
    marginBottom: verticalScale(2),
    fontFamily: MStyles.fontFamilyInterRegular,
  },

  subTextEmpty: {
    textAlign: 'center',
  },
});
