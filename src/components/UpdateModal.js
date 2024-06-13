import {
  View,
  Modal,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';

import COLOR from '../styles/Color';
import Styles from '../styles/Styles';
import CustomButton from './CustomButton';
import {horizontalScale, verticalScale} from '../utils/Utils';
import strings from '../translation/en.json';

const windowWidth = Dimensions.get('window').width;

const UpdateModal = props => {
  const [text, setText] = useState(props.editTask);

  return (
    <Modal
      animationType={'fade'}
      transparent={true}
      visible={props.isUpdateModal}
      onRequestClose={props.handleNo}>
      <View style={PageStyles.modalBackground}>
        <View style={{...PageStyles.modalView, ...props.containerStyle}}>
          <View style={PageStyles.textView}>
            <Text style={{...Styles.text2, ...PageStyles.titleTextStyle}}>
              {strings.update_title}
            </Text>
            <TextInput
              value={text}
              placeholder={strings.Enter_Text}
              autoCorrect={false}
              autoCapitalize={'words'}
              keyboardType={'default'}
              onChangeText={setText}
              style={{
                ...Styles.text2,
                ...PageStyles.inputStyle,
              }}
            />
          </View>
          <View style={{...Styles.headerContainer}}>
            <CustomButton
              onPress={props.handleNo}
              text={strings.cancel}
              btnStyle={{...PageStyles.btnView, backgroundColor: COLOR.WHITE}}
              btnTextStyle={{
                color: COLOR.SECONDARY,
              }}
            />
            <CustomButton
              onPress={props.handleYes}
              text={strings.update}
              btnStyle={{
                ...PageStyles.btnView,
                backgroundColor: COLOR.SECONDARY,
              }}
              btnTextStyle={PageStyles.btnText}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const PageStyles = StyleSheet.create({
  btnText: {color: COLOR.WHITE, textTransform: 'none'},
  btnView: {width: windowWidth / 3, justifyContent: 'center'},
  modalBackground: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalView: {
    width: windowWidth / 1.2,
    // height: windowWidth / 1.2,
    borderRadius: RFValue(16),
    backgroundColor: COLOR.WHITE,
    paddingTop: RFValue(20),
    paddingLeft: RFValue(20),
    paddingRight: RFValue(20),
    paddingBottom: RFValue(16),
  },
  subTextStyle: {
    fontWeight: '400',
    marginTop: horizontalScale(12),
    color: COLOR.BLACKCORAL,
    textAlign: 'center',
    textTransform: 'none',
  },
  textView: {
    marginBottom: horizontalScale(20),
  },
  titleInputTextStyle: {
    fontSize: RFValue(14),
    color: COLOR.BLACKCORAL,
    textTransform: 'none',
  },
  titleTextStyle: {
    fontSize: RFValue(20),
    textAlign: 'center',
    textTransform: 'none',
  },
  textFieldView: {
    marginTop: horizontalScale(16),
    marginBottom: horizontalScale(16),
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: RFValue(8),
    borderColor: COLOR.AZUREISHWHITE,
    marginTop: horizontalScale(8),
    paddingRight: verticalScale(5),
  },
  inputStyle: {
    height: horizontalScale(45),
    justifyContent: 'center',
    paddingVertical: verticalScale(5),
    paddingLeft: horizontalScale(5),
    borderWidth: 1,
    borderRadius: RFValue(8),
    borderColor: COLOR.AZUREISHWHITE,
    marginTop: horizontalScale(8),
    fontWeight: '500',
    textTransform: 'none',
  },
});

export default UpdateModal;
