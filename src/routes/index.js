import React from 'react';
import {StatusBar} from 'react-native';
import COLOR from '../styles/Color';
import strings from '../translation/en.json';
import {RFValue} from 'react-native-responsive-fontsize';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// Splash Group
import SplashScreen from '../screens/Splashview/SplashScreen';

// Home Group
import HomeScreen from '../screens/HomeView/HomeScreen';
import PostsScreen from '../screens/HomeView/PostsScreen';

// Stack Screens
import EditTaskScreen from '../screens/HomeView/EditTaskScreen';
import LogicScreen from '../screens/HomeView/LogicScreen';
import { horizontalScale } from '../utils/Utils';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLOR.PRIMARY,
        tabBarInactiveTintColor: COLOR.WHITE,
        tabBarStyle: {
          height:horizontalScale(60),
          justifyContent: 'center',
          backgroundColor: COLOR.SECONDARY,
        },
        tabBarLabelStyle: {
          textAlign: 'center',
          fontWeight: '600',
          fontSize: RFValue(12),
        },
        tabBarIndicatorStyle: {
          borderBottomColor: COLOR.PRIMARY,
          borderBottomWidth: 2,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: strings.todolist,
        }}
      />
      <Tab.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          tabBarLabel: strings.posts,
        }}
      />
    </Tab.Navigator>
  );
}

const Routes = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLOR.WHITE} />
      <Stack.Navigator
        screenOptions={{headerShown: false, gestureEnabled: false}}
        initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="TabStack" component={TabStack} />
        <Stack.Screen name="EditTask" component={EditTaskScreen} />
        <Stack.Screen name="LogicStr" component={LogicScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
