import {
  Text,
  SafeAreaView,
  LogBox,
  View,
  Dimensions,
  BackHandler,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

// styles
import Styles from '../../../styles/Styles';
import strings from '../../../translation/en.json';
import PageStyles from './styles';

// icons
import IMAGES from '../../../styles/Images';
LogBox.ignoreAllLogs();

const windowWidth = Dimensions.get('window').width;

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    checkScreen();
  }, []);

  const checkScreen = async () => {
    setTimeout(() => {
      navigation.navigate('TabStack');
    }, 1000);
  };

  useFocusEffect(
    React.useCallback(() => {
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


  return (
    <SafeAreaView style={Styles.screen}>
      <View style={PageStyles.firstView}>
        <Image
          source={IMAGES.task}
          style={{
            height: windowWidth / 3.8,
            width: windowWidth / 3.8,
          }}
        />
      </View>
      <View style={PageStyles.secondView}>
        <Text style={{...Styles.text1, ...PageStyles.heading1}}>
          {strings.task}&nbsp;
          <Text style={PageStyles.heading2}>{strings.interview}</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
