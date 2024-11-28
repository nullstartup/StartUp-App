import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Header} from '../components/Header';
import {Button} from '../components/Button';
import {Input} from '../components/Input';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '../types/navigation.type';
import {Routes} from '../router/routes';
import {colors} from '../theme/colors';

export const RegisterScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.register>
> = ({navigation}) => {
  return (
    <SafeAreaView>
      <Header
        titleColor={colors.white}
        title="An official website of the United States government"></Header>
      <View style={{alignItems: 'center', gap: 20, paddingHorizontal: 14}}>
        <Image
          style={styles.image}
          source={require('../assets/images/loginAndDepartment.png')}></Image>
        <Image
          style={styles.imageTwo}
          source={require('../assets/images/people.png')}></Image>
        <Text style={styles.title}>
          <Text style={{fontWeight: '700'}}>CBP One </Text>
          is using Login.gov to allow you to sign in to your account safelly and
          securely.
        </Text>
      </View>
      <View style={{paddingHorizontal: 14}}>
        <View style={styles.buttons}>
          <Button
            width={58}
            height={19}
            style={styles.button}
            backgroundColor="#0266B3"
            textColor="#fff"
            text="Sign in"></Button>
          <Button
            width={58}
            height={19}
            textColor="#0266B3"
            style={styles.button}
            text="Create an account"></Button>
        </View>
        <Text style={styles.formTitle}>Sign in for existing users</Text>
        <View>
          <Input caption="Email address" placeholder="Email*"></Input>
          <Input caption="Password" placeholder="Password*"></Input>
        </View>
        <Text style={{marginBottom: 15}}>show password</Text>
        <Button
          onPress={() => navigation.navigate(Routes.aboutYou)}
          text="Sign in"
          textColor="#fff"
          backgroundColor="#0266B3"
          style={styles.signButton}></Button>
        <Pressable onPress={() => navigation.goBack()}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: '#0266B3',
              // marginTop: 32,
            }}>
            Back to CBP One
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 270.5,
    height: 45.3,
    marginTop: 10,
  },
  imageTwo: {
    width: 267,
    height: 86.8,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    width: 296,
    height: 75,
    textAlign: 'center',
  },
  button: {
    borderColor: '#0266B3',
    borderRadius: 8,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#0266B3',
    borderRadius: 8,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  signButton: {
    width: '100%',
    height: 44,
    borderRadius: 8,
    alignContent: 'flex-end',
  },
});
