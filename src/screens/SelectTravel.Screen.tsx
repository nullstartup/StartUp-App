import React, {useState} from 'react';
import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import {Header} from '../components/Header';
import {Radio} from '../components/Radio';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '../types/navigation.type';
import {Routes} from '../router/routes';
import {colors} from '../theme/colors';
import {Button} from '../components/Button';

export const SelectTravelScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.selectTravel>
> = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('');

  const options = [
    {
      label: 'Land | Tierra',
      value: 'Land | Tierra',
      image: require('../assets/images/land.png'),
    },
    {
      label: 'Air | Aire',
      value: 'Air | Aire',
      image: require('../assets/images/air.png'),
    },
    {
      label: 'Sea | Mar',
      value: 'Sea | Mar',
      image: require('../assets/images/sea.png'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftActionType="icon"
        left={vectors.arrow_left}
        title="Select Travel Method"
        onLeftPress={() => navigation.goBack()}
        titleColor={colors.white}
      />
      <Text style={styles.title}>
        Please select from the options provided below. | Por favor seleccione
        una de las opciones a continuacion
      </Text>
      <Radio
        options={options}
        checkedValue={selectedValue}
        onChange={setSelectedValue}
        // onPress={() => navigation.navigate(Routes.home)}
      />
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          width={328}
          height={44}
          text="Continue"
          textColor={colors.white}
          backgroundColor={colors.bg.blue}
          onPress={() => navigation.navigate(Routes.home)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    margin: 16,
  },
  buttonContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
  button: {
    borderRadius: 8,
    width: 328,
    alignSelf: 'center',
    marginTop: 20,
  },
});

const vectors = {
  arrow_left: {
    icon: require('../assets/vectors/arrow_left.svg'),
    width: 24,
    height: 24,
  },
};
