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
    // backgroundColor: 'pink',
  },
  btnText: {color: COLOR.WHITE, textTransform: 'none'},
  btnView: {
    width: windowWidth / 4,
    justifyContent: 'center',
    height: RFValue(40),
  },
  btnView1: {
    justifyContent: 'center',
    height: RFValue(40),
    width: windowWidth / 1.6,
    backgroundColor: COLOR.SECONDARY,
  },
  listEmptyComponentStyle: {
    marginTop: windowWidth * 0.2,
    backgroundColor: '',
  },
  noDataText: {
    textTransform: 'none',
    textAlign: 'center',
  },
  renderItemView: {
    backgroundColor: COLOR.WHITE,
    paddingVertical: horizontalScale(10),
    paddingHorizontal: horizontalScale(10),
    borderRadius: horizontalScale(8),
  },
  textFieldView: {
    marginTop: horizontalScale(16),
    marginBottom: horizontalScale(16),
  },
  titleTextStyle: {
    fontSize: RFValue(14),
    color: COLOR.BLACKCORAL,
    textTransform: 'none',
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
  itemText: {
    color: COLOR.BLACKCORAL,
    textTransform: 'none',
    fontWeight: '600',
  },
  titleText: {
    color: COLOR.RICHBLACK,
    textTransform: 'none',
    fontWeight: '700',
  },
  verticalModalLine: {
    height: RFValue(1),
    width: '100%',
    marginTop: horizontalScale(10),
  },
  inputStyle: {
    fontWeight: '500',
    paddingLeft: verticalScale(10),
  },
  listView: {
    marginTop: horizontalScale(20),
  },
  textFieldContainer: {
    flex: 1,
    paddingHorizontal: horizontalScale(20),
  },
});

export default PageStyles;
