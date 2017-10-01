import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/loginForm';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBUpAALwJoTJ3GyCqu7TrHbYPlxIyWs5-M',
      authDomain: 'authentication-5b96c.firebaseapp.com',
      databaseURL: 'https://authentication-5b96c.firebaseio.com',
      projectId: 'authentication-5b96c',
      storageBucket: 'authentication-5b96c.appspot.com',
      messagingSenderId: '796894353299'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}
