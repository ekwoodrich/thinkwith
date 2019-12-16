import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

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
