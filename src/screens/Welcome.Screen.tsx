import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Button} from '../components/Button';

export const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.background}
      resizeMode="cover">
      <View style={styles.main}>
        <Image
          style={styles.logo}
          source={require('../assets/images/departmentLogo.png')}></Image>
        <Image
          style={{width: 107, height: 112.56}}
          source={require('../assets/images/userLogo.png')}></Image>
        <View style={styles.bottom}>
          <Image
            style={{width: 183, height: 27, alignSelf: 'center'}}
            source={require('../assets/images/welcome.png')}></Image>
          <Text
            style={{
              width: 239,
              height: 30,
              fontSize: 12,
              textAlign: 'center',
              marginTop: 9,
              fontWeight: '400',
            }}>
            A single portal to multiple CBP services to streamline your
            experience.
          </Text>
          <View style={{marginTop: 16}}>
            <Button text="LOGIN OR SIGN UP"></Button>
          </View>
          <Image
            style={{
              width: 152,
              height: 19,
              alignSelf: 'center',
              marginTop: 10,
              // paddingBottom: 26,
            }}
            source={require('../assets/images/login.png')}></Image>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  main: {
    borderWidth: 1,
    width: 298,
    height: 406,
    alignItems: 'center',
    alignSelf: 'center',
    borderTopColor: '#CE1C25',
    borderTopWidth: 6,
    alignContent: 'center',
    borderRadius: 10,
    borderColor: '#fff',
    backgroundColor: '#fff',
    top: 150,
  },
  logo: {
    width: 68,
    height: 68,
    top: -50,
  },
  bottom: {
    width: 239,
    height: 152,
    marginTop: 57,
  },
});
