import {StyleSheet} from 'react-native';
import {moderateScale} from '../../helpers/MetricsHelper';
import {MStyles} from '../../views/style';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: MStyles.colors.greyColorBackground,
    borderRadius: 20,
    justifyContent: 'center',
  },

  backgroundSelect: {
    position: 'absolute',
    backgroundColor: MStyles.colors.whiteColor,
    borderRadius: 15,
    marginLeft: 10,
  },

  textTab: {
    alignSelf: 'center',
    fontWeight: 600,
    fontSize: moderateScale(14),
  },

  pressable: {
    flex: 1,
    paddingVertical: 8,
  },
});
