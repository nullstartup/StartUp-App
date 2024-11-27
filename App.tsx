/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Router from './src/router/Router';
import {LogBox} from 'react-native';

function App(): React.JSX.Element {
  LogBox.ignoreAllLogs(); 

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
