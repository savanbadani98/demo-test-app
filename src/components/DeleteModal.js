import {View, Modal, Dimensions, StyleSheet, Text} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';

import COLOR from '../styles/Color';
import Styles from '../styles/Styles';
import CustomButton from './CustomButton';
import {horizontalScale} from '../utils/Utils';

const windowWidth = Dimensions.get('window').width;

const DeleteModal = props => {
  return (
    <Modal
      animationType={'fade'}
      transparent={true}
      visible={props.isModalShow}
      onRequestClose={props.onDecline}>
      <View style={PageStyles.modalBackground}>
        <View style={{...PageStyles.modalView, ...props.containerStyle}}>
          <View style={PageStyles.textView}>
            <Text style={{...Styles.text1, ...PageStyles.titleTextStyle}}>
              {props.title}
            </Text>
            <Text style={{...Styles.text3, ...PageStyles.subTextStyle}}>
              {props.subTitle}
            </Text>
            {props.subText ? (
              <Text style={{...Styles.text3, ...PageStyles.subTextStyle}}>
                {props.subText}
              </Text>
            ) : null}
          </View>
          <View style={{...Styles.headerContainer}}>
            <CustomButton
              onPress={props.handleNo}
              text={props.cancleText}
              btnStyle={{...PageStyles.btnView, backgroundColor: COLOR.WHITE}}
              btnTextStyle={{
                color:
                  props.type === 'delete' ? COLOR.CAROLRED : COLOR.SECONDARY,
              }}
            />
            <CustomButton
              onPress={props.handleYes}
              text={props.confirmText}
              btnStyle={{
                ...PageStyles.btnView,
                backgroundColor:
                  props.type === 'delete' ? COLOR.CAROLRED : COLOR.SECONDARY,
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
  heading1: {
    fontSize: RFValue(20),
    textTransform: 'uppercase',
    color: COLOR.PRIMARY,
  },
  heading2: {
    fontSize: RFValue(20),
    textTransform: 'uppercase',
    color: COLOR.SECONDARY,
  },
  iconStyle: {
    alignSelf: 'center',
    marginTop: horizontalScale(40),
    marginBottom: horizontalScale(20),
  },
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
  titleTextStyle: {
    fontSize: RFValue(20),
    textAlign: 'center',
    textTransform: 'none',
  },
});

export default DeleteModal;
