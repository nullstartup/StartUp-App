import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from '../components/Header';
import {AboutYou, IAboutYou} from '../components/AboutYou';
import {About} from '../mock/AboutYouMock';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '../types/navigation.type';
import {Routes} from '../router/routes';
// import {FlashList} from '@shopify/flash-list';

export const AboutYouScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.aboutYou>
> = ({navigation}) => {
  const renderItem = ({item}: {item: IAboutYou}) => (
    <AboutYou
      onPress={() => navigation.navigate(Routes.selectTravel)}
      image={item.image}
      choice={item.choice}
    />
  );

  return (
    <View style={{flex: 1}}>
      <Header title="Who are you"></Header>
      <Image
        style={{width: 264, height: 196, alignSelf: 'center'}}
        source={require('../assets/images/userLogoTwo.png')}
      />
      <View style={styles.line}></View>
      <View style={styles.bottom}>
        <View style={{width: 330, height: 78, marginTop: 13}}>
          <Text style={styles.title}>I am a... | Soy un...</Text>
          <Text style={styles.description}>
            Please select from the options provided below. | Por favor
            seleccione una de las opciones a continuacion.
          </Text>
        </View>
      </View>
      <View style={{flex: 1, marginLeft: 10}}>
        <FlatList
          scrollEnabled={false}
          data={About}
          renderItem={renderItem}
          keyExtractor={(item, index) =>
            item.id ? item.id.toString() : index.toString()
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    borderWidth: 1,
    width: 328,
    height: 3,
    borderColor: '#CE1C25',
    borderRadius: 8,
    alignSelf: 'center',
  },
  bottom: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#00497C',
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    width: 330,
    height: 51,
    marginTop: 8,
  },
});
