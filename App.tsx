/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Router from './src/router/Router';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Router />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
