import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Divider, TextInput, Text } from "react-native-paper";

export default class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  state = {
    email: "",
    password: "",
    visible: false
  };

  render() {
    return (
    <View>
        <TextInput
          label="Email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          mode="outlined"
          autoCapitalize="none"
        />
        <TextInput
          label="Password"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          mode="outlined"
          secureTextEntry={true}
        />

        <Divider inset={true} />

        <Button
          title="Create Account"
          color="#ed6b18"
          onPress={() => this.props.navigation.navigate("CreateAccount")}
        />
      </View>
    );
  }
}
