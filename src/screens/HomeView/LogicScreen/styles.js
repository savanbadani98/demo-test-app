import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import COLOR from '../../../styles/Color';
import {horizontalScale, verticalScale} from '../../../utils/Utils';

const windowWidth = Dimensions.get('window').width;

const PageStyles = StyleSheet.create({
  ansText: {
    color: COLOR.SEAGREEN,
    textTransform: 'none',
  },
  btnListContainer: {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  btnText: {color: COLOR.WHITE, textTransform: 'none'},
  btnView: {
    width: windowWidth / 2,
    justifyContent: 'center',
    height: RFValue(40),
  },
  btnView1: {
    justifyContent: 'center',
    height: RFValue(40),
    width: windowWidth / 3,
    backgroundColor: COLOR.WHITE,
    borderColor: COLOR.SECONDARY,
    borderWidth: 1,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: RFValue(8),
    borderColor: COLOR.AZUREISHWHITE,
    marginTop: horizontalScale(8),
    paddingRight: verticalScale(5),
  },
  inputStyle: {
    fontWeight: '500',
    paddingLeft: verticalScale(10),
  },
  listEmptyComponentStyle: {
    marginTop: windowWidth * 0.2,
    backgroundColor: '',
  },
  subTitleText: {
    fontWeight: '500',
    color: COLOR.BLACKCORAL,
    marginBottom: horizontalScale(10),
  },
  textFieldContainer: {
    paddingHorizontal: horizontalScale(20),
  },
  textFieldView: {
    marginTop: horizontalScale(16),
    marginBottom: horizontalScale(16),
  },
  titleListContainer: {
    width: '60%',
  },
  titleTextStyle: {
    fontSize: RFValue(14),
    color: COLOR.BLACKCORAL,
    textTransform: 'none',
  },
});

export default PageStyles;
