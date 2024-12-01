import {Text, TextInput, View, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../theme/colors';

interface IInput {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  caption?: string;
}

export const Input: React.FC<IInput> = ({
  placeholder = '',
  value,
  onChangeText,
  caption,
}) => {
  return (
    <View style={styles.container}>
      {caption && <Text style={styles.caption}>{caption}</Text>}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  caption: {
    marginBottom: 4,
    fontSize: 14,
    color: colors.black,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 8,
    fontSize: 16,
    width: '100%',
    height: 47,
  },
});
