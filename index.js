import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import TempratureList from './src/components/TempratureList';

const App = () => {
  return (
    <View>
      <Header headerText="COASTLINES" />
      <TempratureList />
    </View>
  );
};

AppRegistry.registerComponent('coastlineapp', () => App);
