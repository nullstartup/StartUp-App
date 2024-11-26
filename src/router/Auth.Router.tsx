import {SafeAreaView, StyleSheet} from 'react-native';
import {Routes} from './routes';
import {NavigationParamList} from '../types/navigation.type';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  authStackScreenOption,
  defaultScreenOptions,
} from '../configs/navigation.configs';
import {WelcomeScreen} from '../screens/Welcome.Screen';
import {ConditionsScreen} from '../screens/Conditions.Screen';
import React from 'react';
import {RegisterScreen} from '../screens/Register.Screen';

const AuthStack = createNativeStackNavigator<NavigationParamList>();

export const AuthRouter = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AuthStack.Navigator
        screenOptions={authStackScreenOption}
        initialRouteName={Routes.welcome}>
        <AuthStack.Screen
          name={Routes.welcome}
          component={WelcomeScreen}
          options={defaultScreenOptions}
        />
        <AuthStack.Screen
          name={Routes.conditions}
          component={ConditionsScreen}
        />
        <AuthStack.Screen name={Routes.register} component={RegisterScreen} />
      </AuthStack.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
