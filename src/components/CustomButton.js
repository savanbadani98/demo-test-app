//import liraries
import React from 'react';
import {Text, StyleSheet, Pressable, View} from 'react-native';
import COLOR from '../styles/Color';
import Styles from '../styles/Styles';
import {RFValue} from 'react-native-responsive-fontsize';
import {horizontalScale} from '../utils/Utils';
const CustomButton = props => {
  return (
    <Pressable
      style={[
        {...componentStyle.container, ...props.btnStyle},
        props.marginTop && {marginTop: props.marginTop},
      ]}
      onPress={props.onPress}
      disabled={props.disabled}>
      {props.iconSource}
      <View>
        {props.text ? (
          <Text style={{...Styles.text2, ...props.btnTextStyle}}>
            {props.text}
          </Text>
        ) : null}
        {props.subText ? (
          <Text style={{...Styles.text3, ...props.btnsubTextStyle}}>
            {props.subText}
          </Text>
        ) : null}
      </View>
      {props.rightIconSource}
    </Pressable>
  );
};

const componentStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLOR.SECONDARY,
    borderRadius: RFValue(12),
    height: horizontalScale(50),
    width: '100%',
  },
});

export default CustomButton;
