import React, {useState, useCallback} from 'react';
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
  title?: string;
  description: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  icon?: SvgProps;
  titleColor?: string;
  isLast?: boolean;
  linkText?: string;
  additoinalText?: string;
  additoinalTextTwo?: string;
  descriptionStyle?: StyleProp<ViewStyle>; 
}

export const ConditionsCart: React.FC<IConditionsCart> = ({
  id,
  title,
  description,
  onPress,
  style,
  icon,
  titleColor,
  isLast = false,
  linkText,
  additoinalText,
  additoinalTextTwo,
  descriptionStyle, 
}) => {
  const [cartHeight, setCartHeight] = useState(0);

  const handleLayout = useCallback(
    (event: {nativeEvent: {layout: {height: any}}}) => {
      const {height} = event.nativeEvent.layout;
      setCartHeight(height);
    },
    [],
  );

  return (
    <View style={[styles.main, style]}>
      <View style={styles.row}>
        {id ? (
          <View style={styles.leftSection}>
            <View style={styles.idContainer}>
              <Text style={styles.id}>{id}</Text>
            </View>
            {!isLast && (
              <View style={[styles.line, {height: cartHeight - 24}]} />
            )}
          </View>
        ) : null}

        <Pressable
          onLayout={handleLayout}
          onPress={onPress}
          style={id ? styles.cartWithId : styles.cart}>
          <Text style={[styles.title, titleColor && {color: titleColor}]}>
            {title}
          </Text>
          <Text style={[styles.description, descriptionStyle]}>{description}</Text>

          {additoinalText && (
            <Text style={styles.additionalText}>{additoinalText}</Text>
          )}

          {additoinalTextTwo && (
            <Text style={styles.additionalText}>{additoinalTextTwo}</Text>
          )}
          <Text style={styles.linkText}>{linkText}</Text>

          {icon && <SvgImage style={styles.icon} source={icon} />}
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    // marginVertical: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  leftSection: {
    alignItems: 'center',
    marginRight: 12,
  },
  idContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
    marginLeft: 30,
  },
  id: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.white,
  },
  line: {
    width: 2,
    backgroundColor: colors.border.bottom,
    marginTop: 4,
    marginLeft: 30,
  },
  cart: {
    padding: 10,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: colors.border.bottom,
    borderRadius: 8,
  },
  cartWithId: {
    padding: 10,
    width: 280,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.bottom,
    borderRadius: 8,
    height: 'auto',
  },
  title: {
    fontWeight: '500',
    fontSize: 14,
    color: colors.bg.blue,
    width: 327,
  },
  description: {
    fontSize: 14,
    color: colors.black,
    marginTop: 4,
    fontWeight: '400',
    width: 324,
  },
  icon: {
    position: 'absolute',
    bottom: 0,
    right: 10,
    color: colors.bg.blue,
  },
  linkText: {
    color: colors.bg.openBlue,
    fontSize: 14,
    marginTop: 4,
    fontWeight: '400',
  },
  additionalText: {
    color: colors.black,
    fontSize: 14,
    marginTop: 24,
    fontWeight: '400',
  },
});
