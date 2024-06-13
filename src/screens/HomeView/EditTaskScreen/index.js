import {
  SafeAreaView,
  View,
  Text,
  LogBox,
  BackHandler,
  Switch,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

//components
import Auth from '../../../auth';
import TitleTextInputField from '../../../components/TitleTextInputField';
import Header from '../../../components/Header';
import CustomButton from '../../../components/CustomButton';
import {showAlertMessage} from '../../../components/Helper';

// styles
import PageStyles from './styles';
import Styles from '../../../styles/Styles';
import strings from '../../../translation/en.json';
import COLOR from '../../../styles/Color';
import {TODOLIST} from '../../../constants';
import {horizontalScale} from '../../../utils/Utils';

LogBox.ignoreAllLogs();

let auth = new Auth();

const EditTaskScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [value, setValue] = useState(
    route?.params?.data ? route?.params?.data?.taskName : '',
  );
  const [isEnabled, setIsEnabled] = useState(
    route?.params?.data ? route?.params?.data?.isComplete : '',
  );
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [taskList, setTaskList] = useState([]);

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

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let jsonValue = await auth.getValue(TODOLIST);
    const jsonValue2 = JSON.parse(jsonValue);
    if (jsonValue2 == null) {
      setTaskList([]);
    } else {
      setTaskList(jsonValue2);
    }
  };

  const updateMasterState = (attrName, value) => {
    if (attrName === 'text') {
      setValue(value);
    }
  };

  const handleEditData = async () => {
    let jsonValue = await auth.getValue(TODOLIST);
    const jsonValue2 = JSON.parse(jsonValue);
    if (jsonValue2 == null) {
      setTaskList([]);
    } else {
      setTaskList(jsonValue2);
    }
    if (value === '' || value == null) {
      showAlertMessage(strings.add_task_error);
    } else if (
      value === route?.params?.data?.taskName &&
      isEnabled === route?.params?.data?.isComplete
    ) {
      showAlertMessage(strings.Please_Change_Something);
    } else {
      let ab = [...taskList];
      let dt = JSON.stringify({taskName: value, isComplete: isEnabled});
      var found = false;
      for (var i = 0; i < taskList.length; i++) {
        let dd = JSON.parse(taskList[i]);
        if (dd?.taskName == value && dd?.taskName == isEnabled) {
          found = true;
          break;
        }
      }
      if (found) {
        showAlertMessage(strings.data_exist, 2);
      } else {
        const index = route?.params?.idx;
        ab[index] = dt;
        let data = JSON.stringify(ab);
        console.log(data);
        await auth.setValue(TODOLIST, data);
        showAlertMessage(strings.data_update, 1);
        navigation.goBack();
      }
    }
  };

  return (
    <SafeAreaView style={Styles.screen}>
      <View style={{...Styles.screen}}>
        <Header isBackIcon={true} title={strings.update_title} />
        <View style={PageStyles.textFieldContainer}>
          <TitleTextInputField
            title={strings.Enter_Text}
            type={'text'}
            value={value}
            attrName={'text'}
            placeholder={strings.Enter_Text}
            autoCorrect={false}
            autoCapitalize={'words'}
            keyboardType={'default'}
            isPasswordVisible={true}
            updateMasterState={updateMasterState}
            style={PageStyles.textFieldView}
            titleTextStyle={PageStyles.titleTextStyle}
            inputContainer={PageStyles.inputContainer}
            inputStyle={PageStyles.inputStyle}
          />
          <View
            style={{
              ...Styles.headerContainer,
              marginBottom: horizontalScale(16),
            }}>
            <Text style={{...Styles.text2, ...PageStyles.itemText}}>
              {strings.task_complete}
            </Text>
            <Switch
              trackColor={{false: COLOR.AZUREISHWHITE, true: COLOR.PRIMARY}}
              thumbColor={isEnabled ? COLOR.SECONDARY : COLOR.CSILVER}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
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
              onPress={() => handleEditData()}
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
    </SafeAreaView>
  );
};

export default EditTaskScreen;
