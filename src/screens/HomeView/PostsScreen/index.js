import {
  SafeAreaView,
  Text,
  View,
  LogBox,
  BackHandler,
  FlatList,
  RefreshControl,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

//components
import API from '../../../api/Api';
import Header from '../../../components/Header';
import {showAlertMessage} from '../../../components/Helper';

// styles
import PageStyles from './styles';
import Styles from '../../../styles/Styles';
import strings from '../../../translation/en.json';
import COLOR from '../../../styles/Color';
import {horizontalScale} from '../../../utils/Utils';

LogBox.ignoreAllLogs();

let api = new API();

const PostsScreen = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

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
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    api
      .getPosts()
      .then(async json => {
        if (json?.status === 200) {
          setPosts(json?.data);
          setLoading(false);
        }
      })
      .catch(error => {
        setLoading(false);
        showAlertMessage(error?.response?.data?.message, 2);
      });
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
    return (
      <View
        key={item?.id}
        style={{
          ...PageStyles.renderItemView,
        }}>
        <Text style={{...Styles.text2, ...PageStyles.itemText}}>
          <Text style={{...Styles.text2, ...PageStyles.titleText}}>
            {strings.title}:&nbsp;
          </Text>
          {item?.title.replace(/\n/g, ' ')}
        </Text>
        <Text style={{...Styles.text2, ...PageStyles.itemText}}>
          <Text style={{...Styles.text2, ...PageStyles.titleText}}>
            {strings.body}:&nbsp;
          </Text>
          {item?.body?.replace(/\n/g, ' ')}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={Styles.screen}>
      {/* <ActivityLoader isLoading={loading} /> */}
      <View style={{...Styles.screen, backgroundColor: COLOR.BRIGHTGRAY}}>
        <Header title={strings.posts} />
        <View style={PageStyles.textFieldContainer}>
          <FlatList
            data={posts}
            renderItem={(item, index) => ListRender(item, index)}
            refreshControl={
              <RefreshControl
                refreshing={loading}
                tintColor={COLOR.SECONDARY}
                colors={[COLOR.SECONDARY]}
                onRefresh={() => fetchData()}
              />
            }
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={<HorizontalLine />}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={<NoResultFound />}
            style={PageStyles.listView}
            contentContainerStyle={{paddingBottom: horizontalScale(20)}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PostsScreen;
