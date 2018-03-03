import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import {
  FIREBASE_APIKEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID
} from 'react-native-dotenv';
import LoginForm from './components/LoginForm';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: FIREBASE_APIKEY,
      authDomain: FIREBASE_AUTH_DOMAIN,
      databaseURL: FIREBASE_DATABASE_URL,
      projectId: FIREBASE_PROJECT_ID,
      storageBucket: FIREBASE_STORAGE_BUCKET,
      messagingSenderId: FIREBASE_MESSAGING_SENDER_ID
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
