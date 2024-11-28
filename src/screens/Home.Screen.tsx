import React from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
// import {Header} from '../components/Header';
import {ConditionsCart, IConditionsCart} from '../components/ConditionsCart';
import {Traveler} from '../mock/ConditonsMock';
import {colors} from '../theme/colors';

export const HomeScreen = () => {
  const renderItem = ({item}: {item: IConditionsCart}) => {
    return (
      <ConditionsCart
        title={item.title}
        description={item.description}
        onPress={() => console.log('pressed')}
        style={{marginTop: 15,backgroundColor:colors.transparent}}
        icon={require('../assets/vectors/arrow_right.svg')}></ConditionsCart>
    );
  };

  return (
    <View style={{flex: 1}}>
      {/* <Header
      // onLeftPress={()}
        titleColor={colors.white}
        leftActionType="icon"
        left={vectors.hamburger_menu}
        title="Traveler"></Header> */}
      <Image
        style={{width: 307, height: 155, alignSelf: 'center', marginTop: 35}}
        source={require('../assets/images/bigMap.png')}
      />
      <View style={styles.line}></View>

      <View style={{flex: 1, marginLeft: 10, marginTop: 19}}>
        <FlatList
          data={Traveler}
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
    borderColor: colors.red.line,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 30,
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

