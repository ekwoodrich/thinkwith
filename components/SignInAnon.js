import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { Button, TextInput, Subheading, Divider } from 'react-native-paper';

export default class SignInAnon extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <View style={styles.apple}>
    <Button contentStyle={styles.anonButton} mode="contained" icon="lock" color="#585858" onPress={() => {console.log('sign in anon')}}>
        Sign in Anonymously
    </Button>
    </View>
    );
  }
}

const styles = StyleSheet.create({

    anonButton: {
        height:48
    
    }
});