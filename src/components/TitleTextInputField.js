import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import {horizontalScale, verticalScale} from '../utils/Utils';
import COLOR from '../styles/Color';
import Styles from '../styles/Styles';
import VisibilityIcon from '../styles/assets/svg/visibility.svg';
import VisibilityHiddenIcon from '../styles/assets/svg/visibility-hidden.svg';

const TitleTextInputField = props => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const handlePasswordVisibility = updateValue => {
    if (isPasswordVisible) {
      setIsPasswordVisible(false);
    } else {
      setIsPasswordVisible(true);
    }
  };

  const _onChangeText = updateValue => {
    const {attrName, updateMasterState, data} = props;
    updateMasterState(attrName, updateValue, data);
  };

  return (
    <View style={{...styles.container, ...props.style}}>
      {props?.title ? (
        <Text
          style={{
            ...Styles.text3,
            ...styles.titleText,
            ...props.titleTextStyle,
          }}>
          {props.title}
          {props.isMandatory ? (
            <Text style={{...Styles.text3, ...styles.signText}}>*</Text>
          ) : null}
        </Text>
      ) : null}
      <View
        style={{
          ...styles.flexView,
          ...props.inputContainer,
        }}>
        <TextInput
          maxLength={props.maxLength}
          value={props.value}
          underlineColorAndroid="transparent"
          editable={props.editable}
          secureTextEntry={props.type == 'password' ? isPasswordVisible : false}
          returnKeyLabel="Done"
          returnKeyType="done"
          keyboardType={props.keyboardType}
          onChangeText={_onChangeText}
          placeholder={props.placeholder}
          blurOnSubmit={props.blurOnSubmitValue}
          autoCapitalize={props.autoCapitalizeType}
          autoCorrect={false}
          placeholderTextColor={COLOR.CSILVER}
          multiline={props.multiline}
          style={{
            ...styles.textInput,
            ...Styles.text2,
            ...props.inputStyle,
            textTransform: 'none',
            ...(props.type == 'password'
              ? {
                  color: COLOR.BLACK,
                  paddingRight: horizontalScale(39),
                }
              : {
                  color: COLOR.BLACK,
                }),
          }}
        />
        {props.type === 'password' ? (
          <Pressable
            onPress={handlePasswordVisibility}
            style={styles.iconBtnStyle}>
            {isPasswordVisible == false ? (
              <VisibilityIcon
                height={horizontalScale(22)}
                width={horizontalScale(22)}
              />
            ) : (
              <VisibilityHiddenIcon
                height={horizontalScale(22)}
                width={horizontalScale(22)}
              />
            )}
          </Pressable>
        ) : null}
        {props.iconSource ? (
          <Pressable
            onPress={props.iconOnPress}
            style={{...styles.iconBtnStyle, ...props.iconBtnView}}>
            {props.iconSource}
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: horizontalScale(80),
  },
  flexView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  iconBtnStyle: {
    marginRight: verticalScale(5),
  },
  signText: {
    color: COLOR.CAROLRED,
  },
  textInput: {
    height: horizontalScale(45),
    flex: 1,
    justifyContent: 'center',
    paddingVertical: verticalScale(5),
    paddingLeft: horizontalScale(5),
  },
  titleText: {
    fontWeight: '500',
  },
});

export default TitleTextInputField;
