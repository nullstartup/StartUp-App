import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationParamList} from '../types/navigation.type';
import {Routes} from './routes';
import {HomeScreen} from '../screens/Home.Screen';
import {defaultScreenOptions} from '../configs/navigation.configs';

export const MainRouter = () => {
  const MainStack = createNativeStackNavigator<NavigationParamList>();
  return (
    <MainStack.Navigator
      initialRouteName={Routes.test}
      screenOptions={defaultScreenOptions}>
      <MainStack.Screen
        name={Routes.home}
        component={HomeScreen}></MainStack.Screen>
    </MainStack.Navigator>
  );
};
