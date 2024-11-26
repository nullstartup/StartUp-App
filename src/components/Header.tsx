import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

type TType = 'standard' | 'large';
type TAction = 'text' | 'icon' | 'text-icon' | 'button' | 'none';
type TSide = NodeRequire | TIcon | string | React.ReactNode | undefined;
type TIcon = {
  icon: NodeRequire;
  text?: string;
  width?: number;
  height?: number;
  color?: string;
};

interface IHeader {
  type?: TType;
  title?: string;
  left?: TSide;
  right?: TSide;
  caption?: string;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  leftActionType?: TAction;
  rightActionType?: TAction;
  titleColor?: string;
}

export const Header: React.FC<IHeader> = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: '#00497C',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});
