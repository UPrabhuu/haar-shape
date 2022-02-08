/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';

enableScreens();

// import MainNavigatorA or MainNavigatorB to preview design differnces
import MainNavigator from './src/navigation/HaarshapeMainNavigator';

// APP
export default function App() {
  return (
    <SafeAreaProvider>
      <MainNavigator />
    </SafeAreaProvider>
  );
}

 App;
