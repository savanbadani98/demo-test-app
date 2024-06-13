import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import COLOR from '../../../styles/Color';
import {horizontalScale, verticalScale} from '../../../utils/Utils';

const windowWidth = Dimensions.get('window').width;

const PageStyles = StyleSheet.create({
  btnListContainer: {
    // width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop:horizontalScale(12)
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
    color: COLOR.SECONDARY,
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
    paddingVertical: horizontalScale(14),
    paddingHorizontal: horizontalScale(10),
    marginHorizontal: horizontalScale(20),
    borderRadius: horizontalScale(8),
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // flexDirection: 'row',
  },
  textFieldContainer: {
    paddingHorizontal: horizontalScale(20),
  },
  textFieldView: {
    marginTop: horizontalScale(16),
    marginBottom: horizontalScale(16),
  },
  titleListContainer: {
    width: '58%',
  },
  titleTextStyle: {
    fontSize: RFValue(14),
    color: COLOR.BLACKCORAL,
    textTransform: 'none',
  },
  verticalModalLine: {
    height: RFValue(10),
    width: '100%',
    marginTop: horizontalScale(5),
  },
});

export default PageStyles;
