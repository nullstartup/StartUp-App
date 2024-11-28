import React from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {SvgImage} from './SvgImage';
import {colors} from '../theme/colors';

export interface IConditionsCart {
  id?: number;
  title: string;
  description: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  icon?: SvgProps;
}

export const ConditionsCart: React.FC<IConditionsCart> = ({
  title,
  description,
  onPress,
  style,
  icon,
}) => {
  return (
    <View style={[styles.main, style]}>
      <Pressable onPress={onPress} style={styles.cart}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        {icon && <SvgImage style={styles.icon} source={icon} />}
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
    width: 324,
    alignSelf: 'center',
    position: 'relative',
    borderBottomWidth: 1,
    borderBottomColor: colors.border.bottom,
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
  icon: {
    position: 'absolute',
    bottom: 0,
    right: 10,
    color: colors.bg.blue,
  },
});
