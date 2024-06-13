import {
  SafeAreaView,
  Text,
  View,
  LogBox,
  Pressable,
  BackHandler,
  FlatList,
  Image,
  RefreshControl,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

//components
import Auth from '../../../auth';
import TitleTextInputField from '../../../components/TitleTextInputField';
import Header from '../../../components/Header';
import CustomButton from '../../../components/CustomButton';
import {showAlertMessage} from '../../../components/Helper';

// styles
import PageStyles from './styles';
import Styles from '../../../styles/Styles';
import IMAGES from '../../../styles/Images';
import strings from '../../../translation/en.json';
import COLOR from '../../../styles/Color';
import {horizontalScale} from '../../../utils/Utils';
import {TODOLIST} from '../../../constants';

//icons
import DeleteIcon from '../../../styles/assets/svg/delete-data.svg';
import DeleteModal from '../../../components/DeleteModal';
LogBox.ignoreAllLogs();

let auth = new Auth();

const HomeScreen = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [iseDeleteModal, setIsDeleteModal] = useState(false);
  const [indexForDelete, setIndexForDelete] = useState(-1);
  const [tempData, setTempData] = useState(null);

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp();
        return true;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => subscription.remove();
    }, []),
  );
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });

    return unsubscribe;
  }, [navigation]);

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

  const handleAddData = async () => {
    if (value === '' || value == null) {
      showAlertMessage(strings.add_task_error);
    } else {
      let ab = [];
      let dt = JSON.stringify({taskName: value, isComplete: false});
      if (taskList?.length === 0) {
        ab.push(dt);
        setTaskList([...taskList, ...ab]);
        let data = JSON.stringify([...taskList, ...ab]);
        await auth.setValue(TODOLIST, data);
        showAlertMessage(strings.data_add_success, 1);
      } else {
        var found = false;
        for (var i = 0; i < taskList.length; i++) {
          let dd = JSON.parse(taskList[i]);
          if (dd?.taskName == value) {
            found = true;
            break;
          }
        }
        if (found) {
          showAlertMessage(strings.data_exist, 2);
        } else {
          ab.push(dt);
          setTaskList([...taskList, ...ab]);
          let data = JSON.stringify([...taskList, ...ab]);
          await auth.setValue(TODOLIST, data);
          setValue('');
          showAlertMessage(strings.data_add_success, 1);
        }
      }
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
    } else {
      let ab = [];
      let dt = JSON.stringify({taskName: value, isComplete: false});
      if (taskList?.length === 0) {
        ab.push(dt);
        setTaskList([...taskList, ...ab]);
        let data = JSON.stringify([...taskList, ...ab]);
        await auth.setValue(TODOLIST, data);
        showAlertMessage('Data added successfully', 1);
      } else {
        var found = false;
        for (var i = 0; i < taskList.length; i++) {
          let dd = JSON.parse(taskList[i]);
          if (dd?.taskName == value) {
            found = true;
            break;
          }
        }
        if (found) {
          showAlertMessage('Item alredy exist..!', 2);
        } else {
          ab.push(dt);
          setTaskList([...taskList, ...ab]);
          let data = JSON.stringify([...taskList, ...ab]);
          await auth.setValue(TODOLIST, data);
          showAlertMessage('Data added successfully', 1);
        }
      }
    }
  };

  const handleRemoveItem = async () => {
    let dd = [...taskList];
    if (indexForDelete !== -1) {
      dd.splice(indexForDelete, 1);
      setTaskList(dd);
      await auth.setValue(TODOLIST, dd);
    }
  };

  const NoResultFound = () => {
    return (
      <View
        style={{
          ...Styles.screenCenter,
          ...PageStyles.listEmptyComponentStyle,
        }}>
        <Text style={{...Styles.text1, ...PageStyles.noDataText}}>
          {strings.no_data_found}!
        </Text>
      </View>
    );
  };

  const HorizontalLine = () => {
    return <View style={PageStyles.verticalModalLine} />;
  };

  const ListRender = ({item, index}) => {
    let data = JSON.parse(item);
    return (
      <View
        style={{
          ...PageStyles.renderItemView,
        }}>
        <Text style={{...Styles.text2, ...PageStyles.itemText}}>
          {data?.taskName}
        </Text>

        <View style={PageStyles.btnListContainer}>
          {/* <Pressable> */}
          <Image
            source={data?.isComplete ? IMAGES.complete : IMAGES.pending}
            style={PageStyles.icon}
            resizeMode="contain"
          />
          {/* </Pressable> */}
          <Pressable
            onPress={() =>
              navigation.navigate('EditTask', {data: data, idx: index})
            }>
            <Image
              source={IMAGES.edit}
              style={PageStyles.icon}
              resizeMode="contain"
            />
          </Pressable>
          <Pressable
            onPress={() => {
              setIndexForDelete(index);
              setIsDeleteModal(true);
            }}>
            <DeleteIcon
              height={horizontalScale(26)}
              width={horizontalScale(26)}
            />
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={Styles.screen}>
      <DeleteModal
        type={'delete'}
        isModalShow={iseDeleteModal}
        title={strings.delete_data}
        subTitle={strings.delete_subTitle}
        cancleText={strings.no}
        confirmText={strings.yes}
        handleNo={() => setIsDeleteModal(false)}
        handleYes={() => {
          setIsDeleteModal(false);
          handleRemoveItem();
        }}
      />
      <View style={{...Styles.screen}}>
        <Header isButton={true} title={strings.todolist} onPress={() => navigation.navigate('LogicStr')} />
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
        </View>
        <View
          style={{
            ...Styles.headerContainer,
            paddingHorizontal: horizontalScale(20),
          }}>
          <CustomButton
            onPress={() => handleAddData()}
            text={strings.Add}
            btnStyle={PageStyles.btnView1}
            btnTextStyle={PageStyles.btnText}
          />
          <CustomButton
            onPress={() => setValue('')}
            text={strings.clear}
            btnStyle={{
              ...PageStyles.btnView,
              backgroundColor: COLOR.CAROLRED,
            }}
            btnTextStyle={PageStyles.btnText}
          />
        </View>
        <View style={{...Styles.screen}}>
          <FlatList
            data={taskList}
            renderItem={(item, index) => ListRender(item, index)}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={<HorizontalLine />}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={<NoResultFound />}
            style={PageStyles.listView}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
