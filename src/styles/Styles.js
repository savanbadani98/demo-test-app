import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import COLOR from './Color';
import FONTS from './Fonts';

const Styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainview: { flex: 1 },
  screen: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  screenAllCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.WHITE,
  },
  screenCenter: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLOR.WHITE,
  },
  text1: {
    fontFamily: FONTS.FAMILY_REGULAR,
    fontSize: RFValue(16),
    textTransform: 'capitalize',
    color: COLOR.RICHBLACK,
    fontWeight: '700',
  },
  text2: {
    fontFamily: FONTS.FAMILY_REGULAR,
    fontSize: RFValue(14),
    textTransform: 'capitalize',
    color: COLOR.RICHBLACK,
    fontWeight: '700',
  },
  text3: {
    fontFamily: FONTS.FAMILY_REGULAR,
    fontSize: RFValue(12),
    textTransform: 'capitalize',
    color: COLOR.RICHBLACK,
    fontWeight: '700',
  },
  textMeaage: {
    fontFamily: FONTS.FAMILY_REGULAR,
    fontSize: RFValue(11),
    color: COLOR.WHITE,
  }
});

export default Styles;
