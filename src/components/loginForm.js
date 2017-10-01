import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

export default class LoginForm extends Component {
  state = { text: '' };
  render() {
    return (
      <Card>
        <CardSection>
          <TextInput
            value={this.state.text}
            onChangeText={text => this.setState({ text: text })}
            style={{ width: 100 }}
          />
        </CardSection>

        <CardSection>
          <TextInput />
        </CardSection>

        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}
