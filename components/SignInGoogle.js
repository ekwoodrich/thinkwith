import React, { Component } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { StyleSheet } from 'react-native';
import { Button, TextInput, Subheading, Divider } from 'react-native-paper';
import {
  GoogleSignin,
  statusCodes
} from '@react-native-community/google-signin';
import { firebase } from '@react-native-firebase/auth';

export default class SignInGoogle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _signInWithGoogle = async () => {
    try {
      const { accessToken, idToken } = await GoogleSignin.signIn();
      const credential = firebase.auth.GoogleAuthProvider.credential(
        idToken,
        accessToken
      );
      await firebase.auth().signInWithCredential(credential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  render() {
    return (
      <View style={styles.button}>
        <Button
          contentStyle={styles.googleButton}
          mode="contained"
          color="white"
          icon={({ size, color }) => (
            <Image
              source={require('../assets/img/g-logo.png')}
              style={{ width: 18, height: 18 }}
            />
          )}
          onPress={this._signInWithGoogle}
        >
          Sign in with Google
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 8
  },
  googleButton: {
    height: 48
  }
});
