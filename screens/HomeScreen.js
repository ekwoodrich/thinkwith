import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button } from 'react-native-paper';
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Button
          mode="contained"
          color="#ed6b18"
          onPress={() => {
            this.props.navigation.navigate('SignIn');
          }}
        >
          Sign In
        </Button>
        <Button
          mode="contained"
          color="#ed6b18"
          onPress={() => {
            this.props.navigation.navigate('Finger');
          }}
        >
          Fingerprint
        </Button>
        <Button
          mode="contained"
          color="#ed6b18"
          onPress={() => {
            this.props.navigation.navigate('Profile');
          }}
        >
          Profile
        </Button>
      </View>
    );
  }
}

export default withNavigation(HomeScreen);
