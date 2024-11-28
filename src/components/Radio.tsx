import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {colors} from '../theme/colors';

interface IRadio {
  options: {label: string; value: string; image?: ImageSourcePropType}[];
  checkedValue: string;
  onChange: (value: string) => void;
  style?: StyleProp<ViewStyle>;
  onPress?: (value: string) => void;
}

export const Radio: React.FC<IRadio> = ({
  style,
  options,
  checkedValue,
  onChange,
  onPress,
}) => {
  return (
    <View style={[styles.container, style]}>
      {options.map(option => {
        const isActive = option.value === checkedValue;
        return (
          <TouchableOpacity
            key={option.value}
            style={[styles.radio, isActive && styles.activeRadio]}
            onPress={() => {
              onChange(option.value);
              if (onPress) onPress(option.value);
            }}>
            <Image source={option.image} style={styles.image} />

            <Text style={styles.text}>{option.label}</Text>

            <View style={styles.circle}>
              {isActive && <View style={styles.innerCircle} />}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  radio: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.border.bottom,
  },
  activeRadio: {
    // backgroundColor: '#e0f7fa',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  text: {
    flex: 1,
    fontSize: 14,
    marginLeft: 10,
    color: '#333333',
    fontWeight: '500',
  },
  circle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#6b7280',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#0266B3',
  },
});
