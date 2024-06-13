import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Styles from '../styles/Styles';
import {horizontalScale, verticalScale} from '../utils/Utils';
import COLOR from '../styles/Color';
import strings from '../translation/en.json';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../styles/assets/svg/arrow-left.svg';

const Header = ({title, isButton, onPress, isBackIcon}) => {
  const navigation = useNavigation();
  return (
    <View
      style={
        isButton
          ? {...Styles.headerContainer, ...PageStyles.containerView}
          : isBackIcon
          ? {...Styles.headerContainer, ...PageStyles.containerView}
          : {...PageStyles.container}
      }>
      {isBackIcon ? (
        <Pressable onPress={() => navigation.goBack()}>
          <BackIcon />
        </Pressable>
      ) : null}
      <Text style={{...Styles.text1, textAlign: 'center'}}>{title}</Text>
      {isButton ? (
        <Pressable onPress={onPress} style={PageStyles.btnView}>
          <Text style={{...Styles.text2, ...PageStyles.btnText}}>
            {strings.find_multi_char}
          </Text>
        </Pressable>
      ) : null}
       {isBackIcon ? (
        <Pressable style={{width:horizontalScale(10)}} />
      ) : null}
    </View>
  );
};

export default Header;

const PageStyles = StyleSheet.create({
  btnText: {
    color: COLOR.PRIMARY,
  },
  btnView: {
    paddingHorizontal: horizontalScale(8),
    paddingVertical: horizontalScale(5),
    borderWidth: 1,
    borderRadius: RFValue(8),
    borderColor: COLOR.PRIMARY,
  },
  container: {
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(16),
    backgroundColor: COLOR.WHITE,
  },
  containerView: {
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(16),
    backgroundColor: COLOR.WHITE,
  },
});
