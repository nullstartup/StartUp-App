import React from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

export interface IConditionsCart {
  id?: number;
  title: string;
  description: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export const ConditionsCart: React.FC<IConditionsCart> = ({
  title,
  description,
  onPress,
  style,
}) => {
  return (
    <View style={[styles.main, style]}>
      <Pressable onPress={onPress} style={styles.cart}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </Pressable>
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
