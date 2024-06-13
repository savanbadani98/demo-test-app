import {SafeAreaView, View, Text, LogBox, BackHandler} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

//components
import Auth from '../../../auth';
import TitleTextInputField from '../../../components/TitleTextInputField';
import strings from '../../../translation/en.json';
import Header from '../../../components/Header';
import CustomButton from '../../../components/CustomButton';
import {showAlertMessage} from '../../../components/Helper';

// styles
import PageStyles from './styles';
import Styles from '../../../styles/Styles';
import COLOR from '../../../styles/Color';
import {horizontalScale} from '../../../utils/Utils';

LogBox.ignoreAllLogs();

const LogicScreen = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const [nonDuplicateStr, setNonDuplicateStr] = useState('');

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }

  const updateMasterState = (attrName, value) => {
    if (attrName === 'text') {
      setValue(value);
    }
  };

  function removeDuplicate(str, n) {
    if (value === '' || value == null) {
      showAlertMessage(strings.enter_text_error, 2);
    } else {
      let string = str?.split('');
      var index = 0;
      for (var i = 0; i < n; i++) {
        var j;
        for (j = 0; j < i; j++) {
          if (string[i] == string[j]) {
            break;
          }
        }

        if (j == i) {
          string[index++] = str[i];
        }
      }
      let newStr = string.join('').slice(string, index);
      showAlertMessage(strings.remove_duplicate_successs, 1);
      setNonDuplicateStr(newStr);
    }
  }

  return (
    <SafeAreaView style={Styles.screen}>
      <View style={{...Styles.screen}}>
        <Header isBackIcon={true} title={strings.find_multi} />
        <View style={PageStyles.textFieldContainer}>
          <TitleTextInputField
            title={strings.enter_string}
            type={'text'}
            value={value}
            attrName={'text'}
            placeholder={strings.enter_string}
            autoCorrect={false}
            autoCapitalizeType={'none'}
            keyboardType={'default'}
            isPasswordVisible={true}
            updateMasterState={updateMasterState}
            style={PageStyles.textFieldView}
            titleTextStyle={PageStyles.titleTextStyle}
            inputContainer={PageStyles.inputContainer}
            inputStyle={PageStyles.inputStyle}
          />
          {nonDuplicateStr && nonDuplicateStr?.length !== 0 ? (
            <View>
              <Text style={{...Styles.text2, ...PageStyles.subTitleText}}>
                {strings.non_repeated_character}:&nbsp;
              </Text>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: COLOR.AZUREISHWHITE,
                  paddingHorizontal: horizontalScale(8),
                  borderRadius: horizontalScale(10),
                  height: horizontalScale(45),
                  justifyContent: 'center',
                  marginBottom: horizontalScale(10),
                }}>
                <Text style={{...Styles.text2, ...PageStyles.ansText}}>
                  {nonDuplicateStr}
                </Text>
              </View>
            </View>
          ) : null}
          <View style={{...Styles.headerContainer}}>
            <CustomButton
              onPress={() => navigation.goBack()}
              text={strings.cancel}
              btnStyle={{
                ...PageStyles.btnView1,
              }}
              btnTextStyle={{
                color: COLOR.SECONDARY,
              }}
            />
            <CustomButton
              onPress={() => removeDuplicate(value, value?.length)}
              text={strings.find_multi}
              btnStyle={{
                ...PageStyles.btnView,
                backgroundColor: COLOR.SECONDARY,
              }}
              btnTextStyle={PageStyles.btnText}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LogicScreen;
