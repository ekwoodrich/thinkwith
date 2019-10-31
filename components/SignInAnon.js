import React, { Component } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { StyleSheet } from 'react-native';
import { Button, TextInput, Subheading, Divider } from 'react-native-paper';
import { firebase } from '@react-native-firebase/auth';

export default class SignInAnon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _signInAnon = async () => {
    await firebase.auth().signInAnonymously();
  };
  render() {
    return (
      <View style={styles.apple}>
        <Button
          contentStyle={styles.anonButton}
          mode="contained"
          color="#585858"
          icon={({ size, color }) => (
            <Image
              source={require('../assets/img/incognito.png')}
              style={{ width: 20, height: 20 }}
            />
          )}
          onPress={this._signInAnon}
        >
          Sign in Anonymously
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
