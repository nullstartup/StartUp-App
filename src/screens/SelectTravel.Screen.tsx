import React, {useState} from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import {Header} from '../components/Header';
import {Radio} from '../components/Radio';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '../types/navigation.type';
import {Routes} from '../router/routes';

export const SelectTravelScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.selectTravel>
> = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('Land | Tierra');

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
      <Header title="Select Travel Method" />
      <Text style={styles.title}>
        Please select from the options provided below. | Por favor seleccione
        una de las opciones a continuacion
      </Text>
      <Radio
        options={options}
        checkedValue={selectedValue}
        onChange={setSelectedValue}
        onPress={() => navigation.navigate(Routes.home)}
      />
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
    fontWeight: '500',
    margin: 16,
  },
});