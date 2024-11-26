import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface IConditionsCart {
  id?: number;
  title: string;
  description: string;
}

export const ConditionsCart: React.FC<IConditionsCart> = ({
  title,
  description,
}) => {
  return (
    <View style={styles.main}>
      <View style={styles.cart}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    // marginTop: 10,
  },
  cart: {
    padding: 10,
    marginBottom: 10,
    width: 324,
    height: 67,
    alignSelf: 'center',
  },
  title: {
    fontWeight: '500',
    fontSize: 14,
    color: '#00497C',
  },
  description: {
    fontSize: 12,
    color: '#000000',
    marginTop: 4,
    fontWeight: '400',
    height: 45,
    width: 324,
  },
});
