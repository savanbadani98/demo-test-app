import React, {useEffect} from 'react';
import {Platform, View} from 'react-native';
import Routes from './src/routes';
import FlashMessage from 'react-native-flash-message';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

// styles
import Styles from './src/styles/Styles';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={Styles.mainview}>
        <Routes />
        <FlashMessage
          titleStyle={Styles.textMeaage}
          floating={true}
          style={{alignItems: 'center'}}
          position={'center'}
        />
      </View>
    </GestureHandlerRootView>
  );
};

export default App;
