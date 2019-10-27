import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { Button, TextInput, Subheading, Divider } from 'react-native-paper';

export default class SignInGoogle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
          onPress={() => {
            console.log('sign in with google');
          }}
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
