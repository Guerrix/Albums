import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCo7nFcwaojwYDink3XNCELZAhyRY0vr9g',
      authDomain: 'auth-reactnavite.firebaseapp.com',
      databaseURL: 'https://auth-reactnavite.firebaseio.com',
      projectId: 'auth-reactnavite',
      storageBucket: 'auth-reactnavite.appspot.com',
      messagingSenderId: '690678475945'
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Authentication" />
      </View>
    );
  }
}

export default App;
