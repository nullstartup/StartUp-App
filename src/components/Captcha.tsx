import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback,
  useEffect,
} from 'react';
import {Text, View, ImageBackground, StyleSheet, Pressable} from 'react-native';
import {SvgImage} from './SvgImage';

interface CaptchaProps {
  backgroundImage: {uri: string};
  onRefresh: (newCaptcha: string) => void;
}

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Captcha = forwardRef(
  ({backgroundImage, onRefresh}: CaptchaProps, ref) => {
    const [captchaText, setCaptchaText] = useState<string>('');
    const [charColors, setCharColors] = useState<string[]>([]);

    useImperativeHandle(ref, () => ({
      validateCaptcha: (enteredCaptcha: string) => {
        return enteredCaptcha === captchaText;
      },
    }));

    const handleRefresh = useCallback(() => {
      const randomText = Math.random().toString(36).substr(2, 6);
      const newCaptcha = randomText
        .split('')
        .map(char => (Math.random() < 0.5 ? char.toUpperCase() : char))
        .join('');

      setCaptchaText(newCaptcha);
      setCharColors(newCaptcha.split('').map(() => getRandomColor()));
      onRefresh(newCaptcha);
    }, [onRefresh]);

    useEffect(() => {
      handleRefresh();
    }, [handleRefresh]);

    return (
      <View style={styles.captchaContainer}>
        <View style={styles.rowContainer}>
          <ImageBackground
            source={backgroundImage}
            style={styles.captchaBackground}>
            <View style={styles.captchaTextContainer}>
              {captchaText.split('').map((char, index) => (
                <Text
                  key={index}
                  style={[styles.captchaText, {color: charColors[index]}]}>
                  {char}
                </Text>
              ))}
            </View>
          </ImageBackground>
          <Pressable style={styles.refreshButton} onPress={handleRefresh}>
            <SvgImage
              source={require('../assets/vectors/refresh.svg')}
              width={24}
              height={24}
            />
          </Pressable>
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  captchaContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  captchaBackground: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  captchaTextContainer: {
    flexDirection: 'row',
  },
  captchaText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 7,
  },
  refreshButton: {
    borderWidth: 1,
    backgroundColor: '#00497C',
    width: 30,
    height: 30,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});

export default Captcha;
