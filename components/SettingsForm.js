import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Switch, Subheading } from 'react-native-paper';

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
        <Subheading>Fingerprint </Subheading>
        <Switch
          value={this.state.optionFingerprint}
          onValueChange={() => {
            this.setState({ optionFingerprint: !this.state.optionFingerprint });
          }}
        />
      </View>
    );
  }
}
