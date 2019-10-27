import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { Button, TextInput, Subheading, Divider } from 'react-native-paper';

export default class SignInCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _createAccount = () => {
    this.props.navigation.navigate('CreateAccount');
  };
  render() {
    return (
      <View style={styles.apple}>
        <Button
          contentStyle={styles.anonButton}
          mode="contained"
          icon="person"
          color="#ed6b18"
          onPress={this._createAccount}
        >
          Create Account
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  anonButton: {
    height: 48
  }
});
