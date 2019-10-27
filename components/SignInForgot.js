import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { Button, TextInput, Subheading, Divider } from 'react-native-paper';

export default class SignInForgot extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.button}>
        <Button
          contentStyle={styles.passwordButton}
          mode="contained"
          color="#ed6b18"
          onPress={() => {
            console.log('get new password');
          }}
        >
          Get New Password
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10
  },
  passwordButton: {
    height: 48
  }
});
