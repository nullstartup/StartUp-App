import {Image, SafeAreaView, StyleSheet, Text} from 'react-native';
import {Routes} from './routes';
import {NavigationParamList} from '../types/navigation.type';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {
  authStackScreenOption,
  defaultScreenOptions,
} from '../configs/navigation.configs';
import {WelcomeScreen} from '../screens/Welcome.Screen';
import {ConditionsScreen} from '../screens/Conditions.Screen';
import {RegisterScreen} from '../screens/Register.Screen';
import {AboutYouScreen} from '../screens/AboutYou.Screen';
import {SelectTravelScreen} from '../screens/SelectTravel.Screen';
import {HomeScreen} from '../screens/Home.Screen';
import {
  DrawerContentScrollView,
  DrawerItem,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import React from 'react';
import {colors} from '../theme/colors';
import {SvgImage} from '../components/SvgImage';
import {LanguagePreferenceScreen} from '../screens/LanguagePreference.Screen';

const AuthStack = createNativeStackNavigator<NavigationParamList>();
const Drawer = createDrawerNavigator<NavigationParamList>();

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
        <AuthStack.Screen name={Routes.aboutYou} component={AboutYouScreen} />
        <AuthStack.Screen
          name={Routes.selectTravel}
          component={SelectTravelScreen}
        />
        <AuthStack.Screen name={Routes.home} component={HomeScreenWithDrawer} />
        <AuthStack.Screen
          name={Routes.languagePreference}
          component={LanguagePreferenceScreen}
        />
      </AuthStack.Navigator>
    </SafeAreaView>
  );
};

export const HomeScreenWithDrawer: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.home>
> = ({navigation}) => {
  return (
    <Drawer.Navigator
      initialRouteName={Routes.home}
      screenOptions={{
        headerShown: true,
        title: 'Traveler',
        headerStyle: {backgroundColor: colors.bg.blue},
        headerTitleStyle: {color: colors.white},
      }}
      drawerContent={props => (
        <DrawerContentScrollView {...props}>
          <Image
            style={{width: '100%', height: 143}}
            source={require('../assets/images/sidebarBg.png')}></Image>
          <Image
            style={styles.imageTwo}
            source={require('../assets/images/sidebarBgtwo.png')}></Image>
          <DrawerItem
            label="Home"
            onPress={() => console.log('Home pressed')}
            labelStyle={{color: colors.black}}
            icon={() => (
              <SvgImage
                source={require('../assets/vectors/home.svg')}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            )}
          />
          <Text style={{left: 20, color: colors.bg.blue}}>
            Bus Company / Operator
          </Text>
          <DrawerItem
            label="Notifications"
            onPress={() => console.log('Notifications Pressed')}
            labelStyle={{color: colors.black}}
            icon={() => (
              <SvgImage
                source={require('../assets/vectors/notification.svg')}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            )}
          />
          <DrawerItem
            label="Language"
            onPress={() => navigation.navigate(Routes.languagePreference)}
            labelStyle={{color: colors.black}}
            icon={() => (
              <SvgImage
                source={require('../assets/vectors/information.svg')}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            )}
          />
          <DrawerItem
            label="Logout"
            onPress={() => console.log('Logout pressed')}
            labelStyle={{color: colors.black}}
            icon={() => (
              <SvgImage
                source={require('../assets/vectors/logout.svg')}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            )}
          />
        </DrawerContentScrollView>
      )}>
      <Drawer.Screen name={Routes.home} component={HomeScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageTwo: {
    width: 180,
    height: 67,
    position: 'absolute',
    top: 50,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
