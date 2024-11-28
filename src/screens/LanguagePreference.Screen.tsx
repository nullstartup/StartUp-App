import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Header} from '../components/Header';
import {colors} from '../theme/colors';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '../types/navigation.type';
import {Routes} from '../router/routes';
import {Radio} from '../components/Radio';
import {Button} from '../components/Button';

export const LanguagePreferenceScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.languagePreference>
> = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('Land | Tierra');

  const options = [
    {
      label: 'English',
      value: 'English',
    },
    {
      label: 'Espanol',
      value: 'Espanol',
    },
    {
      label: 'Kreyol ayisyen',
      value: 'Kreyol ayisyen',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftActionType="icon"
        left={vectors.arrow_left}
        onLeftPress={navigation.goBack}
        title="Language Preference"
        rightActionType="icon"
        right={vectors.human}
        titleColor={colors.white}
      />
      <View style={styles.texts}>
        <Text style={styles.text}>
          Please select from the options provided below.
        </Text>
        <Text style={styles.text}>
          Por favor seleccione una de las opciones a continuacion.
        </Text>
        <Text style={[styles.text, {paddingBottom: 20}]}>
          Tanpri chwazi nan opsyon yo bay anba a.
        </Text>
      </View>
      <Radio
        style={{left: -20, marginTop: 20}}
        options={options}
        checkedValue={selectedValue}
        onChange={setSelectedValue}
        onPress={() => console.log('language selected')}
      />
      <View style={styles.buttonContainer}>
        <Button
          width={328}
          height={44}
          text="Continue"
          textColor={colors.white}
          backgroundColor={colors.bg.blue}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
  texts: {
    gap: 15,
    marginTop: 19,
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.border.bottom,
  },
  buttonContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
});

const vectors = {
  arrow_left: {
    icon: require('../assets/vectors/arrow_left.svg'),
    width: 24,
    height: 24,
    color: colors.white,
  },
  human: {
    icon: require('../assets/vectors/human.svg'),
    width: 24,
    height: 24,
    color: colors.white,
  },
};
