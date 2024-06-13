import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import COLOR from '../../../styles/Color';

const PageStyles = StyleSheet.create({
  firstView: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading1: {
    fontSize: RFValue(26),
    textTransform: 'capitalize',
    color: COLOR.PRIMARY,
  },
  heading2: {
    fontSize: RFValue(26),
    textTransform: 'capitalize',
    color: COLOR.SECONDARY,
  },
  iconStyle: {
    height: '20%',
    width: '22%',
  },
  secondView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subText: {
    fontSize: RFValue(14),
    color: COLOR.PRIMARY,
    fontWeight: '400',
  },
});

export default PageStyles;
