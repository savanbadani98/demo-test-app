import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import COLOR from '../../../styles/Color';
import {horizontalScale, verticalScale} from '../../../utils/Utils';

const windowWidth = Dimensions.get('window').width;

const PageStyles = StyleSheet.create({
  btnListContainer: {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  btnText: {color: COLOR.WHITE, textTransform: 'none'},
  btnView: {
    width: windowWidth / 2.4,
    justifyContent: 'center',
    height: RFValue(40),
  },
  btnView1: {
    justifyContent: 'center',
    height: RFValue(40),
    width: windowWidth / 2.4,
    backgroundColor: COLOR.WHITE,
    borderColor: COLOR.SECONDARY,
    borderWidth: 1,
  },
  icon: {
    height: horizontalScale(26),
    width: horizontalScale(26),
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
  itemText: {
    fontWeight: '500',
    color: COLOR.BLACKCORAL,
  },
  listEmptyComponentStyle: {
    marginTop: windowWidth * 0.2,
    backgroundColor: '',
  },
  listView: {
    marginTop: horizontalScale(20),
  },
  noDataText: {
    textTransform: 'none',
    textAlign: 'center',
  },
  renderItemView: {
    backgroundColor: COLOR.BRIGHTGRAY,
    height: horizontalScale(50),
    paddingHorizontal: horizontalScale(10),
    marginHorizontal: horizontalScale(20),
    borderRadius: horizontalScale(8),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
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
  verticalModalLine: {
    height: RFValue(1),
    width: '100%',
    marginTop: horizontalScale(5),
  },
});

export default PageStyles;
