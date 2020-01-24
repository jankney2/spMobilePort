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
} from 'react-native';

import Nav from './components/Nav.js'

const App=() => {
  return (
    <>
      <SafeAreaView>
  <Nav />       
      </SafeAreaView>
    </>
  );
};


export default App;
