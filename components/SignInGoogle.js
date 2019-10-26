import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { Button, TextInput, Subheading, Divider } from 'react-native-paper';

export default class SignInGoogle extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <View style={styles.button}>
    <Button mode="contained" color="#585858" onPress={() => {console.log('sign in with google')}}>
        Sign in with Google
    </Button>
    </View>
    );
  }
}

const styles = StyleSheet.create({
   
    button : {
        marginBottom: 10
    }
});