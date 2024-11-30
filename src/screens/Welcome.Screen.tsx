import React, {useState} from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Button} from '../components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '../types/navigation.type';
import {Routes} from '../router/routes';
import {colors} from '../theme/colors';

export const WelcomeScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.welcome>
> = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);

  const navigateToConditions = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate(Routes.conditions);
    }, 2000);
  };

  return (
    <ImageBackground style={styles.background} resizeMode="contain">
      <View style={styles.main}>
        <Image
          style={styles.departmentLogo}
          source={require('../assets/images/departmentLogo.png')}
        />

        {isLoading ? (
          <Image
            style={styles.loadingImage}
            source={require('../assets/images/departmentLogo.png')}
          />
        ) : (
          <>
            <Image
              style={{width: 107, height: 112.56}}
              source={require('../assets/images/userLogo.png')}
            />
            <View style={styles.bottom}>
              <Image
                style={{width: 183, height: 27, alignSelf: 'center'}}
                source={require('../assets/images/welcome.png')}
              />
              <Text style={styles.description}>
                A single portal to multiple CBP services to streamline your
                experience.
              </Text>
              <View style={{marginTop: 16, width: 239, height: 41}}>
                <Button
                  textColor={colors.white}
                  backgroundColor={colors.red.line}
                  style={styles.button}
                  onPress={navigateToConditions}
                  text="LOGIN OR SIGN UP"
                  width={127}
                  height={17}
                />
              </View>
              <Image
                style={styles.loginText}
                source={require('../assets/images/login.png')}
              />
            </View>
          </>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00497C',
  },
  main: {
    width: 298,
    height: 426,
    alignItems: 'center',
    borderTopColor: '#CE1C25',
    borderTopWidth: 6,
    borderRadius: 10,
    borderColor: '#fff',
    backgroundColor: '#fff',
    paddingTop: 59,
  },
  departmentLogo: {
    width: 68,
    height: 68,
    position: 'absolute',
    top: -34,
    alignSelf: 'center',
  },
  bottom: {
    width: 239,
    height: 152,
    marginTop: 57,
  },
  description: {
    width: 239,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 9,
    fontWeight: '400',
  },
  loginText: {
    width: 152,
    height: 19,
    alignSelf: 'center',
    marginTop: 10,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 56,
    borderRadius: 35,
    backgroundColor: '#CE1C25',
  },
  loadingImage: {
    width: 260,
    height: 260,
  },
});
