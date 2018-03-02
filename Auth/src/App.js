import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Authentication" />
      </View>
    );
  }
}

export default App;
