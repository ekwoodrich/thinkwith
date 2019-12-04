import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Switch, Subheading } from 'react-native-paper';
import { Button, Badge } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  avatar: {
    marginTop: 20
  },
  email: {
    fontSize: 20,
    marginTop: 10
  }
});

export default class SettingsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionFingerprint: false
    };
  }

  render() {
    return (
      <View>
        <View>
          <Button
            icon="camera"
            mode="contained"
            color="black"
            onPress={() => console.log('Pressed')}
          >
            Press me
          </Button>
        </View>
      </View>
    );
  }
}
