/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image
} from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Loading from './containers/Loading';
import SignUp from './containers/Signup';
import PreLogin from './containers/PreLogin';


const AppNavigator = createSwitchNavigator({
  App: Loading,
  Auth: SignUp,
  PreLogin,
}, {
  initialRouteName: 'PreLogin',
})

const AppContainer = createAppContainer(AppNavigator);


const App = () => {
  return (
    <AppContainer />
  );
};


export default App;
