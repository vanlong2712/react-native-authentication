import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/loginForm';

export default class App extends Component {
  state = { loggedIn: null };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBUpAALwJoTJ3GyCqu7TrHbYPlxIyWs5-M',
      authDomain: 'authentication-5b96c.firebaseapp.com',
      databaseURL: 'https://authentication-5b96c.firebaseio.com',
      projectId: 'authentication-5b96c',
      storageBucket: 'authentication-5b96c.appspot.com',
      messagingSenderId: '796894353299'
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View flexDirection="row">
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}
