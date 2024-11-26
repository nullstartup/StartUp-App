import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

interface IButton {
  text: string;
}

export const Button: React.FC<IButton> = ({text}) => {
  return (
    <Pressable>
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 56,
    borderRadius: 35,
    backgroundColor: '#CE1C25',
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    width: 127,
    height: 17,
    color: '#F8F8F8',
  },
});
